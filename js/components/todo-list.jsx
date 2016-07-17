import React from 'react';
import TodoItem from './todo-item.jsx';
import TodoStore from '../store/todo.store';

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: TodoStore.getTodos()
        };
        this.change = this.change.bind(this);
    }

    render() {

        var items = this.state.todos.map((todo, index) => {
            return (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    value={todo.value}
                />
            );
        });

        return (
            <div>
                <ul>
                    {items}
                </ul>
            </div>
        );

    }
}

TodoList.displayName = "TodoList";
export default TodoList;