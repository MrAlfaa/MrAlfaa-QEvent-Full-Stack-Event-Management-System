import Container from "@material-ui/core/Container";
import InternalAppBar from "../../components/appbar/InternalAppBar";
import InternalHero from "../../components/hero/InternalHero";

const InternalLanding = () => {

    return (
        <Container>
            <InternalAppBar>
                <InternalHero/>
            </InternalAppBar>
        </Container>
    );

}

export default InternalLanding;