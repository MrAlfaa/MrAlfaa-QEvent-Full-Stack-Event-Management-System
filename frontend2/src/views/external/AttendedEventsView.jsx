import Container from "@material-ui/core/Container";
import ExternalAppBar from "../../components/appbar/ExternalAppBar";
import AttendedEvents from "../../containers/external/attended/AttendedEvents";

const AttendedEventsView = () => {

    return (
        <Container>
            <ExternalAppBar>
                <AttendedEvents/>
            </ExternalAppBar>
        </Container>
    );

}

export default AttendedEventsView;