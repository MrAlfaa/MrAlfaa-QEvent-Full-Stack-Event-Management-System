import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import EventNoteIcon from '@material-ui/icons/EventNote';
import AuthenticationApi from "../../api/AuthenticationApi";
import {useHistory} from "react-router-dom";
import {toast} from "react-toastify";
import MemberAppBar from "./MemberAppBar";

const InternalAppBar = (props) => {

    let history = useHistory();

    const drawerItems = () => {
        return (
            <List>
                <ListItem button key={"Home"} onClick={redirectHome}>
                    <ListItemIcon> <HomeIcon/> </ListItemIcon>
                    <ListItemText primary={"Home"}/>
                </ListItem>
                <ListItem button key={"Manage Events"} onClick={redirectManageEvents}>
                    <ListItemIcon> <EventIcon/> </ListItemIcon>
                    <ListItemText primary={"Manage Events"}/>
                </ListItem>
                <ListItem button key={"Event Operations"} onClick={redirectEventOperations}>
                    <ListItemIcon> <EventNoteIcon/> </ListItemIcon>
                    <ListItemText primary={"Event Operations"}/>
                </ListItem>
            </List>
        );
    }

    const redirectHome = () => {
        history.push("/");
    }

    function redirectEventOperations() {
        if (!AuthenticationApi.isUserLoggedIn()) {
            toast.error("You must be logged in to view this page");
            history.push("/login");
        } else {
            history.push("/event-operations");
        }
    }

    function redirectManageEvents() {
        if (!AuthenticationApi.isUserLoggedIn()) {
            toast.error("You must be logged in to view this page");
            history.push("/login");
        } else {
            history.push("/manage-events");
        }
    }

    return (
        <MemberAppBar getDrawerItems={drawerItems}>
            {props.children}
        </MemberAppBar>
    );
}

export default InternalAppBar;