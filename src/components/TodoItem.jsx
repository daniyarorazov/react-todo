import React, { useState } from 'react';

const TodoItem = ({ title, status, item, list }) => {
    const [stat, setStat] = useState(status);


    return (
        <li>
            <input type="checkbox" onChange={(e) => {
                setStat(e.target.checked)
                for (let i of list) {
                    if (i.id === item.id) {
                        item.isFinished = !item.isFinished
                    }
                }
            }} checked={stat} />
            <span style={stat ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>{title}</span>
        </li>
    );
};

export default TodoItem;