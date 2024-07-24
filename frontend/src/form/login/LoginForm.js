import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import {makeStyles} from "@material-ui/core/styles";
import {FormControl, IconButton, Input, InputAdornment, InputLabel,} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import AuthenticationApi from "../../api/AuthenticationApi";
import {toast} from "react-toastify";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(10),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1),
    },
    item: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    }
}));

const LoginForm = () => {

    const classes = useStyles();

    const [values, setValues] = useState({
        username: "",
        password: "",
        showPassword: false,
    });

    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        AuthenticationApi.executeAuthentication(values.username, values.password)
            .then((response) => {
                AuthenticationApi.registerSuccessfulLogin(values.username, response.data.tcNo, response.data.authority, response.data.token);
                toast(`Welcome back! ${values.username}`);

                history.push("/");
            }).catch((error) => {
                switch (error.response.status) {
                    case 400:
                        toast.error("Username or password is incorrect");
                        break;
                    default:
                        toast.error("Error: " + error.response.status);
                        break;
                }
            }
        );

    };

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({...values, showPassword: !values.showPassword});
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>

            <div className={classes.paper}>

                <AccountCircleIcon style={{fontSize: 80}}/>
                <Typography component="h1" variant="h6">
                    Login Form
                </Typography>

                <form className={classes.form} onSubmit={handleSubmit}>

                    <FormControl className={classes.item} fullWidth>
                        <InputLabel htmlFor="username">Username</InputLabel>
                        <Input
                            id="username"
                            name={"username"}
                            value={values.username}
                            variant={"outlined"}
                            onChange={handleChange("username")}
                            required
                        >
                        </Input>
                    </FormControl>

                    <FormControl className={classes.item} fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                            id="password"
                            name={"password"}
                            type={values.showPassword ? "text" : "password"}
                            value={values.password}
                            onChange={handleChange("password")}
                            required
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                    >
                                        {values.showPassword ? <Visibility/> : <VisibilityOff/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>

                    <Button
                        className={classes.item}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        LOGIN
                    </Button>

                    <Grid container className={classes.item}>
                        <Grid item>
                            {"Not a member yet? "}
                            <Link href="/register" variant="body2">
                                {"Register"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
};

export default LoginForm;