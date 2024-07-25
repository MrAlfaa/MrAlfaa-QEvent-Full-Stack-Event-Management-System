import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import ManageEvents from "./containers/internal/event-management/ManageEvents";
import GuestLanding from "./views/guest/GuestLanding";
import {Container} from "@material-ui/core";
import LoginView from "./views/guest/LoginView";
import RegisterView from "./views/guest/RegisterView";
import InternalLanding from "./views/internal/InternalLanding";
import AuthenticationApi from "./api/AuthenticationApi";
import ExternalLanding from "./views/external/ExternalLanding";
import {toast} from "react-toastify";
import PrivateRoute from "./components/common/PrivateRoute";
import AttendToEventsView from "./views/external/AttendToEventsView";
import ManageEventsView from "./views/internal/ManageEventsView";
import AttendedEventsView from "./views/external/AttendedEventsView";
import EventOperationsView from "./views/internal/EventOperationsView";

function App() {

    const landingHandler = () => {
        switch (AuthenticationApi.getUserAuthentication()) {
            case "INTERNAL":
                return (<InternalLanding/>);
            case "EXTERNAL":
                return (<ExternalLanding/>);
            default:
                return (<GuestLanding/>);
        }
    }

    const manageEventsHandler = () => {
        switch (AuthenticationApi.getUserAuthentication()) {
            case "INTERNAL":
                return (<ManageEvents/>);
            case "EXTERNAL":
                toast.error("You are not authorized to view this page");
                return (<ExternalLanding/>);
            default:
                toast.error("You are not authorized to view this page");
                return (<GuestLanding/>);
        }
    }

    return (
        <BrowserRouter>
            <Container className="App-content">
                <Route exact={true} path="/" component={landingHandler}/>
                <Route exact={true} path="/login" component={LoginView}/>
                <Route exact={true} path="/register" component={RegisterView}/>
                <PrivateRoute exact={true} path="/manage-events" authType={"INTERNAL"}
                              component={ManageEventsView}/>
                <PrivateRoute exact={true} path="/event-operations" authType={"INTERNAL"}
                              component={EventOperationsView}/>
                <PrivateRoute exact={true} path="/attend-to-events" authType={"EXTERNAL"}
                              component={AttendToEventsView}/>
                <PrivateRoute exact={true} path="/attended-events" authType={"EXTERNAL"}
                              component={AttendedEventsView}/>
            </Container>
        </BrowserRouter>
    );
}

export default App;
