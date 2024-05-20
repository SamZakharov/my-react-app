import React from 'react';
import {v4 as uniqueId} from 'uuid';
import ToDoItem from "../ToDoItem";
import './styles/style.css';

class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            newTask: ''
        };
    }

    handleInputChange = (event) => {
        this.setState({newTask: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const newTask = {
            id: uniqueId(),
            task: this.state.newTask
        };
        this.setState((prevState) => ({
            tasks: [newTask, ...prevState.tasks],
            newTask: ''
        }));
    };

    handleRemove = (id) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter(task => task.id !== id)
        }));
    };

    render() {
        return (
            <div>
                <div className="custom-styles-container">
                    <form className="d-flex" onSubmit={this.handleSubmit}>
                        <div className="me-3">
                            <input
                                type="text"
                                value={this.state.newTask}
                                required
                                className="form-control"
                                placeholder="I am going..."
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">add</button>
                    </form>
                </div>
                <div>
                    {this.state.tasks.map(task => (
                        <ToDoItem key={task.id} task={task.task} onRemove={() => this.handleRemove(task.id)}/>
                    ))}
                </div>
            </div>
        );
    }
}

export default TodoBox;
