import React from 'react';
import { Helmet } from 'react-helmet';

import metaData from '../../config/metaData'

const Home = () => {

    const exampleMethod = () => {
        console.log('Hello World');
    };

    return (
        <div>
            <Helmet title={metaData.home.title} />
            <h1>My home page</h1>
            <button onClick={exampleMethod}>Click moro</button>
        </div>
    )
};

export default Home;