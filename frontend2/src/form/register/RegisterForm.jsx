import React from "react";
import {Grid, TextField} from "@material-ui/core";
import registerValidationsForm from "./RegisterValidation";
import {useFormik} from "formik";
import * as yup from "yup";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {toast} from "react-toastify";
import RegisterApi from "../../api/RegisterApi";
import {useHistory} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(10),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1),
    }
}));


const RegisterForm = (props) => {

    const classes = useStyles();

    let history = useHistory();

    const formik = useFormik({

        initialValues: {
            tcNo: "",
            email: "",
            name: "",
            surname: "",
            birthDate: "",
            username: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: yup.object().shape(registerValidationsForm),
        onSubmit: (values, {setSubmitting}) => {

            setTimeout(() => {

                RegisterApi.register(values)
                    .then((response) => {
                        response.data.forEach(toast.success);

                        history.push('/login');
                    })
                    .catch((error) => {
                        switch (error.response.status) {
                            case 400:
                                error.response.data.forEach(toast.error);
                                break;
                            default:
                                toast.error("Error: " + error.response.status);
                                break;
                        }
                    });
                setSubmitting(false);
            }, 1000);
        }

    })

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>

                <AccountCircleIcon style={{fontSize: 80}}/>
                <Typography component="h1" variant="h6">
                    Register Form
                </Typography>

                <form onSubmit={formik.handleSubmit}>

                    <Grid container>

                        <Grid item xs={12}>
                            <TextField
                                id="tcNo"
                                label="TC No"
                                type={"number"}
                                value={formik.values.tcNo}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                helperText={formik.touched.tcNo ? formik.errors.tcNo : " "}
                                error={formik.touched.tcNo && Boolean(formik.errors.tcNo)}
                                margin="dense"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                id="name"
                                label="Name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                helperText={formik.touched.name ? formik.errors.name : " "}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                margin="dense"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                id="surname"
                                label="Surname"
                                value={formik.values.surname}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                helperText={formik.touched.surname ? formik.errors.surname : " "}
                                error={formik.touched.surname && Boolean(formik.errors.surname)}
                                margin="dense"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                id="birthDate"
                                label="Birth Date"
                                type={"date"}
                                value={formik.values.birthDate}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                helperText={formik.touched.birthDate ? formik.errors.birthDate : " "}
                                error={formik.touched.birthDate && Boolean(formik.errors.birthDate)}
                                margin="dense"
                                variant="outlined"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                id="email"
                                label="Email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                helperText={formik.touched.email ? formik.errors.email : " "}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                margin="dense"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                id="username"
                                label="Username"
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                helperText={formik.touched.username ? formik.errors.username : " "}
                                error={formik.touched.username && Boolean(formik.errors.username)}
                                margin="dense"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                id="password"
                                label="Password"
                                type="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                helperText={formik.touched.password ? formik.errors.password : " "}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                margin="dense"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                id="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                value={formik.values.confirmPassword}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                helperText={formik.touched.confirmPassword ? formik.errors.confirmPassword : " "}
                                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                margin="dense"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                    </Grid>

                    <Button
                        type="submit"
                        color="primary"
                        disabled={formik.isSubmitting}
                    >
                        SUBMIT
                    </Button>

                    <Button
                        color="secondary"
                        onClick={formik.handleReset}
                    >
                        CLEAR
                    </Button>

                </form>
            </div>
        </Container>
    );
};

export default RegisterForm;
