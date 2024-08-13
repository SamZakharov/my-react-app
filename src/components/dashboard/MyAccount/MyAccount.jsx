import PropTypes from "prop-types";
import {useSelector} from "react-redux";
import {Box, Typography} from "@mui/material";
import {styles} from "./styles";


const MyAccount = () => {
    const {firstName = "N/A", lastName = "N/A", email = "N/A"} = useSelector((state) => state.user.currentUser || {});

    return (
        <Box sx={styles.container}>
            <Typography variant="h4" align="center" sx={styles.heading}>
                Account Details
            </Typography>
            <Box sx={styles.formSection}>
                <Typography variant="body1">
                    <strong>First Name:</strong> {firstName}
                </Typography>
            </Box>
            <Box sx={styles.formSection}>
                <Typography variant="body1">
                    <strong>Last Name:</strong> {lastName}
                </Typography>
            </Box>
            <Box sx={styles.formSection}>
                <Typography variant="body1">
                    <strong>Email Address:</strong> {email}
                </Typography>
            </Box>
        </Box>
    );
};

// Определите PropTypes для компонента
MyAccount.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
};

export default MyAccount;
