import React, { Fragment } from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { useHistory } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import GroupIcon from '@material-ui/icons/Group';
import useStyles from "./styles";

const BottomNavigationComponent: React.FC<any> = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState(0);

  const changeNavigation = (event: any, newValue: any) => {
    history.push(`/${newValue}`);
    setValue(newValue);    
  }

  return (
    <div className={classes.root}>
      <BottomNavigation
        value={value}
        onChange={changeNavigation} 
        showLabels
        className={classes.containerBottomNavigationAction}
      >
        <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />    
        <BottomNavigationAction label="About" value="about" icon={<InfoIcon />} />
        <BottomNavigationAction label="Contribution" value="contribution" icon={<GroupIcon />} />
      </BottomNavigation>
      <footer className={classes.footer}>copyright&copy;{new Date().getFullYear()} Link Aja Unkriswina Class. All rights reserved by informers@19</footer>
    </div>        
  );
}

export default BottomNavigationComponent;