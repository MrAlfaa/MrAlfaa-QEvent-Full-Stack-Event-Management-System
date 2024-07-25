import React from "react";
import {Grid, TextField} from "@material-ui/core";
import {useFormik} from "formik";
import eventValidationsForm from "./EventValidation";
import * as yup from "yup";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import {toast} from "react-toastify";
import EventApi from "../../api/EventApi";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1),
    }
}));

const UpdateEventForm = (props) => {

    const {
        id,
        title,
        description,
        startDate,
        endDate,
        quota,
        address,
        longitude,
        latitude
    } = props.fields;

    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            title: title,
            description: description,
            startDate: startDate,
            endDate: endDate,
            quota: quota,
            address: address,
            longitude: longitude,
            latitude: latitude,
        },
        validationSchema: yup.object().shape(eventValidationsForm),
        onSubmit: (values, {setSubmitting}) => {

            setTimeout(() => {

                EventApi.update(id, values)
                    .then(
                        (response) => {
                            response.data.forEach(toast.success);
                        }).catch(
                    (error) => {
                        switch (error.response.status) {
                            case 400:
                                error.response.data.forEach(toast.error);
                                break;
                            default:
                                toast.error("Error: " + error.response.status);
                                break;
                        }
                    }
                );

                setSubmitting(false);
            }, 1000);

        },
    });

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classes.paper}>

                <form onSubmit={formik.handleSubmit}>

                    <Grid container>

                        <Grid item xs={12}>
                            <TextField
                                id="title"
                                label="Title"
                                type={"text"}
                                value={formik.values.title}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                helperText={formik.touched.title ? formik.errors.title : " "}
                                error={formik.touched.title && Boolean(formik.errors.title)}
                                margin="dense"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                id="description"
                                label="Description"
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                helperText={formik.touched.description ? formik.errors.description : " "}
                                error={formik.touched.description && Boolean(formik.errors.description)}
                                margin="dense"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                id="startDate"
                                label="Start Date"
                                type={"datetime-local"}
                                value={formik.values.startDate}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                helperText={formik.touched.startDate ? formik.errors.startDate : " "}
                                error={formik.touched.startDate && Boolean(formik.errors.startDate)}
                                margin="dense"
                                variant="outlined"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                id="endDate"
                                label="End Date"
                                type={"datetime-local"}
                                value={formik.values.endDate}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                helperText={formik.touched.endDate ? formik.errors.endDate : " "}
                                error={formik.touched.endDate && Boolean(formik.errors.endDate)}
                                margin="dense"
                                variant="outlined"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                id="quota"
                                label="Quota"
                                type={"number"}
                                value={formik.values.quota}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                helperText={formik.touched.quota ? formik.errors.quota : " "}
                                error={formik.touched.quota && Boolean(formik.errors.quota)}
                                margin="dense"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                id="address"
                                label="Address"
                                value={formik.values.address}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                helperText={formik.touched.address ? formik.errors.address : " "}
                                error={formik.touched.address && Boolean(formik.errors.address)}
                                margin="dense"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                id="longitude"
                                label="Longitude"
                                value={formik.values.longitude}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                helperText={formik.touched.longitude ? formik.errors.longitude : " "}
                                error={formik.touched.longitude && Boolean(formik.errors.longitude)}
                                margin="dense"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <TextField
                                id="latitude"
                                label="Latitude"
                                value={formik.values.latitude}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                helperText={formik.touched.latitude ? formik.errors.latitude : " "}
                                error={formik.touched.latitude && Boolean(formik.errors.latitude)}
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

}

export default UpdateEventForm;