// import {Navigate, Route, Routes} from "react-router-dom";
// import Products from "./pages/Products";
// import NotFound from "./pages/NotFound";
// import CheckoutPage from "./pages/CheckoutPage";
// import DetailPage from "./pages/DetailPage";
// import Layout from "./layout/Layout";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import {Toaster} from "react-hot-toast";
// import Home from "./pages/Home";
// import Protected from "./components/Protected";
// import Dashbord from "./pages/Dashbord";
// import MyAccount from "./components/dashboard/MyAccount";
// import MyOrders from "./components/dashboard/MyOrders";
// import AuthProtected from "./components/AuthProtected";
// import {Provider} from "react-redux";
// import index from "./store/index.js";
// import {ThemeProvider} from '@mui/material/styles';
// import theme from './theme.js'
// import './style.css'
//
// function App() {
//     return (
//         <>
//             <Provider store={index}>
//                 <ThemeProvider theme={theme}>
//                     <Layout>
//                         <Routes>
//                             <Route
//                                 index
//                                 path="/home"
//                                 element={<Navigate to="/" replace/>}
//                             />
//                             <Route path="/" element={<Home/>}/>
//                             <Route path="/products" element={<Products/>}/>
//                             <Route path="/products/:id" element={<DetailPage/>}/>
//                             <Route path="/*" element={<NotFound/>}/>
//                             <Route element={<AuthProtected/>}>
//                                 <Route path="/auth/signup" element={<Signup/>}/>
//                                 <Route path="/signup" element={<Navigate to={'/auth/signup'}/>}/>
//                                 <Route path="/auth/login" element={<Login/>}/>
//                                 <Route path="/login" element={<Navigate to={'/auth/login'}/>}/>
//                             </Route>
//                             <Route element={<Protected/>}>
//                                 <Route path="/checkout" element={<CheckoutPage/>}/>
//                                 <Route path="/dashboard" element={<Dashbord/>}>
//                                     <Route path={'my-account'} element={<MyAccount/>}/>
//                                     <Route path={'my-orders'} element={<MyOrders/>}/>
//                                 </Route>
//                             </Route>
//                         </Routes>
//                     </Layout>
//                 </ThemeProvider>
//             </Provider>
//             <Toaster
//                 toastOptions={{
//                     style: {color: "#ffffff", backgroundColor: "#262626"},
//                     position: "bottom-left"
//                 }}
//             />
//         </>
//     );
// }
//
// export default App;

import {Navigate, Route, Routes} from "react-router-dom";
import PropTypes from "prop-types";
import Products from "./components/Products";
import NotFound from "./pages/NotFound";
import CheckoutPage from "./pages/CheckoutPage";
import DetailPage from "./pages/DetailPage";
import Layout from "./layout/Layout";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import {Toaster} from "react-hot-toast";
import Home from "./pages/Home";
import Protected from "./components/Protected";
import Dashboard from "./pages/Dashbord";
import MyAccount from "./components/dashboard/MyAccount";
import MyOrders from "./components/dashboard/MyOrders";
import AuthProtected from "./components/AuthProtected";
// import About from "./pages/About";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "./styles/theme.js";

const App = ({isAuthenticated}) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Layout>
                <Routes>
                    <Route index path="/home" element={<Navigate to="/" replace/>}/>
                    <Route path="/" element={<Home/>}/>
                    {/*<Route path="/about" element={<About/>}/>*/}
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/products/:id" element={<DetailPage/>}/>
                    <Route path="/*" element={<NotFound/>}/>
                    <Route element={<AuthProtected isAuthenticated={isAuthenticated}/>}>
                        <Route path="/auth/signup" element={<Signup/>}/>
                        <Route path="/signup" element={<Navigate to="/auth/signup"/>}/>
                        <Route path="/auth/login" element={<Login/>}/>
                        <Route path="/login" element={<Navigate to="/auth/login"/>}/>
                    </Route>
                    <Route element={<Protected isAuthenticated={isAuthenticated}/>}>
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
};

App.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
};

export default App;
