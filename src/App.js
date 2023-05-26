import './App.css';
import {Button, Checkbox, Container, CssBaseline, Divider, FormControlLabel, Grid, Stack, Typography} from "@mui/material";
import {TextFields} from "./components/TextFields";
import MyImage from './assets/images/pexels-gabriela-guerino-1839904.jpg';
import {Router} from "./components/Router";


function App() {
    return (<>
            <CssBaseline/>
            <Router/>
        </>
    );
}

export default App;
