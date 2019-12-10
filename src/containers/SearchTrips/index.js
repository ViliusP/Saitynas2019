import React, { useState, useEffect } from "react";
import SearchTripTemplate from "../../components/SearchTripTemplate";
import { useHistory } from "react-router-dom";
import ModalContainer from "../../components/ModalContainer";
import PostRequestForm from "../PostRequestForm";

import ScheduleBo from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Snackbar from '@material-ui/core/Snackbar';
import Grow from '@material-ui/core/Grow';

export default function SearchTrips() {
  const [tripsData, setData] = useState([]);
  const [error, setError] = useState("");
	const [requestResult, setRequestResult] = useState("");
	const [showExpired, setShow] = useState(false);
  const [DataAndOpen, setDataAndOpen] = useState({ open: false, data: {} });
  const [test] = useState(0);


	const proccesedTrips = () => { 
		const data = showExpired ? 
			tripsData : 
			tripsData.filter(trip => new Date(trip.departure_date).getTime() > Date.now() )
		return data;
	}


  const closeModal = () => setDataAndOpen({ open: false, data: {} });
  let history = useHistory();
  useEffect(() => {
    fetchTrips();
  }, [test]);

  const fetchTrips = () => {
    setError("");
    const options = {
      method: "GET",
      credentials: "same-origin",
      headers: {
        authorization: localStorage.getItem("token")
      }
    };
    fetch("http://localhost:8080/trips", options)
      .then(
        result => {
          if (result.status === 401) {
            console.log("Not authorized");
            localStorage.clear();
            history.push("/login");
          } else if (result.status > 402 && result.status < 500) {
            console.log("400> <500");
          } else if (result.status >= 500) {
            setError("Internal server error");
          } else {
            return result.json();
          }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          setError(error.toString());
          console.log("Error /SearchTrips: " + error);
          return;
        }
      )
      .then(res => {
        if (res === undefined) {
          setData([]);
          return;
        }
        setData(res);
      });
  };
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox checked={showExpired} onChange={() => setShow(!showExpired)} value="checkedA" color="primary" />
        }
        label="show expired"
      />
      {error === "" ? (
        <div>
          {proccesedTrips().map(trip => (
            <SearchTripTemplate
              key={trip.tripID}
              tripID={trip.tripID}
              tripFirstCity={trip.departure_city.name}
              tripLastCity={trip.destination_city.name}
              cost={trip.cost}
              space={trip.space}
              info={trip.info}
              postDate={trip.creation_date}
              departureDate={trip.departure_date}
              userFirstName={trip.user.first_name}
              userLastName={trip.user.last_name}
              phoneNumber={trip.user.phone_number}
              photoURL={trip.user.photo_URL}
              setDataAndOpen={setDataAndOpen}
            />
          ))}
          <ModalContainer open={DataAndOpen.open} close={() => closeModal()}>
            <PostRequestForm setRequestResult={(results)=>setRequestResult(results)} close={()=>closeModal()} data={DataAndOpen.data} />
          </ModalContainer>
        </div>
      ) : (
        <div>{error}</div>
      )}

			<Snackbar
        open={requestResult != ""}
				onClose={()=> {setRequestResult(""); }}
				onEnter={()=> fetchTrips()}
				autoHideDuration={2000}
        TransitionComponent={Grow}
        ContentProps={{
          "aria-describedby": "message-id"
        }}
        message={<span id="message-id">{requestResult}</span>}
      />
    </div>
  );
}
