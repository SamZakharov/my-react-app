import {useFormik} from 'formik';
import {loginValidator as validate} from '../../utils/formValidator.js';
import {Link, useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';
import {Box, Button, Container, TextField, Typography} from '@mui/material';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import {setUserInfo} from '../../redux/slices/authSlice.js';
import {useLoginMutation} from '../../redux/productsApi/productsApi.js';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [login, {isLoading}] = useLoginMutation();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate,
        onSubmit: async (values) => {
            try {
                const response = await login(values).unwrap();
                toast.success('Login successful!', {duration: 4000});
                dispatch(setUserInfo(response.userInfo));
                setTimeout(() => {
                    navigate('/', {replace: true});
                }, 500);
            } catch (error) {
                toast.error('Ошибка входа: ' + error.message, {duration: 4000});
            }
        },
    });

    return (
        <Container sx={styles.container}>
            <Box sx={styles.formContainer}>
                <Typography variant="h4" sx={styles.header}>
                    Login
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <Box sx={styles.formSection}>
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
                    <Box sx={styles.formSection}>
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
                    <Box sx={styles.buttonContainer}>
                        <Button type="submit" variant="contained" color="primary" sx={styles.button}
                                disabled={isLoading}>
                            Login
                        </Button>
                        <Link to="/auth/signup" style={styles.link}>
                            Sign Up
                        </Link>
                    </Box>
                </form>
            </Box>
        </Container>
    );
};


export default Login;
