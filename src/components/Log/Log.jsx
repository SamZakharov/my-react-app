import React from 'react';
import PropTypes from 'prop-types';

class Log extends React.Component {
    render() {
        return (
            <div className="list-group mt-3">
                {this.props.log.map((value, index) => (
                    <button key={index} type="button" className="list-group-item list-group-item-action"
                            onClick={() => this.props.onDelete(index)}>
                        {value}
                    </button>
                ))}
            </div>
        );
    }
}

Log.propTypes = {
    log: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default Log;
