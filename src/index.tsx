import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import App from "./App";
import "./styles/normalize.css";
import "./styles/suitcss-base.css";
import "./styles/custom.css";
import theme from "./styles/muiTheme";

ReactDOM.render(
	<BrowserRouter>
	  <ThemeProvider theme={theme}>
	    <App />
	  </ThemeProvider>
	</BrowserRouter>,
 	document.getElementById("root")
);
