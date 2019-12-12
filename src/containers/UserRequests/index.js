import React, { useEffect, useState } from "react";

import { useParams, useHistory } from "react-router-dom";

import UserRequestHeader from "../../components/UserRequestsHeader";
import UserRequestTable from "../UserRequestsTable";

export default function UserRequests() {
	const { id } = useParams();
  const history = useHistory();
  const [state, setState] = React.useState(false);
	const [filters, setFilters] = React.useState(() => ["pending"]);
  const [requestData, setData] = useState([]);
  const [error, setError] = useState("");


  const handleStatusChange = (event, newFilter) => {
    setFilters(newFilter);
  };

  const handleStateChange = () => {
    setState(!state);
	};
	
	useEffect(() => {
    if (id !== localStorage.getItem("id")) {
      history.push("/unauthorized");
    }
    fetchRequests();
  }, [id]);

	const fetchRequests = () => {
    setError("");
    const options = {
      method: "GET",
      credentials: "same-origin",
      headers: {
        authorization: localStorage.getItem("token")
      }
    };
    fetch(`http://localhost:8080/users/${id}/requests`, options)
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

	const filterByStatus = (requests, filters) => {
		let newRequests = [];
		if (filters.length === 0) {
			return requests;
		}
		if (filters.includes("pending")) {
			newRequests = newRequests.concat(
				requests.filter(x => x.status.name === "pending")
			);
		}
		if (filters.includes("accepted")) {
			newRequests = newRequests.concat(
				requests.filter(x => x.status.name === "accepted")
			);
		}
		if (filters.includes("rejected")) {
			newRequests = newRequests.concat(
				requests.filter(x => x.status.name === "rejected")
			);
		}
		return newRequests;
	};

	const proccesedRequests = () => {
    const data = state
      ? requestData
      : requestData.filter(
          request => new Date(request.trip.departure_date).getTime() > Date.now()
        );
    return data;
  };
	const data = filterByStatus(proccesedRequests(), filters);
  return (
    <div>
      <UserRequestHeader
        switchState={state}
        switchSetState={() => handleStateChange()}
        handleStatusChange={handleStatusChange}
        filters={filters}
      />
			{ data.length !== 0 ? 			
			<UserRequestTable data={data}/>// data.map(request => <div key={request.requestID}>{request.trip.departure_date}</div>
			 :
			null
		}
    </div>
  );
}
