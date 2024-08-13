import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PropTypes from "prop-types";

function Layout({children}) {
    return (
        <>
            <Header logoText="React Shop"/>
            {children}
            <Footer/>
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
