import {Grid} from "@material-ui/core";
import EventCard from "./EventCard";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({

    root: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[900],
    },
}));

const EventContainer = (props) => {

    const eventList = props.eventList;

    const classes = useStyles();

    const onActionHandler = (fields) => {
        props.onActionHandler(fields);
    }

    return (

        <Container className={classes.root} maxWidth="md">
            <Grid container spacing={4}>
                {eventList.map((event) =>
                    (
                        <Grid key={event.id} item xs={12} sm={6} md={4}>
                            <EventCard fields={event} actionName={props.onActionName}
                                       onActionHandler={onActionHandler}/>
                        </Grid>
                    )
                )}
            </Grid>
        </Container>

    );

}

export default EventContainer;