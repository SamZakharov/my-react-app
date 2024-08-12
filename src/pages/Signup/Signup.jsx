// import {useFormik} from "formik";
// import {signUpValidator as validate} from "../../utils/formValidator.js";
// import {Link, useNavigate} from "react-router-dom";
// import api from "../../services/axiosConfig.js";
// import toast from "react-hot-toast";
// import {Box, Button, Container, Grid, TextField, Typography} from "@mui/material";
// import {useSignupStyles} from "./SignupStyles";
//
// function Signup() {
//     const navigate = useNavigate();
//     const classes = useSignupStyles();
//
//     const formik = useFormik({
//         initialValues: {
//             firstName: "",
//             lastName: "",
//             email: "",
//             password: "",
//         },
//         validate,
//         onSubmit: (values) => {
//             const {firstName, lastName, email, password} = values;
//             const jsonUser = JSON.stringify({firstName, lastName, email, password});
//
//             api
//                 .post("/auth/signup", jsonUser, {
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                 })
//                 .then((res) => {
//                     if (res.status === 201) {
//                         toast.success("Your account has been created!", {duration: 4000});
//                         setTimeout(() => {
//                             navigate("/auth/login");
//                         }, 1000);
//                     }
//                 })
//                 .catch((error) => {
//                     if (error.code === "ERR_BAD_REQUEST")
//                         toast.error("User already exists.", {duration: 4000});
//                     else console.log(error);
//                 });
//         },
//     });
//
//     return (
//         <Container className={classes.container}>
//             <Box className={classes.formContainer}>
//                 <Typography variant="h4" align="center" className={classes.title}>
//                     Sign Up
//                 </Typography>
//                 <form onSubmit={formik.handleSubmit} className={classes.form}>
//                     <Grid container spacing={2}>
//                         <Grid item xs={12} md={6}>
//                             <TextField
//                                 fullWidth
//                                 id="firstName"
//                                 name="firstName"
//                                 label="First Name"
//                                 variant="outlined"
//                                 value={formik.values.firstName}
//                                 onChange={formik.handleChange}
//                                 onBlur={formik.handleBlur}
//                                 error={formik.touched.firstName && Boolean(formik.errors.firstName)}
//                                 helperText={formik.touched.firstName && formik.errors.firstName}
//                             />
//                         </Grid>
//                         <Grid item xs={12} md={6}>
//                             <TextField
//                                 fullWidth
//                                 id="lastName"
//                                 name="lastName"
//                                 label="Last Name"
//                                 variant="outlined"
//                                 value={formik.values.lastName}
//                                 onChange={formik.handleChange}
//                                 onBlur={formik.handleBlur}
//                                 error={formik.touched.lastName && Boolean(formik.errors.lastName)}
//                                 helperText={formik.touched.lastName && formik.errors.lastName}
//                             />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <TextField
//                                 fullWidth
//                                 id="email"
//                                 name="email"
//                                 label="Email Address"
//                                 variant="outlined"
//                                 type="email"
//                                 value={formik.values.email}
//                                 onChange={formik.handleChange}
//                                 onBlur={formik.handleBlur}
//                                 error={formik.touched.email && Boolean(formik.errors.email)}
//                                 helperText={formik.touched.email && formik.errors.email}
//                             />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <TextField
//                                 fullWidth
//                                 id="password"
//                                 name="password"
//                                 label="Password"
//                                 variant="outlined"
//                                 type="password"
//                                 value={formik.values.password}
//                                 onChange={formik.handleChange}
//                                 onBlur={formik.handleBlur}
//                                 error={formik.touched.password && Boolean(formik.errors.password)}
//                                 helperText={formik.touched.password && formik.errors.password}
//                             />
//                         </Grid>
//                         <Grid item xs={12} className={classes.buttonContainer}>
//                             <Button variant="contained" color="primary" type="submit">
//                                 Sign Up
//                             </Button>
//                             <Link to={"/auth/login"} className={classes.link}>
//                                 Login
//                             </Link>
//                         </Grid>
//                     </Grid>
//                 </form>
//             </Box>
//         </Container>
//     );
// }
//
// export default Signup;

import React from "react";
import {useFormik} from "formik";
import {signUpValidator as validate} from "../../utils/formValidator.js";
import {Link, useNavigate} from "react-router-dom";
import api from "../../services/axiosConfig.js";
import toast from "react-hot-toast";
import {Box, Button, Container, Grid, TextField, Typography} from "@mui/material";
import styles from "./Signup.module.css"; // Импортируем CSS модуль

function Signup() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        },
        validate,
        onSubmit: (values) => {
            const {firstName, lastName, email, password} = values;
            const jsonUser = JSON.stringify({firstName, lastName, email, password});

            api
                .post("/auth/signup", jsonUser, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((res) => {
                    if (res.status === 201) {
                        toast.success("Your account has been created!", {duration: 4000});
                        setTimeout(() => {
                            navigate("/auth/login");
                        }, 1000);
                    }
                })
                .catch((error) => {
                    if (error.code === "ERR_BAD_REQUEST")
                        toast.error("User already exists.", {duration: 4000});
                    else console.log(error);
                });
        },
    });

    return (
        <Container className={styles.container}>
            <Box className={styles.formContainer}>
                <Typography variant="h4" align="center" className={styles.title}>
                    Sign Up
                </Typography>
                <form onSubmit={formik.handleSubmit} className={styles.form}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                id="firstName"
                                name="firstName"
                                label="First Name"
                                variant="outlined"
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                helperText={formik.touched.firstName && formik.errors.firstName}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                id="lastName"
                                name="lastName"
                                label="Last Name"
                                variant="outlined"
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                helperText={formik.touched.lastName && formik.errors.lastName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="email"
                                name="email"
                                label="Email Address"
                                variant="outlined"
                                type="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="password"
                                name="password"
                                label="Password"
                                variant="outlined"
                                type="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                            />
                        </Grid>
                        <Grid item xs={12} className={styles.buttonContainer}>
                            <Button variant="contained" color="primary" type="submit">
                                Sign Up
                            </Button>
                            <Link to={"/auth/login"} className={styles.link}>
                                Login
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
}

export default Signup;
