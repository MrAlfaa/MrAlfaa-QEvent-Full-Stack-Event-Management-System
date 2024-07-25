import Container from "@material-ui/core/Container";
import InternalAppBar from "../../components/appbar/InternalAppBar";
import EventOperations from "../../containers/internal/event-operations/EventOperations";

const EventOperationsView = () => {

    return (
        <Container>
            <InternalAppBar>
                <EventOperations/>
            </InternalAppBar>
        </Container>
    );

}

export default EventOperationsView;