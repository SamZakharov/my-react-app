import React from "react";
import Definitions from "./Definitions.jsx";

class DefinitionsList extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <div>
                {data.map(item => (
                    <Definitions key={item.id} data={[item]} />
                ))}
            </div>
        );
    }
}

export default DefinitionsList;
