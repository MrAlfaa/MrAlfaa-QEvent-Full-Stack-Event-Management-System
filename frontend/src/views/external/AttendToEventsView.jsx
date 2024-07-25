import Container from "@material-ui/core/Container";
import ExternalAppBar from "../../components/appbar/ExternalAppBar";
import AttendToEvents from "../../containers/external/attend/AttendToEvents";

const AttendToEventsView = () => {

    return (
        <Container>
            <ExternalAppBar>
                <AttendToEvents/>
            </ExternalAppBar>
        </Container>
    );

}

export default AttendToEventsView;