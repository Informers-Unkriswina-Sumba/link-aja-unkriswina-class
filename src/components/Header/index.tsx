import React, { useState, Fragment } from "react";
import useStyles from "./styles";
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

interface Props {

}

const Header: React.FC<Props> = (props) => {
	const classes = useStyles();
  
  return (
    <div className={classes.headerContainer}>
  		<div className={classes.headerInfoContainer}>
  			<div className={classes.userInfo}>
  				<img className={classes.imgUser} src={"./img/logo-unkriswina-sumba.jpg"} />
  			</div>
  			<div className={classes.headerTitle}>
  				Link Aja Unkriswina Class
  			</div>
  			<div className={classes.userInfo}>
  				<img className={classes.imgUser} src={"./img/logo-informers.jpeg"} />
  			</div>
  		</div>
    </div>
  );
};

export default Header;