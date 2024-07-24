import {useHistory} from "react-router-dom";
import MemberAppBar from "./MemberAppBar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import HomeIcon from "@material-ui/icons/Home";
import ListItemText from "@material-ui/core/ListItemText";
import EventIcon from "@material-ui/icons/Event";
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import React from "react";
import AuthenticationApi from "../../api/AuthenticationApi";
import {toast} from "react-toastify";

const ExternalAppBar = (props) => {

    let history = useHistory();

    const redirectHome = () => {
        history.push("/");
    }

    function redirectAttendEvents() {
        if (!AuthenticationApi.isUserLoggedIn()) {
            toast.error("You must be logged in to view this page");
            history.push("/login");
        } else {
            history.push("/attend-to-events");
        }
    }

    function redirectAttendedEvents() {
        if (!AuthenticationApi.isUserLoggedIn()) {
            toast.error("You must be logged in to view this page");
            history.push("/login");
        } else {
            history.push("/attended-events");
        }
    }

    const drawerItems = () => {
        return (
            <List>
                <ListItem button key={"Home"} onClick={redirectHome}>
                    <ListItemIcon> <HomeIcon/> </ListItemIcon>
                    <ListItemText primary={"Home"}/>
                </ListItem>
                <ListItem button key={"Attend to Events"} onClick={redirectAttendEvents}>
                    <ListItemIcon> <EventIcon/> </ListItemIcon>
                    <ListItemText primary={"Attend to Events"}/>
                </ListItem>
                <ListItem button key={"Attended Events"} onClick={redirectAttendedEvents}>
                    <ListItemIcon> <EventAvailableIcon/> </ListItemIcon>
                    <ListItemText primary={"Attended Events"}/>
                </ListItem>
            </List>
        )
    }

    return (
        <MemberAppBar getDrawerItems={drawerItems}>
            {props.children}
        </MemberAppBar>
    )

}

export default ExternalAppBar;