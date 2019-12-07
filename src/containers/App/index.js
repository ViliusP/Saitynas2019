import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NotFoundPage from "../NotFoundPage/index";
import LoggedUserLayout from "../LoggedUserLayout/index";
import SignIn from "../SignIn";
import Homepage from "../Homepage";

import JwtDecode from 'jwt-decode';


function isJwtValid() {
	let token = localStorage.getItem("token");
	if(token !== null) { 
		var decoded = JwtDecode(token);
		localStorage.setItem('first_name', decoded.first_name);
		localStorage.setItem('last_name', decoded.last_name);
		return true;
	}
	return false;
}


export default function App() {


const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
	Layout === undefined
		? //eslint-disable-next-line
			(Layout = props => <React.Fragment>{props.children}</React.Fragment>)
		: null,
	isJwtValid() ? (
		<Route
			{...rest}
			render={props => (
				<Layout>
					<Component {...props} />
				</Layout> 
			)}
		/>
	) : (<Redirect to='/login' />)
);
	
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={SignIn} />
           <AppRoute
            exact
            path="/"
            layout={LoggedUserLayout}
						component={Homepage}
          />
          <AppRoute layout={LoggedUserLayout} component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
