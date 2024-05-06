import React from 'react';
import Collapse from './components/Collapse.jsx';

class App extends React.Component {
    render() {
        return (
            <div className="d-flex justify-content-evenly">
                <Collapse id="multiCollapseExample1" text="Hiden text." opened={false} />
                <Collapse id="multiCollapseExample2" text="Another hiden text." opened={false} />
                <Collapse id="multiCollapseExample3" text="Maybe I do something wrong" opened={false} />
            </div>
        );
    }
}

export default App;
