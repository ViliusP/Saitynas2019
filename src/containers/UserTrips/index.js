import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import UserTrip from "../../components/UserTrip";
import UserTripsHeading from "../../components/UserTripsHeading";




export default function UserTrips() {
  const { id } = useParams();
  const history = useHistory();
  const [tripsData, setData] = useState([]);
  const [error, setError] = useState("");
  const [expanded, setExpanded] = React.useState(false);
	const [state, setState] = React.useState(false)
	const [filters, setFilters] = React.useState(() => ['pending']);
	
	
	const handleStatusChange = (event, newFilter) => {
		console.log(newFilter);
    setFilters(newFilter);
	};

	const handleStateChange = () => {
		setState(!state)
	}


  useEffect(() => {
    if (id !== localStorage.getItem("id")) {
      history.push("/unauthorized");
    }
    fetchTrips();
  }, [id]);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const fetchTrips = () => {
    setError("");
    const options = {
      method: "GET",
      credentials: "same-origin",
      headers: {
        authorization: localStorage.getItem("token")
      }
    };
    fetch(`http://localhost:8080/users/${id}/trips`, options)
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
	

	const proccesedTrips = () => {
		const data = state
			? tripsData
			: tripsData.filter(
					trip => new Date(trip.departure_date).getTime() > Date.now()
				);
		return data;
	};
	


  return (
    <div>

			<UserTripsHeading switchState={state} switchSetState={()=> handleStateChange()} handleStatusChange={handleStatusChange} filters={filters} />
      {proccesedTrips().map(trip => (
        <UserTrip
          key={trip.tripID}
          trip={trip}
          handleChange={panel => handleChange(panel)}
					expanded={expanded}
					requestFilters={filters}
        />
      ))}
    </div>
  );
}
