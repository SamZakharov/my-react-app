import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Header from "./Header.jsx";
import Body from "./Body.jsx";
import Footer from "./Footer.jsx";

class Modal extends React.Component {
    static Header = Header;
    static Body = Body;
    static Footer = Footer;

    render() {
        const modalClassName = cn(
            'modal',
            this.props.isOpen ? 'fade show' : ''
        );

        const styleDisplay = {
            display: this.props.isOpen ? 'block' : 'none'
        };

        const {children} = this.props;
        return (
            <div className={modalClassName} style={styleDisplay} role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">{children}</div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired
};

export default Modal;
