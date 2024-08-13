import {useFormik} from 'formik';
import {Link, useNavigate} from 'react-router-dom';
import {Box, Button, Container, Grid, TextField, Typography} from '@mui/material';
import {useCreateUserMutation} from '../../redux/productsApi/productsApi.js'; // Импортируем хук из RTK
import {styles} from './styles';
import {signUpValidator as validate} from '../../utils/formValidator.js';
import toast from 'react-hot-toast';

const Signup = () => {
    const navigate = useNavigate();
    const [createUser] = useCreateUserMutation();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        validate,
        onSubmit: async (values) => {
            try {
                const {firstName, lastName, email, password} = values;
                await createUser({firstName, lastName, email, password}).unwrap();
                toast.success('Your account has been created!', {duration: 4000});
                setTimeout(() => {
                    navigate('/auth/login');
                }, 1000);
            } catch (error) {
                if (error.data?.message === 'User already exists') {
                    toast.error('User already exists.', {duration: 4000});
                } else {
                    console.error(error);
                }
            }
        },
    });

    return (
        <Container sx={styles.container}>
            <Box sx={styles.formContainer}>
                <Typography variant="h4" align="center" sx={styles.title}>
                    Sign Up
                </Typography>
                <form onSubmit={formik.handleSubmit} sx={styles.form}>
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
                        <Grid item xs={12} sx={styles.buttonContainer}>
                            <Button variant="contained" color="primary" type="submit">
                                Sign Up
                            </Button>
                            <Link to="/auth/login" style={styles.link}>
                                Login
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
};
export default Signup;
