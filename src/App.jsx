import {useSelector} from 'react-redux';
import {ThemeProvider} from '@mui/material/styles';
import {Navigate, Route, Routes} from 'react-router-dom';
import {darkTheme, lightTheme} from './components/theme/theme.js'; // Убедитесь, что путь правильный
import Layout from './layout/Layout';
import Products from './components/Products';
import NotFound from './pages/NotFound';
import CheckoutPage from './pages/CheckoutPage';
import DetailPage from './pages/DetailPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Protected from './components/Protected';
import Dashboard from './pages/Dashbord';
import MyAccount from './components/dashboard/MyAccount';
import MyOrders from './components/dashboard/MyOrders';
import AuthProtected from './components/AuthProtected';
import {Toaster} from 'react-hot-toast';
import {CssBaseline} from "@mui/material";

function App() {
    const themeMode = useSelector((state) => state.theme.mode);

    // Определяем текущую тему
    const theme = themeMode === 'dark' ? darkTheme : lightTheme;

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Layout>
                <Routes>
                    <Route index path="/home" element={<Navigate to="/" replace/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/products/:id" element={<DetailPage/>}/>
                    <Route path="/*" element={<NotFound/>}/>
                    <Route element={<AuthProtected/>}>
                        <Route path="/auth/signup" element={<Signup/>}/>
                        <Route path="/signup" element={<Navigate to="/auth/signup"/>}/>
                        <Route path="/auth/login" element={<Login/>}/>
                        <Route path="/login" element={<Navigate to="/auth/login"/>}/>
                    </Route>
                    <Route element={<Protected/>}>
                        <Route path="/checkout" element={<CheckoutPage/>}/>
                        <Route path="/dashboard" element={<Dashboard/>}>
                            <Route path="my-account" element={<MyAccount/>}/>
                            <Route path="my-orders" element={<MyOrders/>}/>
                        </Route>
                    </Route>
                </Routes>
            </Layout>
            <Toaster
                toastOptions={{
                    style: {color: "#ffffff", backgroundColor: "#262626"},
                    position: "bottom-left",
                }}
            />
        </ThemeProvider>
    );
}

export default App;
