import React from 'react';
import PropTypes from 'prop-types';

class ToDoItem extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-auto">
                        <button type="button" className="btn btn-primary btn-sm" onClick={this.props.onRemove}>-
                        </button>
                    </div>
                    <div className="col">{this.props.task}</div>
                </div>
                <hr/>
            </div>
        );
    }
}

ToDoItem.propTypes = {
    task: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired
};

export default ToDoItem;
