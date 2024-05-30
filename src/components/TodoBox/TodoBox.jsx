import {useState} from "react";
import Item from "../Item/Item.jsx";
import {Button, Form, InputGroup} from 'react-bootstrap';
import {v4 as uuidv4} from 'uuid';

const TodoBox = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const isInputValid = /^(?=\S{5,}).*/;

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (isInputValid.test(newTask)) {
            const newTaskItem = {id: uuidv4(), text: newTask};
            setTasks([newTaskItem, ...tasks]);
            setNewTask('');
        }
    }

    const handleDelete = (id) => {
        const newTaskList = tasks.filter((task) => task.id !== id);
        setTasks(newTaskList);
    }

    return (
        <div>
            <InputGroup className="mb-3">
                <Form className="d-flex" onSubmit={handleSubmit}>
                    <Form.Group className="me-3">
                        <Form.Control
                            type="text"
                            value={newTask}
                            className="form-control"
                            placeholder="I am going..."
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Button type="submit" className="btn btn-primary" disabled={!isInputValid.test(newTask)}>
                        Add
                    </Button>
                </Form>
            </InputGroup>
            <div>
                {tasks.map((task) => (
                    <Item
                        key={task.id}
                        task={task.text}
                        onRemove={() => handleDelete(task.id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default TodoBox;
