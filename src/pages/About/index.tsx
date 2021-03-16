import React, { useState, Fragment } from "react";
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import { classNames } from "../../utils/classNames";
import ButtonContribution from "../../components/ButtonContribution";

interface IProps {

}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonBersediaKontribusi: {
			margin: theme.spacing(1),    	
    }    
  }),
);

const About: React.FC<IProps> = (props) => {
	
  return (
    <div>
    	<div>
    		About Page
    	</div>
	    <ButtonContribution/>      
    </div>
  );
};

export default About;