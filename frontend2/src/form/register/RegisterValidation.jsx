import * as yup from "yup";

const validationsForm = {
    tcNo: yup
        .number("TC No must be a number")
        .min(10000000000, "TC No length must be 11")
        .max(99999999999, "TC No length must be 11")
        .required("TC No is Required"),

    name: yup.string().required("Name is Required"),

    surname: yup.string().required("Surname is Required"),

    email: yup
        .string()
        .email("Enter a valid email")
        .required("Email is required"),

    username: yup
        .string()
        .required("Username is required"),

    password: yup
        .string()
        .required("Enter your password")
        .min(8, "Password must contain at least 8 characters")
        .max(30, "Maximum password size is 30 characters")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@.,$!%*?&]{8,30}$/,
            "Must Contain at least one uppercase letter, one lowercase letter, one number and one special character"
        ),

    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Password does not match")
        .required("Confirm your password"),
};

export default validationsForm;
