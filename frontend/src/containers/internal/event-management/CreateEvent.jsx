import React from "react";
import {Dialog, DialogTitle, IconButton} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import CreateEventForm from "../../../form/event/CreateEventForm";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[900],
    },
}));

const CreateEvent = (props) => {

    const classes = useStyles();

    return (
        <Dialog open={props.isOpen} onClose={props.onClose} className={classes.root}>

            <DialogTitle>Create Event</DialogTitle>

            <IconButton onClick={props.onClose} className={classes.closeButton}>
                <CloseIcon/>
            </IconButton>

            <CreateEventForm/>

        </Dialog>
    );
}

export default CreateEvent;