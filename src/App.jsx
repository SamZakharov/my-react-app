import React from "react";
import ListGroup from "./components/ListGroup.jsx";

class App extends React.Component {
    render() {
        const colors = [
            "primary",
            "secondary",
            "success",
            "danger",
            "warning",
            "info",
            "light",
            "dark"
        ];

        const items = colors.map((color, index) => (
            <p key={index} type={color}>
                {`This is a ${color} list group item`}
            </p>
        ));

        return (
            <div className="App">
                <ListGroup>
                    {items}
                </ListGroup>
            </div>
        );
    }
}

export default App;
