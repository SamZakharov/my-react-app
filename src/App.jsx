import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/*" element={<TodoList/>}/>
            </Routes>
        </Router>
    );
}

export default App;
