import {makeStyles} from "@material-ui/core/styles";
import EventContainer from "../event/EventContainer";
import {useEffect, useState} from "react";
import InfoEvent from "../event/InfoEvent";
import AttendanceApi from "../../../api/AttendanceApi";
import {toast} from "react-toastify";
import AuthenticationApi from "../../../api/AuthenticationApi";

const useStyles = makeStyles((theme) => ({}));

const AttendToEvents = () => {

    const classes = useStyles();

    const [isInfoModalOpen, setInfoModalOpen] = useState(false);

    const [eventList, updateEventList] = useState([]);

    const fetchEvents = () => {
        AttendanceApi.getCurrentEventsByUserTc(AuthenticationApi.getUserTc())
            .then(data => updateEventList(data))
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
    }, [eventList])

    const [currentEvent, setCurrentEvent] = useState({});

    const toggleInfoModal = () => {
        setInfoModalOpen(!isInfoModalOpen);
    }

    const onShowInfo = (fields) => {
        setCurrentEvent(fields);
        toggleInfoModal();
    }

    const onAttend = (eventId) => {

        AttendanceApi.attend(AuthenticationApi.getUserTc(), eventId)
            .then((response) => {
                response.data.forEach(toast.success);
            }).catch(
            (error) => {
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

    return (
        <div>
            <EventContainer onActionName={"LEARN MORE"} onActionHandler={onShowInfo} eventList={[...eventList]}/>
            <InfoEvent isOpen={isInfoModalOpen} onClose={() => setInfoModalOpen(false)} fields={currentEvent}
                       onClickHandler={onAttend}/>
        </div>
    );
}

export default AttendToEvents;