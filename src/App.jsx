import React from 'react';
import Buttons from './components/Button';
import Log from './components/Log';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            log: [],
        };
    }

    handleAdd = () => {
        const lastLogValue = this.state.log.length > 0 ? this.state.log[0] : 0;
        this.setState({
            log: [lastLogValue + 1, ...this.state.log],
        });
    };

    handleSubtract = () => {
        const lastLogValue = this.state.log.length > 0 ? this.state.log[0] : 0;
        this.setState({
            log: [lastLogValue - 1, ...this.state.log],
        });
    };

    handleDelete = (index) => {
        const newLog = [...this.state.log];
        newLog.splice(index, 1);
        this.setState({
            log: newLog,
        });
    };

    render() {
        return (
            <div>
                <Buttons onAdd={this.handleAdd} onSubtract={this.handleSubtract}/>
                <Log log={this.state.log} onDelete={this.handleDelete}/>
            </div>
        );
    }
}

export default App;
