/**
 * Created by gabriel on 07/07/16.
 */
import TodoDispatcher from '../core/dispatcher/dispatcher';
import * as types from '../constants/ActionTypes';
import EventEmitter from 'eventemitter3';

const CHANGE_EVENT = "change";

var todos = [];

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
            saveTodo(action.data);
            TodoStore.emit(CHANGE_EVENT);
            break;

        case types.DELETE_TODO:
            deleteTodo(action.id);
            TodoStore.emit(CHANGE_EVENT);

        default:
            break;
    }
});

function saveTodo(data) {
    todos.push({
        id: data.id,
        value: data.value,
        checked: false
    });
}

function deleteTodo(id) {
    for(var i = 0; i<todos.length; i++) {
        if(todos[i].id === id) {
            todos.splice(i, 1);
        }
    }
}

export default TodoStore;
