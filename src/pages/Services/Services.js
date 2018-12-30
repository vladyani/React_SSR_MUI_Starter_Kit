import React from 'react';
import { Helmet } from 'react-helmet';

import metaData from '../../config/metaData';

const Services = () => {
    return (
        <div>
            <Helmet title={metaData.services.title} />
            <h1>Services page</h1>
        </div>
    )
}

export default Services;