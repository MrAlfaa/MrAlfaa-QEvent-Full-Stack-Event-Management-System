import Container from "@material-ui/core/Container";
import InternalAppBar from "../../components/appbar/InternalAppBar";
import ManageEvents from "../../containers/internal/event-management/ManageEvents";

const ManageEventsView = () => {

    return (
        <Container>
            <InternalAppBar>
                <ManageEvents/>
            </InternalAppBar>
        </Container>
    );

}

export default ManageEventsView;