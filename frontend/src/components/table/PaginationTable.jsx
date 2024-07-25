import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TableHeader from "./TableHeader";
import TableContent from "./TableContent";
import TablePageController from "./TablePageController";

export default function PaginationTable(props) {

    const [currentPage, changePage] = useState(0);
    const [rowsPerPage, changeRowsPerPage] = useState(5);

    const handlePageChange = (event, newPage) => {
        changePage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        changeRowsPerPage(event.target.value);
        changePage(0);
    };

    return (
        <Paper>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHeader columns={props.columns}/>
                    <TableContent rows={props.rows}
                                  page={currentPage}
                                  rowsPerPage={rowsPerPage}
                                  columns={props.columns}
                    />
                </Table>
            </TableContainer>
            <TablePageController count={props.rows.length}
                                 rowsPerPage={rowsPerPage}
                                 page={currentPage}
                                 handlePageChange={handlePageChange}
                                 handleChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );


}
