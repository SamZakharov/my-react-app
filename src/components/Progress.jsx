import React from "react";
import PropTypes from "prop-types";

class Progress extends React.Component{

    render() {
        const { percentage } = this.props
        const divStyle = {
            width: `${percentage}%`
        }
        return (
            <div className="progress">
                <div className="progress-bar"
                     role="progressbar"
                     aria-valuenow={percentage}
                     aria-valuemin="0"
                     aria-valuemax="100"
                     aria-label="progressbar"
                     style={divStyle}>
                </div>
            </div>

        )
    }
}

Progress.propTypes = {
    percentage: PropTypes.number.isRequired,
};

Progress.defaultProps = {
    persentage: 0
}

export default Progress;