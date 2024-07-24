import * as yup from "yup";

const validationsForm = {
    title: yup
        .string()
        .required("Title is Required"),

    startDate: yup
        .date("Start date must be a valid Date")
        .required("Start Date is required"),

    endDate: yup
        .date("Start date must be a valid Date")
        .required("End Date is required"),

    quota: yup
        .number("Quota must be number")
        .required("Quota is required"),

    address: yup
        .string()
        .required("Address is required"),

    longitude: yup
        .string()
        .required("Longitude is required"),

    latitude: yup
        .string()
        .required("Latitude is required")
};

export default validationsForm;
