import React from 'react';
import TodoItem from './todo-item.jsx';
import TodoStore from '../store/todo.store';

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: TodoStore.getTodos()
        };
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        TodoStore.addChangeListener(this._onChange);    
    }

    componentWillUnmount() {
        TodoStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState({ todos: TodoStore.getTodos() });
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