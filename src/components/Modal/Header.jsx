import PropTypes from 'prop-types';

const Header = ({children, toggle}) => (
    <div className="modal-header">
        <h5 className="modal-title">{children}</h5>
        <button type="button" className="btn-close" aria-label="Close" onClick={toggle}></button>
    </div>
);

Header.propTypes = {
    children: PropTypes.node.isRequired,
    toggle: PropTypes.func.isRequired,
};

export default Header;
