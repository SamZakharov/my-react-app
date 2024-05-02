import React from "react";

class ListGroup extends React.Component {
    render() {
        const { children } = this.props;

        return (
            <ul className="list-group">
                {React.Children.map(children, child => {
                    const colorType = child.props.type;
                    return (
                        <li className={`list-group-item list-group-item-${colorType}`}>
                            {child}
                        </li>
                    );
                })}
            </ul>
        );
    }
}

ListGroup.defaultProps = {
    children: null
};

export default ListGroup;