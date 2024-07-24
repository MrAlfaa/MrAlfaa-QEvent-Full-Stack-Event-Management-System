import Container from "@material-ui/core/Container";
import ExternalAppBar from "../../components/appbar/ExternalAppBar";
import ExternalHero from "../../components/hero/ExternalHero";

const ExternalLanding = () => {

    return (
        <Container>
            <ExternalAppBar>
                <ExternalHero/>
            </ExternalAppBar>
        </Container>
    );

}

export default ExternalLanding;