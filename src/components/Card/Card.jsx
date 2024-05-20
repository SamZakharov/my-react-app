import {Component} from "react";
import CardText from "./CardText.jsx";
import CardBody from "./CardBody.jsx";
import CardTitle from "./CardTitle.jsx";

class Card extends Component {
    static CardTitle = CardTitle;
    static CardBody = CardBody;
    static CardText = CardText;

    constructor(props) {
        super(props);
    }

    render() {
        const {children} = this.props;
        return (
            <div className="card">
                {children}
            </div>
        )
    }
}

export default Card;