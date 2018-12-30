import express from 'express';
import reload from 'reload';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router';
import bodyParser from 'body-parser';
import {Helmet} from 'react-helmet';
import {JssProvider, SheetsRegistry} from 'react-jss';
import {MuiThemeProvider, createGenerateClassName} from '@material-ui/core/styles';
import App from './src/App';
import theme from './src/theme';

const app = express();
const PORT = process.env.PORT || 3000;
const isDevEnv = process.env.NODE_ENV === 'development';

app.use(bodyParser.json());

//generate build with webpack
app.use(express.static('build/public'));

if (isDevEnv) reload(app);

app.get('*', (req, res) => {

    const sheetsRegistry = new SheetsRegistry();
    const generateClassName = createGenerateClassName();
    const sheetsManager = new Map();

    const context = {};

    const content = renderToString(
        <JssProvider
            registry={sheetsRegistry}
            generateClassName={generateClassName}>
            <MuiThemeProvider
                theme={theme}
                sheetsManager={sheetsManager}>
                <StaticRouter location={req.url} context={context}>
                    <App/>
                </StaticRouter>
            </MuiThemeProvider>
        </JssProvider>
    );

    const helmet = Helmet.renderStatic();
    const css = sheetsRegistry.toString();

    console.log(helmet.title.toString());
    console.log(process.env.NODE_ENV);

    const html = `
        <html>
            <head>
                ${helmet.meta.toString()}
                ${helmet.title.toString()}
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
                <style id="jss-styles">${css}</style>
            </head>
            <body>
                <div id="root">${content} </div>
                 <script src="client_bundle.js"></script>
                 ${isDevEnv ? `<script src="/reload/reload.js"></script>` : ''}
            </body>
        </html>
    `;

    if (context.status === 404) res.status(404);

    res.send(html);
});

app.listen(PORT, () => console.log(`App running on port ${PORT}`));




