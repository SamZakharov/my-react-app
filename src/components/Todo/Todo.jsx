import {useState} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Button, Col, ListGroup, Row} from 'react-bootstrap';
import TodoForm from '../TodoForm';
import {RiCloseCircleLine} from 'react-icons/ri';
import {TiEdit} from 'react-icons/ti';
import {IoCheckmarkDoneOutline, IoCheckmarkOutline} from "react-icons/io5";

const Todo = ({todos, completeTodo, removeTodo, updateTodo}) => {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
        note: ''
    });

    const submitUpdate = (value) => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: '',
            note: ''
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate}/>;
    }

    return (
        <ListGroup>
            {todos.map((todo, index) => (
                <ListGroup.Item
                    key={index}
                    className={`todo-row ${todo.isComplete ? 'complete' : ''} mb-3`}
                    style={{
                        backgroundColor: todo.isComplete ? '#d4edda' : '#f8d7da'
                    }}
                >
                    <Row>
                        <Col>
                            <Link to={`/todo-items/${todo.id}`} className="todo-text"
                                  style={{textDecoration: 'none', color: 'inherit'}}>
                                {todo.text}
                            </Link>
                            <p>{todo.note}</p>
                        </Col>
                        <Col className="text-end">
                            <Button
                                variant="link"
                                onClick={() => completeTodo(todo.id)}
                                className="me-2"
                            >
                                {todo.isComplete ? (
                                    <>
                                        <IoCheckmarkDoneOutline/>
                                    </>
                                ) : (
                                    <>
                                        <IoCheckmarkOutline/>
                                    </>
                                )}
                            </Button>
                            <Button
                                variant="link"
                                onClick={() =>
                                    setEdit({id: todo.id, value: todo.text, note: todo.note})
                                }
                                className="me-2"
                            >
                                <TiEdit/>
                            </Button>
                            <Button variant="link" onClick={() => removeTodo(todo.id)}>
                                <RiCloseCircleLine/>
                            </Button>
                        </Col>
                    </Row>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

Todo.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            note: PropTypes.string,
            isComplete: PropTypes.bool
        })
    ).isRequired,
    completeTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired
};

export default Todo;
