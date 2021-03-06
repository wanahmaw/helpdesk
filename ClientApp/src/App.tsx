import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Dashboard } from "./components/Dashboard";
import { FetchData } from "./components/FetchData";
import { Counter } from "./components/Counter";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/login/Login";
import TicketPage from "./components/tickets/TicketPage";
import AddTicket from "./components/tickets/AddTicket";
import UpdateTicket from "./components/tickets/UpdateTicket";

import "./custom.css";

class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Route exact path="/" component={Login} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <ProtectedRoute path="/ticket/:ticketId" component={TicketPage} />
          <ProtectedRoute path="/ticket-new" component={AddTicket} />
          <ProtectedRoute
            path="/ticket-update/:ticketId"
            component={UpdateTicket}
          />
          <ProtectedRoute path="/counter" component={Counter} />
          <ProtectedRoute path="/fetch-data" component={FetchData} />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
