/**
 * Created by gabriel on 07/07/16.
 */
import React from 'react';
import TodoActions from '../actions/TodoActions';
import TodoStore from '../store/todo.store';

class TodoCreate extends React.Component {
    constructor() {
        super();
    }

    save(e) {
        TodoActions.saveTodo(this.refs.task.value);
    }

    render() {
        return (
            <div>
                <input type="text"
                       placeholder="Digite uma tarefa"
                       ref="task"
                />
                <button onClick={(e) => this.save(e)}> Salvar </button>
            </div>
        )
    }
}

export default TodoCreate;