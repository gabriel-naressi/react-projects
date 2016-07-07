/**
 * Created by gabriel on 07/07/16.
 */
import React from 'react';
import TodoCreate from './todo-create.jsx';
import TodoList from './todo-list.jsx';

class Todo extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <TodoCreate/>
                <TodoList/>
            </div>
        )
    }
}

export default Todo;