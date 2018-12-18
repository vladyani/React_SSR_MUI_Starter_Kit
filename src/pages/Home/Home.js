import React from 'react';
import { Helmet } from 'react-helmet';

export default class Home extends React.Component {
    exampleMethod() {
        console.log('JS is running');
    }

    head() {
        return (
            <Helmet>
                <title>My home page</title>
            </Helmet>
        )
    }

    render() {
        return (
            <div>
                {this.head}
                <h1>My home page</h1>
                <p>Some content</p>
                <button onClick={this.exampleMethod}>Click moro</button>
            </div>
        )
    }
}