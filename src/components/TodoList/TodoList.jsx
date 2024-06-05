import {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import TodoForm from '../TodoForm';
import Todo from '../Todo';
import TodoItemPage from '/src/routes/TodoItemPage';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos((prev) => prev.map((item) => (item.id === todoId ? newValue : item)));
    };

    const removeTodo = (id) => {
        const removedArr = [...todos].filter((todo) => todo.id !== id);

        setTodos(removedArr);
    };

    const completeTodo = (id) => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <Container>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <h1 className="text-center my-4">What&apos;s the Plan for Today?</h1>
                            <TodoForm onSubmit={addTodo}/>
                            <Todo
                                todos={todos}
                                completeTodo={completeTodo}
                                removeTodo={removeTodo}
                                updateTodo={updateTodo}
                            />
                        </>
                    }
                />
                <Route
                    path="/todo-items/:id"
                    element={<TodoItemPage todos={todos} completeTodo={completeTodo}/>}
                />
            </Routes>
        </Container>
    );
}

export default TodoList;
