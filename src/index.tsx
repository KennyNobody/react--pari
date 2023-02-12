import {render} from "react-dom";
import App from "./0_app/App";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "0_app/provider/ThemeProvider/index";
import "./5_shared/config/i18n/i18n";

render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)