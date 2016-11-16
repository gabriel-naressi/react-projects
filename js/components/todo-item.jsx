/**
 * Created by gabriel on 07/07/16.
 */
import React from 'react';
import TodoActions from '../actions/TodoActions';

class TodoItem extends React.Component {
    constructor() {
        super();
    }

    deleteTodo(id) {
        TodoActions.deleteTodo(id);
    }

    render() {
        return (
            <li>
                ID: {this.props.id}
                {this.props.value}
                <button onClick={() => this.deleteTodo(this.props.id)}> X </button>
            </li>
        );
    }
}

export default TodoItem;