import {useEffect, useState} from "react";
import EventList from "../../../components/list/EventList";
import EventApi from "../../../api/EventApi";
import {toast} from "react-toastify";
import AttendeeList from "../../../components/list/AttendeeList";
import {Grid, Paper} from "@material-ui/core";
import GeneralChart from "../../../components/chart/GeneralChart";
import SpecificChart from "../../../components/chart/SpecificChart";

const EventOperations = () => {

    const [eventList, setEventList] = useState([]);
    const [currentEvent, setCurrentEvent] = useState(null);

    const [isGeneralChartModalOpen, setGeneralChartModalOpenOpen] = useState(false);

    const [isSpecificChartModalOpen, setSpecificChartModalOpen] = useState(false);

    function fetchEvents() {
        EventApi.getAllEventsWithDetails()
            .then(data => setEventList(data))
            .catch((error) => {
                    switch (error.response.status) {
                        case 400:
                            error.response.data.forEach(toast.error);
                            break;
                        default:
                            toast.error("Error: " + error.response.status);
                            break;
                    }
                }
            );
    }

    useEffect(() => {
        fetchEvents();
    }, []);

    const onSelectionChangeHandler = (fields) => {
        setCurrentEvent(fields);
    }

    return (
        <div>
            <Grid
                container
                spacing={3}
                direction="column"
                justifyContent="center"
            >
                <Grid item>
                    <Paper elevation={3}>
                        <EventList
                            fields={eventList}
                            onSelectionChangedHandler={onSelectionChangeHandler}
                            onChartOpen={() => setGeneralChartModalOpenOpen(true)}
                        />
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper elevation={3}>
                        <AttendeeList
                            fields={currentEvent}
                            onChartOpen={() => setSpecificChartModalOpen(true)}
                        />
                    </Paper>
                </Grid>
            </Grid>
            <GeneralChart
                isOpen={isGeneralChartModalOpen}
                onClose={() => setGeneralChartModalOpenOpen(false)}
                eventTitles={eventList.map(event => event.title)}
                attendeeCounts={eventList.map(event => event.attendees.length)}
            />
            <SpecificChart
                isOpen={isSpecificChartModalOpen}
                onClose={() => setSpecificChartModalOpen(false)}
                attendanceDates={currentEvent === null ? [] : currentEvent.attendanceDates}
                attendanceCounts={currentEvent === null ? [] : currentEvent.attendanceCounts}
            />
        </div>

    );
}

export default EventOperations;