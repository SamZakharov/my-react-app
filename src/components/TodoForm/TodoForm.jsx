import {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Form} from 'react-bootstrap';

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const [note, setNote] = useState(props.edit ? props.edit.note : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleNoteChange = (e) => {
        setNote(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
            note: note
        });
        setInput('');
        setNote('');
    };

    return (
        <Form onSubmit={handleSubmit} className="mb-3">
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder={props.edit ? 'Update your item' : 'Add a todo'}
                    value={input}
                    onChange={handleInputChange}
                    ref={inputRef}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    as="textarea"
                    placeholder="Add a note"
                    value={note}
                    onChange={handleNoteChange}
                />
            </Form.Group>
            <Button variant={props.edit ? 'success' : 'primary'} type="submit">
                {props.edit ? 'Update' : 'Add Todo'}
            </Button>
        </Form>
    );
}

TodoForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    edit: PropTypes.shape({
        value: PropTypes.string,
        note: PropTypes.string
    })
};

export default TodoForm;
