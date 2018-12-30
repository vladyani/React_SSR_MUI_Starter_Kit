import {BrowserRouter} from 'react-router-dom';
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {MuiThemeProvider, createGenerateClassName} from "@material-ui/core/styles";
import {JssProvider} from 'react-jss';
import theme from './theme';

const generateClassName = createGenerateClassName();

class Main extends React.Component {
    // Remove the server-side injected CSS.
    componentDidMount() {
        const jssStyles = document.getElementById('jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        return <App/>
    }
}

ReactDOM.hydrate(
    <JssProvider generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
            <BrowserRouter>
                <Main/>
            </BrowserRouter>
        </MuiThemeProvider>
    </JssProvider>,
    document.getElementById("root")
);


