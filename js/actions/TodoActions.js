/**
 * Created by gabriel on 07/07/16.
 */
import TodoDispatcher from '../core/dispatcher/dispatcher';
import * as types from '../constants/ActionTypes';

const TodoActions = {
    saveTodo(value) {
        debugger;
        TodoDispatcher.dispatch({
            type: types.SAVE_TODO,
            value: value
        });
    }
};

export default TodoActions;