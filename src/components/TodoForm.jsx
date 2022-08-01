import React from 'react';
import TodoList from './TodoList';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoForm = () => {
    const [value, setValue] = useState('');
    const [list, setList] = useState([{
        id: 1,
        title: "Go to shop",
        isFinished: true
    },
    {
        id: 2,
        title: "Go to home",
        isFinished: true
    }]);

    function addItemHandler(event) {
        event.preventDefault();

        setList(list.concat({
            id: uuidv4(),
            title: value,
            isFinished: false
        }));

        setValue('')
    }

    return (
        <div>
            <form>
                <input type="text" value={value} onChange={e => setValue(e.target.value)} className="input-add" />
                <button onClick={addItemHandler}>Add</button>
                <TodoList list={list} />
            </form>
        </div>
    );
};

export default TodoForm;