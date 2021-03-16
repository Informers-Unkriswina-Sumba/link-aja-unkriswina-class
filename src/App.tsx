import React, { Fragment, useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contribution from './pages/Contribution';
import NotFound from './pages/NotFound';
import BottomNavigation from './components/BottomNavigation';
import Header from './components/Header';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  mainContainer: {
    maxHeight: "100%",
    height: "100%",
    overflow: "auto",
    minWidth: "100%",
    margin: 0,
    padding: 0,
  }
}));

const App: React.FC<any> = (props) => {
  const classes = useStyles();
  return (
    <div className="container-app">
      <Fragment>
        <Header/>
        <Container className={classes.mainContainer} component="main" maxWidth="xs">
          <CssBaseline />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" children={<Redirect to="/" />} />
            <Route path="/about" component={About} />
            <Route path="/contribution" component={Contribution} />
            <Route path="/" component={NotFound} />
          </Switch>
        </Container>
        <BottomNavigation />
      </Fragment>
    </div>
  );
}

export default App;