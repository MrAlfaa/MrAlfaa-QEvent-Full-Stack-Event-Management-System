import {Box, Dialog, DialogContent, DialogTitle, IconButton} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Bar} from "react-chartjs-2";

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

const GeneralChart = (props) => {

    const classes = useStyles();

    const randomColor = () => {
        let r = Math.floor(130 + Math.random() * 126);
        let g = Math.floor(130 + Math.random() * 126);
        let b = Math.floor(130 + Math.random() * 126);
        return "rgb(" + r + "," + g + "," + b + ")";
    };

    const data = {
        labels: props.eventTitles,
        datasets: [
            {
                label: "# of Attendees",
                backgroundColor: Array.from(props.eventTitles, () => randomColor()),
                data: props.attendeeCounts,
                borderWidth: 1,
            },
        ],
    };

    const options = {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: "right",
            },
            title: {
                display: true,
                text: "Attendee Count Bar Chart",
            },
        },
    };

    return (
        <Dialog fullWidth open={props.isOpen} onClose={props.onClose} className={classes.root}>

            <DialogTitle>General Chart</DialogTitle>

            <IconButton onClick={props.onClose} className={classes.closeButton}>
                <CloseIcon/>
            </IconButton>

            <DialogContent>
                <Box padding={2}>
                    <Bar data={data} options={options}/>
                </Box>
            </DialogContent>


        </Dialog>
    );

}

export default GeneralChart;