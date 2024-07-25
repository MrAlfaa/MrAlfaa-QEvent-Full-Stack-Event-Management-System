import Container from "@material-ui/core/Container";
import GuestAppBar from "../../components/appbar/GuestAppBar";
import RegisterForm from "../../form/register/RegisterForm";

const RegisterView = () => {

    return (
        <Container>
            <GuestAppBar/>
            <RegisterForm/>
        </Container>
    );

}

export default RegisterView;