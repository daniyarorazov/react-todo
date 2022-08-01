import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ list }) => {
    return (
        <ul>
            {list.map(item => <TodoItem item={item} list={list} status={item.isFinished} title={item.title} />)}
        </ul>
    );
};

export default TodoList;