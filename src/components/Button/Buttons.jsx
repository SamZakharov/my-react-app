import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

class Buttons extends React.Component {
    render() {
        return (
            <div className="btn-group font-monospace" role="group">
                <Button variant="outline-success" onClick={this.props.onAdd}>+</Button>
                <Button variant="outline-danger" onClick={this.props.onSubtract}>-</Button>
            </div>
        );
    }
}

Buttons.propTypes = {
    onAdd: PropTypes.func.isRequired,
    onSubtract: PropTypes.func.isRequired,
};

export default Buttons;
