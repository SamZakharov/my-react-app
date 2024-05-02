import React from "react";
import classNames from "classnames";

class BtnGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeBtn: null,
        };
    }

    handleClick = (btn) => {
        this.setState({ activeBtn: btn });
    }

    render() {
        const { activeBtn } = this.state;

        return (
            <div className="btn-group" role="group">
                <button
                    type="button"
                    className={classNames("btn", { "btn-primary": activeBtn === 'left', "btn-secondary": activeBtn !== 'left' })}
                    onClick={() => this.handleClick('left')}
                >
                    Left
                </button>
                <button
                    type="button"
                    className={classNames("btn", { "btn-primary": activeBtn === 'right', "btn-secondary": activeBtn !== 'right' })}
                    onClick={() => this.handleClick('right')}
                >
                    Right
                </button>
            </div>
        );
    }
}

export default BtnGroup;
