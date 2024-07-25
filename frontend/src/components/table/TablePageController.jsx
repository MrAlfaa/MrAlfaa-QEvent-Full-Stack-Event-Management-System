import React from 'react';
import TablePagination from "@material-ui/core/TablePagination";

export default function TablePageController(props) {
    return (
        <TablePagination
            rowsPerPageOptions={[5, 10, 25, 100]}
            component="div"
            count={props.count}
            rowsPerPage={props.rowsPerPage}
            page={props.page}
            onPageChange={props.handlePageChange}
            onRowsPerPageChange={props.handleChangeRowsPerPage}
        />
    );
}