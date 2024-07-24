import React from "react";
import DataTable from 'react-data-table-component';
import {Box, Button, Grid} from "@material-ui/core";
import BarChartIcon from "@material-ui/icons/BarChart";

const columns = [
    {selector: "userTc", name: "TC No"},
    {selector: "email", name: "Email"},
    {selector: "name", name: "Name"},
    {selector: "surname", name: "Surname"},
    {selector: "attendanceDate", name: "Attendance Date"},
]

const AttendeeList = (props) => {

    const fields = props.fields;

    return (
        <div>
            <DataTable
                title={(fields == null) ? "Attendees |" :
                    <Grid
                        container
                        spacing={1}
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                    >
                        <Grid item>Attendees |</Grid>
                        <Grid item>
                            <Button
                                color="secondary"
                                startIcon={<BarChartIcon/>}
                                onClick={props.onChartOpen}
                            >
                                <Box
                                    fontWeight={200}
                                >
                                    Specific Chart
                                </Box>
                            </Button>
                        </Grid>
                    </Grid>
                }
                columns={columns}
                data={fields == null ? [] : fields.attendees}
                highlightOnHover
                pagination={true}
                paginationRowsPerPageOptions={[5, 10, 25, 100]}
                paginationPerPage={5}
            />

        </div>
    );
}

export default AttendeeList;