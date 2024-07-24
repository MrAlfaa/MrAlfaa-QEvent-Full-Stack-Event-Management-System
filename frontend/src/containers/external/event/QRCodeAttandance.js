import React from "react";
import {Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton,} from "@material-ui/core";
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

const QRCodeAttandance = (props) => {

    const classes = useStyles();

    const fields = props.fields

    return (
        <Dialog open={props.isOpen} onClose={props.onClose} className={classes.root} fullWidth>

            <DialogTitle>{`QR Code for ${fields.title}`}</DialogTitle>

            <IconButton onClick={props.onClose} className={classes.closeButton}>
                <CloseIcon/>
            </IconButton>

            <DialogContent>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item>
                        <img src={`data:image/png;base64,${props.qrcode}`} alt={"QR Code"}/>
                    </Grid>

                </Grid>

            </DialogContent>

            <DialogActions>
                <Button disabled color="primary" onClick={(e) => props.onClickHandler(fields.id)}> ACTION </Button>
            </DialogActions>

        </Dialog>
    );
}

export default QRCodeAttandance;