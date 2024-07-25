import React, {useState} from "react";
import DataTable from 'react-data-table-component';
import {Box, Button, Divider, Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import BarChartIcon from '@material-ui/icons/BarChart';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: 20
    },
    expandable1: {
        backgroundColor: "whitesmoke"
    },
    expandable2: {
        backgroundColor: "white"
    }
}));

const columns = [
    {selector: "id", name: "Id"},
    {selector: "title", name: "Title"},
    {selector: "startDate", name: "Start Date"},
    {selector: "endDate", name: "End Date"},
]

const EventList = (props) => {

    const classes = useStyles();

    const [currentEventId, setCurrentEventId] = useState();

    const rowExpandHandler = (toggleState, row) => {
        if (toggleState) {
            setCurrentEventId(row.id);
            props.onSelectionChangedHandler(row);
        }
    }

    const ExpandableComponent = ({data}) => (
        <Grid
            className={classes.container}
            spacing={5}
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
        >

            <Grid item xs={5} className={classes.expandable1}>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                >
                    <Grid item>
                        {"Description"}
                    </Grid>
                    <Grid item>
                        <Box fontWeight={200}>
                            {data.description}
                        </Box>
                    </Grid>
                </Grid>
            </Grid>

            <Divider flexItem/>

            <Grid item xs={2} className={classes.expandable2}>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                >
                    <Grid item>
                        <Box fontWeight={400}>
                            {"Quota"}
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box fontWeight={200}>
                            {data.quota}
                        </Box>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={5} className={classes.expandable1}>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                >
                    <Grid item>
                        <Box fontWeight={400}>
                            {"Address"}
                        </Box>
                    </Grid>

                    <Grid item>
                        <Grid
                            container
                            spacing={1}
                            direction="row"
                            justifyContent="flex-start"
                        >
                            <Grid item>
                                <Box fontWeight={200}>
                                    {data.address}
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box fontWeight={200}>
                                    {`Lon:${data.longitude}`}
                                </Box>
                            </Grid>
                            <Grid item>
                                <Box fontWeight={200}>
                                    {`Lat:${data.latitude}`}
                                </Box>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    );

    return (
        <div>
            <DataTable
                title={(
                    <Grid
                        container
                        spacing={1}
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                    >
                        <Grid item>Events |</Grid>
                        <Grid item>
                            <Button
                                color="primary"
                                startIcon={<BarChartIcon/>}
                                onClick={props.onChartOpen}
                            >
                                <Box
                                    fontWeight={200}
                                >
                                    General Chart
                                </Box>
                            </Button>
                        </Grid>
                    </Grid>
                )}
                columns={columns}
                data={props.fields}
                highlightOnHover
                pointerOnHover
                expandableRows
                expandableRowsComponent={<ExpandableComponent/>}
                expandOnRowClicked
                onRowExpandToggled={rowExpandHandler}
                expandableRowExpanded={row => row.id === currentEventId}
                expandableRowsHideExpander
                pagination={true}
                paginationRowsPerPageOptions={[5, 10, 25, 100]}
                paginationPerPage={5}
            />

        </div>
    );
}

export default EventList;