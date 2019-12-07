import React from "react";

export default function SearchTripTemplate(props) {
  const {
    tripID,
    tripFirstCity,
    tripLastCity,
    cost,
    space,
    info,
    postData,
    departureDate,
    userFirstName,
    userLastName,
    phoneNumber,
    photoURL
  } = props;

  return (
    <div>
      {tripFirstCity} - {tripLastCity} | {cost} {space} {info} | {postData}{" "}
      {departureDate} |{userFirstName} {userLastName} |{phoneNumber} {photoURL}
    </div>
  );
}
