import {useState} from "react";
import Item from "../Item/Item.jsx";
import {Button, Form, InputGroup} from 'react-bootstrap';


const TodoBox = (props) => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setTasks([newTask, ...tasks]);
        setNewTask('');
    }

    const handleDelete = (index) => () => {
        const newTaskList = tasks.filter((task) => task.id !== index);
        setTasks(newTaskList);

    }

    return (
        <div>
            <InputGroup className={'mb-3'}>
                <Form className={'d-flex'} onSubmit={handleSubmit}>
                    <Form.Group className={'me-3'}>
                        <Form.Control
                            type={'text'}
                            value={newTask}
                            className={'form-control'}
                            placeholder={'I am going...'}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Button
                        type={'submit'}
                        className={'btn btn-primary'}
                    >add</Button>
                </Form>
            </InputGroup>
            <div>
                {tasks.map((task, i) => {
                    return (
                        <Item
                            key={i}
                            id={i}
                            task={task}
                            onRemove={handleDelete(i)}
                        />
                    )
                })}

                ))
            </div>
        </div>
    );
}

export default TodoBox;