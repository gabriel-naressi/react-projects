import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/hello-world.jsx';

var mountNode = document.getElementById('application');

ReactDOM.render(<HelloWorld />, mountNode);