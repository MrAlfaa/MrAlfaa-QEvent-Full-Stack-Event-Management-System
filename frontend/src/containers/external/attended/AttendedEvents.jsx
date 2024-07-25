import {makeStyles} from "@material-ui/core/styles";
import EventContainer from "../event/EventContainer";
import {useEffect, useState} from "react";
import AttendanceApi from "../../../api/AttendanceApi";
import {toast} from "react-toastify";
import AuthenticationApi from "../../../api/AuthenticationApi";
import QRCodeAttandance from "../event/QRCodeAttandance";

const useStyles = makeStyles((theme) => ({}));

const AttendedEvents = () => {

    const classes = useStyles();

    const [isModalOpen, setModalOpen] = useState(false);

    const [eventList, updateEventList] = useState([]);

    const [qrcode, setQrcode] = useState();

    const fetchEvents = () => {
        AttendanceApi.getAttendedEventsByUserTc(AuthenticationApi.getUserTc())
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

    const toggleModal = () => {
        setModalOpen(!isModalOpen);
    }

    const onAction = async (fields) => {
        setCurrentEvent(fields);

        const res = await AttendanceApi.getQRCode(AuthenticationApi.getUserTc(), fields.id);

        setQrcode(res);

        toggleModal();
    }

    return (
        <div>
            <EventContainer onActionName={"QRCode"} onActionHandler={onAction} eventList={[...eventList]}/>
            <QRCodeAttandance qrcode={qrcode} isOpen={isModalOpen} onClose={() => setModalOpen(false)}
                              fields={currentEvent}/>
        </div>
    );
}

export default AttendedEvents;