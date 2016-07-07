/**
 * Created by gabriel on 07/07/16.
 */
import React from 'react';

class TodoItem extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <li> {this.props.value} </li>
        )
    }
}

export default TodoItem;