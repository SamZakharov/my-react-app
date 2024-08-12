// import React from "react";
// import {useFormik} from "formik";
// import {loginValidator as validate} from "../../utils/formValidator.js";
// import {Link, useNavigate} from "react-router-dom";
// import api from "../../services/axiosConfig.js";
// import toast from "react-hot-toast";
// import {Box, Button, Container, TextField, Typography} from "@mui/material";
// import {useLoginStyles} from "./LoginStyles";
// import {useDispatch} from "react-redux";
// import {setUserInfo} from "../../store/slices/authSlice.js";
//
// function Login() {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const classes = useLoginStyles();
//
//     const formik = useFormik({
//         initialValues: {
//             email: "",
//             password: "",
//         },
//         validate,
//         onSubmit: (values) => {
//             const jsonUser = JSON.stringify(values);
//             api
//                 .post("/auth/login", jsonUser, {
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     withCredentials: true,
//                 })
//                 .then((res) => {
//                     if (res.status === 200) {
//                         toast.success("Login successful!", {duration: 4000});
//                         dispatch(setUserInfo(res.data.userInfo));
//                         setTimeout(() => {
//                             navigate("/", {replace: true});
//                         }, 500);
//                     }
//                 })
//                 .catch((err) => {
//                     if (err.response.status === 404 || err.response.status === 401) {
//                         toast.error(err.response.data, {duration: 4000});
//                     } else {
//                         toast.error("Something went wrong", {duration: 4000});
//                         console.log(err.response.data);
//                     }
//                 });
//         },
//     });
//
//     return (
//         <Container className={classes.container}>
//             <Box className={classes.formContainer}>
//                 <Typography variant="h4" className={classes.header}>
//                     Login
//                 </Typography>
//                 <form onSubmit={formik.handleSubmit}>
//                     <Box className={classes.formSection}>
//                         <TextField
//                             id="email"
//                             name="email"
//                             label="Email Address"
//                             type="email"
//                             variant="outlined"
//                             fullWidth
//                             margin="normal"
//                             onBlur={formik.handleBlur}
//                             onChange={formik.handleChange}
//                             value={formik.values.email}
//                             error={formik.touched.email && Boolean(formik.errors.email)}
//                             helperText={formik.touched.email && formik.errors.email}
//                         />
//                     </Box>
//                     <Box className={classes.formSection}>
//                         <TextField
//                             id="password"
//                             name="password"
//                             label="Password"
//                             type="password"
//                             variant="outlined"
//                             fullWidth
//                             margin="normal"
//                             onBlur={formik.handleBlur}
//                             onChange={formik.handleChange}
//                             value={formik.values.password}
//                             error={formik.touched.password && Boolean(formik.errors.password)}
//                             helperText={formik.touched.password && formik.errors.password}
//                         />
//                     </Box>
//                     <Box className={classes.buttonContainer}>
//                         <Button type="submit" variant="contained" color="primary" className={classes.button}>
//                             Login
//                         </Button>
//                         <Link to={"/auth/signup"} className={classes.link}>
//                             Sign Up
//                         </Link>
//                     </Box>
//                 </form>
//             </Box>
//         </Container>
//     );
// }
//
// export default Login;

import React from "react";
import {useFormik} from "formik";
import {loginValidator as validate} from "../../utils/formValidator.js";
import {Link, useNavigate} from "react-router-dom";
import api from "../../services/axiosConfig.js";
import toast from "react-hot-toast";
import {Box, Button, Container, TextField, Typography} from "@mui/material";
import styles from "./Login.module.css"; // Импортируем CSS модуль
import {useDispatch} from "react-redux";
import {setUserInfo} from "../../store/slices/authSlice.js";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validate,
        onSubmit: (values) => {
            const jsonUser = JSON.stringify(values);
            api
                .post("/auth/login", jsonUser, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                })
                .then((res) => {
                    if (res.status === 200) {
                        toast.success("Login successful!", {duration: 4000});
                        dispatch(setUserInfo(res.data.userInfo));
                        setTimeout(() => {
                            navigate("/", {replace: true});
                        }, 500);
                    }
                })
                .catch((err) => {
                    if (err.response.status === 404 || err.response.status === 401) {
                        toast.error(err.response.data, {duration: 4000});
                    } else {
                        toast.error("Something went wrong", {duration: 4000});
                        console.log(err.response.data);
                    }
                });
        },
    });

    return (
        <Container className={styles.container}>
            <Box className={styles.formContainer}>
                <Typography variant="h4" className={styles.header}>
                    Login
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <Box className={styles.formSection}>
                        <TextField
                            id="email"
                            name="email"
                            label="Email Address"
                            type="email"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                    </Box>
                    <Box className={styles.formSection}>
                        <TextField
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                    </Box>
                    <Box className={styles.buttonContainer}>
                        <Button type="submit" variant="contained" color="primary" className={styles.button}>
                            Login
                        </Button>
                        <Link to={"/auth/signup"} className={styles.link}>
                            Sign Up
                        </Link>
                    </Box>
                </form>
            </Box>
        </Container>
    );
}

export default Login;
