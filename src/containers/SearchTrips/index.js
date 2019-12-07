import React, { useState, useEffect } from "react";
import SearchTripTemplate from "../../components/SearchTripTemplate";
import { useHistory } from "react-router-dom";
import { instanceOf } from "prop-types";

export default function SearchTrips() {
  const [tripsData, setData] = useState([]);
  const [test, setTest] = useState(0);

  let history = useHistory();
  useEffect(() => {
    fetchTrips();
  }, [test]);

  const fetchTrips = () => {
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
          console.log("REsults: ");
          console.log(result);
          if (result.status === 401) {
            localStorage.clear();
            history.push("/login");
          } else if (result.status > 402 && result.status < 500) {
            console.log("400> <500");
          } else if (result.status >= 500) {
            console.log("Internal server error");
          } else {
            return result.json();
          }
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          console.log("Error /SearchTrips: " + error);
          return;
        }
      )
      .then(res => {
        setData(res);
        console.log("Success");
        console.log(res);
      });
  };

  return (
    <div>
      {tripsData.map(trip => (
        <SearchTripTemplate
          key={trip.tripID}
          tripFirstCity={trip.departure_city.name}
					tripLastCity={trip.destination_city.name}
					cost = {trip.cost}
					space = {trip.space}
					info = {trip.info}
					postDate={trip.creation_date}
					departureDate={trip.departure_date}
					userFirstName={trip.user.first_name}
					userLastName={trip.user.last_name}
					phoneNumber = {trip.user.phone_number}
					photoURL = {trip.user.photo_URL}
				/>
      ))}
    </div>
  );
}
