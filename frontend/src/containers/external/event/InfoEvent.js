import React from "react";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    IconButton,
    TextField,
    Typography
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[900],
    },
}));

const InfoEvent = (props) => {

    const classes = useStyles();

    const fields = props.fields

    return (
        <Dialog open={props.isOpen} onClose={props.onClose} className={classes.root} fullWidth>

            <DialogTitle>{fields.title}</DialogTitle>

            <IconButton onClick={props.onClose} className={classes.closeButton}>
                <CloseIcon/>
            </IconButton>

            <DialogContent>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            id="startDate"
                            label="Start Date"
                            type={"datetime-local"}
                            value={fields.startDate}
                            margin="dense"
                            fullWidth
                            onClick={(e) => {
                                e.preventDefault()
                            }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            id="endDate"
                            label="End Date"
                            type={"datetime-local"}
                            value={fields.endDate}
                            margin="dense"
                            fullWidth
                            onClick={(e) => {
                                e.preventDefault()
                            }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            id="description"
                            label="Description"
                            value={fields.description}
                            multiline
                            minRows={5}
                            maxRows={6}
                            variant={"outlined"}
                            fullWidth
                            onClick={(e) => {
                                e.preventDefault()
                            }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <DialogContentText>
                            <Typography display={"inline"} variant="subtitle1" color={"textPrimary"} component="p">
                                {"Quota: "}
                            </Typography>
                            <Typography display={"inline"} variant="body1" color={"textSecondary"} component="p">
                                {fields.quota}
                            </Typography>
                        </DialogContentText>
                    </Grid>

                    <Grid item xs={12}>
                        <DialogContentText>
                            <Typography display={"inline"} variant="subtitle1" color={"textPrimary"} component="p">
                                {"Address: "}
                            </Typography>
                            <Typography display={"inline"} variant="body1" color={"textSecondary"} component="p">
                                {fields.address}
                            </Typography>
                        </DialogContentText>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <DialogContentText>
                            <Typography display={"inline"} variant="subtitle1" color={"textPrimary"} component="p">
                                {"Latitude: "}
                            </Typography>
                            <Typography display={"inline"} variant="body1" color={"textSecondary"} component="p">
                                {fields.latitude}
                            </Typography>
                        </DialogContentText>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <DialogContentText>
                            <Typography display={"inline"} variant="subtitle1" color={"textPrimary"} component="p">
                                {"Longitude: "}
                            </Typography>
                            <Typography display={"inline"} variant="body1" color={"textSecondary"} component="p">
                                {fields.longitude}
                            </Typography>
                        </DialogContentText>
                    </Grid>

                </Grid>

            </DialogContent>

            <DialogActions>
                <Button color="primary" onClick={(e) => props.onClickHandler(fields.id)}> ATTEND </Button>
            </DialogActions>

        </Dialog>
    );
}

export default InfoEvent;