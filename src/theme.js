import {createMuiTheme} from "@material-ui/core/styles";
import {amber, red} from "@material-ui/core/colors";

export default createMuiTheme({
    palette: {
        primary: red,
        secondary: {
            main: amber[500],
            light: amber[200],
            dark: amber[700]
        },
        type: "dark"
    },
    spacing: {
        unit: 10
    }
});