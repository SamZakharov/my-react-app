// import {useDispatch, useSelector} from 'react-redux';
// import {TbLogout2, TbUser} from "react-icons/tb";
// import {CiShoppingTag} from "react-icons/ci";
// import {Link, Outlet} from "react-router-dom";
// import {Box, Divider, List, ListItem, ListItemIcon, ListItemText, Paper, Typography} from "@mui/material";
// import {useDashbordStyles} from "./DashbordStyles";
//
// function Dashbord() {
//     const classes = useDashbordStyles();
//     const dispatch = useDispatch();
//
//     // Вызов useSelector с функцией для извлечения данных
//     const {isAuthenticated, userInfo} = useSelector((state) => state.auth);
//
//     // Обработчик выхода из системы
//     const handleLogout = () => {
//         dispatch({type: 'LOG_OUT'});  // Замените на действие для выхода из системы
//     };
//
//     if (!isAuthenticated) {
//         return <Typography>Please log in</Typography>; // Временное сообщение, если пользователь не аутентифицирован
//     }
//
//     return (
//         <Box className={classes.wrapper}>
//             <Paper className={classes.aside}>
//                 <List component="nav" className={classes.list}>
//                     <Link to={"my-account"} className={classes.link}>
//                         <ListItem button>
//                             <ListItemIcon>
//                                 <TbUser/>
//                             </ListItemIcon>
//                             <ListItemText primary="My Account"/>
//                         </ListItem>
//                     </Link>
//                     <Link to={"my-orders"} className={classes.link}>
//                         <ListItem button>
//                             <ListItemIcon>
//                                 <CiShoppingTag/>
//                             </ListItemIcon>
//                             <ListItemText primary="My Orders"/>
//                         </ListItem>
//                     </Link>
//                     <Divider className={classes.divider}/>
//                     <ListItem button onClick={handleLogout}>
//                         <ListItemIcon>
//                             <TbLogout2/>
//                         </ListItemIcon>
//                         <ListItemText primary="Logout"/>
//                     </ListItem>
//                 </List>
//             </Paper>
//             <Paper className={classes.content}>
//                 <Typography variant="h4" component="div" gutterBottom>
//                     Hello <span className={classes.userName}>{userInfo.firstName} {userInfo.lastName}</span>
//                 </Typography>
//                 <Outlet/>
//             </Paper>
//         </Box>
//     );
// }
//
// export default Dashbord;

import {useDispatch, useSelector} from 'react-redux';
import {TbLogout2, TbUser} from "react-icons/tb";
import {CiShoppingTag} from "react-icons/ci";
import {Link, Outlet} from "react-router-dom";
import {Box, Divider, List, ListItem, ListItemIcon, ListItemText, Paper, Typography} from "@mui/material";
import {styles} from './styles';

const Dashbord = () => {
    const dispatch = useDispatch();

    // Вызов useSelector с функцией для извлечения данных
    const {isAuthenticated, userInfo} = useSelector((state) => state.auth);

    // Обработчик выхода из системы
    const handleLogout = () => {
        dispatch({type: 'LOG_OUT'});  // Замените на действие для выхода из системы
    };

    if (!isAuthenticated) {
        return <Typography>Please log in</Typography>; // Временное сообщение, если пользователь не аутентифицирован
    }

    return (
        <Box className={styles.wrapper}>
            <Paper className={styles.aside}>
                <List component="nav" className={styles.list}>
                    <Link to={"my-account"} className={styles.link}>
                        <ListItem button>
                            <ListItemIcon>
                                <TbUser/>
                            </ListItemIcon>
                            <ListItemText primary="My Account"/>
                        </ListItem>
                    </Link>
                    <Link to={"my-orders"} className={styles.link}>
                        <ListItem button>
                            <ListItemIcon>
                                <CiShoppingTag/>
                            </ListItemIcon>
                            <ListItemText primary="My Orders"/>
                        </ListItem>
                    </Link>
                    <Divider className={styles.divider}/>
                    <ListItem button onClick={handleLogout}>
                        <ListItemIcon>
                            <TbLogout2/>
                        </ListItemIcon>
                        <ListItemText primary="Logout"/>
                    </ListItem>
                </List>
            </Paper>
            <Paper className={styles.content}>
                <Typography variant="h4" component="div" gutterBottom>
                    Hello <span className={styles.userName}>{userInfo.firstName} {userInfo.lastName}</span>
                </Typography>
                <Outlet/>
            </Paper>
        </Box>
    );
}

export default Dashbord;
