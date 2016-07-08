/**
 * Created by gabriel on 07/07/16.
 */
import TodoDispatcher from '../core/dispatcher/dispatcher';
import * as types from '../constants/ActionTypes';

const TodoActions = {
    saveTodo(data) {
        TodoDispatcher.dispatch({
            type: types.SAVE_TODO,
            data: data
        });
    },

    deleteTodo(id) {
        TodoDispatcher.dispatch({
            type: types.DELETE_TODO,
            id: id
        });
    }
};

export default TodoActions;