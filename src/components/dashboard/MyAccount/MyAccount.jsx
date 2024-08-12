import React from "react";
import PropTypes from 'prop-types';
import {useFormik} from "formik";
import {Box, Button, TextField, Typography} from "@mui/material";
import toast from "react-hot-toast";
import api from "../../../services/axiosConfig.js";
import {updateInfo as validate} from "../../../utils/formValidator.js";
import {styles} from "./styles.js";
import {useAuth} from "../../../context/AuthenticateProvider/AuthenticateProvider.jsx";

const MyAccount = () => {
    const {
        userInfo: {firstName, lastName, email},
    } = useAuth();

    const formik = useFormik({
        initialValues: {
            firstName: firstName,
            lastName: lastName,
            email: email,
        },
        enableReinitialize: true,
        validate,
        onSubmit: (values) => {
            if (
                values.firstName === firstName &&
                values.lastName === lastName &&
                values.email === email
            ) {
                toast.error("No change received", {duration: 3000});
                return;
            }

            const updatedInfo = JSON.stringify(values);
            api
                .post("/user/update", updatedInfo, {
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                })
                .then((res) => {
                    if (res.status === 204)
                        toast.success("Changes applied successfully!", {duration: 3000});
                })
                .catch((err) => {
                    toast.error("Something went wrong", {duration: 4000});
                    console.log(err.response.data);
                });
        },
    });

    return (
        <Box sx={styles.container}>
            <form onSubmit={formik.handleSubmit} style={styles.form}>
                <Typography variant="h4" align="center" sx={styles.heading}>
                    Account Details
                </Typography>
                <Box sx={styles.formSection}>
                    <TextField
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        variant="outlined"
                        fullWidth
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                    />
                </Box>
                <Box sx={styles.formSection}>
                    <TextField
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                    />
                </Box>
                <Box sx={styles.formSection}>
                    <TextField
                        id="email"
                        name="email"
                        label="Email Address"
                        variant="outlined"
                        type="email"
                        fullWidth
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </Box>
                <Box sx={styles.submitSection}>
                    <Button type="submit" variant="contained" color="primary" sx={styles.submitButton}>
                        Submit Details
                    </Button>
                </Box>
            </form>
        </Box>
    );
}

MyAccount.propTypes = {
    userInfo: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    }).isRequired,
};

export default MyAccount;
