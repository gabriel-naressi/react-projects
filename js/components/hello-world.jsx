import React from 'react';

class HelloWorld extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h2> Hello World! </h2>
            </div>
        )

    }
}

HelloWorld.displayName = "HelloWorld";
export default HelloWorld;