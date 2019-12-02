import React from 'react';

const Todo = props => {

    return (
        <div className={`task${props.task.completed ? ' completed' : ''}`} OnClick={() => props.toggleCompleted(props.item.id)}>
            <p>{props.item.task}</p>
        </div>
    )
}

export default Todo;