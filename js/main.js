import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/todo.jsx';

var mountNode = document.getElementById('application');

ReactDOM.render(<Todo />, mountNode);