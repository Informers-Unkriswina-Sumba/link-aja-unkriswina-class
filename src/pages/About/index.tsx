import React, { useState, Fragment } from "react";
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import { classNames } from "../../utils/classNames";
import ButtonContribution from "../../components/ButtonContribution";
import Typography from '@material-ui/core/Typography';
import useStyles from "./styles"

interface IProps {

}

const About: React.FC<IProps> = (props) => {
  const classes = useStyles();  

  return (
    <div className={classes.root}>
      <Typography className={classes.textInfo} variant="h2">Halaman Ini Masih Dalam Pengembangan</Typography>
	    <ButtonContribution/>      
    </div>
  );
};

export default About;