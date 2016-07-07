/**
 * Created by gabriel on 07/07/16.
 */
import TodoDispatcher from '../core/dispatcher/dispatcher';
import * as types from '../constants/ActionTypes';
import EventEmitter from 'eventemitter3';

const CHANGE_EVENT = "change";

var todos = [
    {
        value: '',
        checked: false
    }
];

class TodoStoreClass extends EventEmitter {

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback)
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback)
    }

    getTodos() {
        return todos;
    }

    emitChange() {
        return this.emit(CHANGE_EVENT);
    }
}

const TodoStore = new TodoStoreClass();

TodoDispatcher.register((action) => {
    switch (action.type) {
        case types.SAVE_TODO:
            saveTodo(action.value);
            TodoStore.emit(CHANGE_EVENT);
            break;

        default:
            break;
    }
});

function saveTodo(value) {
    todos.push({value: value, checked: false});
}

export default TodoStore;
