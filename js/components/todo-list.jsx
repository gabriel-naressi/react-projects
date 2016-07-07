import React from 'react';
import TodoItem from './todo-item.jsx';

class HelloWorld extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <ul>
                    <TodoItem />
                </ul>
            </div>
        );

    }
}

HelloWorld.displayName = "HelloWorld";
export default HelloWorld;