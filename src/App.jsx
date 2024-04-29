import React from 'react';
import DefinitionsList from "./components/DefinitionsList.jsx";
class App extends React.Component {
    render() {
        const definitions = [
            { dt: 'one', dd: 'two', id: 1 },
            { dt: 'another term', dd: 'another description', id: 2 },
            { dt: 'another John', dd: 'another Doe', id: 3 },
        ];

        return (
            <div className="App">
                <DefinitionsList data={definitions} />
            </div>
        );
    }
}

export default App;