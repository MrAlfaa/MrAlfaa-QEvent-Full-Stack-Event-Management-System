import Container from "@material-ui/core/Container";
import GuestAppBar from "../../components/appbar/GuestAppBar";
import GuestHero from "../../components/hero/GuestHero";

const GuestLanding = () => {

    return (
        <Container>
            <GuestAppBar/>
            <GuestHero/>
        </Container>
    );

}

export default GuestLanding;