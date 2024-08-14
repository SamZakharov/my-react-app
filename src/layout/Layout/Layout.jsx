// import Header from "../../components/Header";
// import Footer from "../../components/Footer";
// import PropTypes from "prop-types";
//
// function Layout({children}) {
//     return (
//         <>
//             <Header logoText="React Shop"/>
//             {children}
//             <Footer/>
//         </>
//     );
// }
//
// Layout.propTypes = {
//     children: PropTypes.node.isRequired,
// };
//
// export default Layout;
// Layout.jsx
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PropTypes from 'prop-types';
import {useTheme} from '@mui/material/styles';
import {Box} from "@mui/material";

function Layout({children}) {
    const theme = useTheme();

    return (
        <Box style={{backgroundColor: theme.palette.background.default}}>
            <Header logoText="React Shop"/>
            {children}
            <Footer/>
        </Box>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
