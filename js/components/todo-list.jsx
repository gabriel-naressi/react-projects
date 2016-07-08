import React from 'react';
import TodoItem from './todo-item.jsx';
import TodoStore from '../store/todo.store';

class HelloWorld extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: TodoStore.getTodos()
        };
        this.change = this.change.bind(this);
    }

    componentDidMount(){
        TodoStore.addChangeListener(this.change);
    }

    componentWillUnmount(){
        TodoStore.removeChangeListener(this.change);
    }

    change() {
        this.setState({
            todos: TodoStore.getTodos()
        });
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

HelloWorld.displayName = "HelloWorld";
export default HelloWorld;