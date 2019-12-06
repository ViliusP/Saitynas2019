import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFoundPage from "../NotFoundPage/index";
import LoggedUserLayout from "../LoggedUserLayout/index";

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
	Layout === undefined ?
	//eslint-disable-next-line
	  Layout = props => (<React.Fragment>{props.children}</React.Fragment>) : null,
	<Route {...rest} render={props => (
	  <Layout>
		<Component {...props} />
	  </Layout>
	)} />
  );

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <AppRoute layout={LoggedUserLayout}  component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
