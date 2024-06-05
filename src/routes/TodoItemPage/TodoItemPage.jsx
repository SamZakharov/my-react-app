import {useNavigate, useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Button, Card, Container} from 'react-bootstrap';

const TodoItemPage = ({todos, completeTodo}) => {
    const {id} = useParams();
    const navigate = useNavigate();
    const todo = todos.find((item) => item.id === parseInt(id, 10));

    if (!todo) {
        return <Container>Todo item not found</Container>;
    }

    return (
        <Container className="mt-5">
            <Button variant="primary" onClick={() => navigate('/')}>Back</Button>
            <Card className="mt-3" style={{backgroundColor: todo.isComplete ? '#d4edda' : '#f8d7da'}}>
                <Card.Body>
                    <Card.Title>{todo.text}</Card.Title>
                    <Card.Text>Completed: {todo.isComplete ? 'Yes' : 'No'}</Card.Text>
                    <Card.Text>Note: {todo.note}</Card.Text>
                    <Button variant="link" onClick={() => completeTodo(todo.id)}
                            style={{textDecoration: 'none', color: 'inherit'}}>
                        {todo.isComplete ? 'Mark as Incomplete' : 'Mark as Complete'}
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

TodoItemPage.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            note: PropTypes.string,
            isComplete: PropTypes.bool
        })
    ).isRequired,
    completeTodo: PropTypes.func.isRequired
};

export default TodoItemPage;
