import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFoundPage from "../NotFoundPage/index";




export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
