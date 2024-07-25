import React, {useEffect, useState} from "react";
import CreateEvent from "./CreateEvent";
import {Fab} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import {makeStyles} from "@material-ui/core/styles";
import EventApi from "../../../api/EventApi";
import {toast} from "react-toastify";
import PaginationTable from "../../../components/table/PaginationTable";
import UpdateEvent from "./UpdateEvent";
import AlertDialog from "../../../components/common/AlertDialog";

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    }
}));

const ManageEvents = () => {

    const classes = useStyles();

    const [index, setIndex] = useState(0);

    const [rows, updateRows] = useState([]);

    const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [isCreateModalOpen, setCreateModelOpen] = useState(false);

    const fetchEvents = () => {
        EventApi.getAllEvents()
            .then(data => updateRows(data))
            .catch((error) => {
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
    }

    useEffect(() => {
        fetchEvents();
    }, [rows])

    const toggleUpdateModal = () => {
        setUpdateModalOpen(!isUpdateModalOpen);
    }

    const toggleDeleteModal = () => {
        setDeleteModalOpen(!isDeleteModalOpen);
    }

    const deleteModalOnCloseHandler = (result) => {
        if (result) {
            deleteEvent(rows[index].id);
        }
        toggleDeleteModal();
    }

    const onEventUpdate = (id) => {
        setIndex(rows.findIndex((row) => row.id === id));
        toggleUpdateModal();
        fetchEvents();
    }

    const onEventDelete = (id) => {
        setIndex(rows.findIndex((row) => row.id === id));
        toggleDeleteModal();
        fetchEvents();
    }

    const deleteEvent = (id) => {
        EventApi.delete(id)
            .then((response) => {
                response.data.forEach(toast.success);
            }).catch((error) => {
            switch (error.response.status) {
                case 400:
                    error.response.data.forEach(toast.error);
                    break;
                default:
                    toast.error("Error: " + error.response.status);
                    break;
            }
        });
        fetchEvents();
    }

    const tableColumns = [
        {id: "id", label: "Id", align: "left"},
        {id: "title", label: "Title", align: "left"},
        {id: "description", label: "Description", align: "right"},
        {id: "startDate", label: "Start Date", align: "right"},
        {id: "endDate", label: "End Date", align: "right"},
        {id: "quota", label: "Quota", align: "right"},
        {id: "address", label: "Address", align: "right"},
        {id: "longitude", label: "Longitude", align: "center"},
        {id: "latitude", label: "Latitude", align: "center"},
        {id: "update", label: "Update", align: "center", onClick: onEventUpdate},
        {id: "delete", label: "Delete", align: "center", onClick: onEventDelete}
    ]

    return (
        <div style={{height: 400, width: "100%"}}>

            <CreateEvent isOpen={isCreateModalOpen} onClose={() => setCreateModelOpen(false)}/>

            <UpdateEvent isOpen={isUpdateModalOpen} onClose={() => setUpdateModalOpen(false)} fields={rows[index]}/>

            <AlertDialog
                title={"Event Deletion"}
                message={"Are you sure you want to delete this event?"}

                isOpen={isDeleteModalOpen}
                onClose={deleteModalOnCloseHandler}
            />

            <PaginationTable rows={rows} columns={tableColumns}/>

            <Fab color="primary" onClick={() => setCreateModelOpen(true)} className={classes.fab}>
                <AddIcon/>
            </Fab>

        </div>
    );
}

export default ManageEvents;