/**
 * Created by gabriel on 07/07/16.
 */
import TodoDispatcher from '../core/dispatcher/dispatcher';
import ActionTypes from '../constants/ActionTypes';

const TodoActions = {
    saveTodo(value) {
        debugger;
        TodoDispatcher.dispatch({
            type: ActionTypes.SAVE_TODO,
            value: value
        });
    }
};

export default TodoActions;