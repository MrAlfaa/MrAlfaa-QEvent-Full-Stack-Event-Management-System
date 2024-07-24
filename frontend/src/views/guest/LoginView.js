import Container from "@material-ui/core/Container";
import GuestAppBar from "../../components/appbar/GuestAppBar";
import LoginForm from "../../form/login/LoginForm";

const LoginView = () => {

    return (
        <Container>
            <GuestAppBar/>
            <LoginForm/>
        </Container>
    );

}

export default LoginView;