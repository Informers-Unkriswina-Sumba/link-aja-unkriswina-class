import React, { useState, Fragment, useEffect } from "react";
import { IContribution } from "../../interfaces/IContribution";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import PersonIcon from '@material-ui/icons/Person'; 
import db from "../../data-source/db.json";
import { GiPodiumWinner } from "react-icons/gi";
import { GiPodiumSecond } from "react-icons/gi";
import { GiPodiumThird } from "react-icons/gi";
import { classNames } from "../../utils/classNames";
import LoyaltyIcon from '@material-ui/icons/Loyalty';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: '5px auto',
      maxWidth: 500,
    },
    image: {
      width: 125,
      height: 125,
      objectFit: "cover",
      objectPosition: "center"

    },
    img: {
      margin: 'auto',
      display: 'block',
      minWidth: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
    },
    listItem: {
      padding: 0,
      margin: 0,
    },
    MuiList: {
      padding: 0,
      margin: 0,        
    }
  }),
);

const Contribution: React.FC<unknown> = (props) => {
  const classes = useStyles();  
  const [dataContributor, setDataContributor] = useState<Array<IContribution>>([]);

  const handle = {
    setDataPeringkatContributor: () => {
      let resultSortByPeringkat = db.contributor.sort((a: IContribution, b: IContribution) => a.total_kontribusi - b.total_kontribusi);
      setDataContributor(resultSortByPeringkat.reverse())
    }
  }

  useEffect(() => {
    handle.setDataPeringkatContributor()
  }, []);

  return (
    <div className={classes.root}>
      {dataContributor.map((userContribute: IContribution, index: number) => (
        <Paper className={classes.paper} key={index}>
          <Grid container>
            <Grid item sm={6} xl={6} xs={6}>
              <ButtonBase className={classes.image}>
                <img className={classes.img} alt="complex" src={userContribute.avatar} />
              </ButtonBase>
            </Grid>
            <Grid item sm={6} xl={6} xs={6}>
              <List component="nav" className={classes.listItem} aria-label="main mailbox folders">
                <ListItem button className={classNames({
                  classes: {
                      root: classes.listItem
                    }
                  },
                  classes.listItem                  
                )}>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary={userContribute.nama} />
                </ListItem>
              </List>
              <List component="nav" className={classes.listItem} aria-label="main mailbox folders">
                <ListItem button className={classNames({
                  classes: {
                      root: classes.listItem
                    }
                  },
                  classes.listItem                  
                )}>
                  <ListItemIcon>
                    {index < 3 && index === 0 ? <GiPodiumWinner/> : index === 1 ? <GiPodiumSecond/>  : index === 2 ? <GiPodiumThird/> : <LoyaltyIcon/>}                                                     
                  </ListItemIcon>
                  <ListItemText primary={index+1} />
                </ListItem>
              </List>
              <List component="nav" className={classes.listItem} aria-label="main mailbox folders">
                <ListItem button className={classNames({
                  classes: {
                      root: classes.listItem
                    }
                  },
                  classes.listItem                  
                )}>
                  <ListItemIcon>
                    <AddAlertIcon />
                  </ListItemIcon>
                  <ListItemText primary={userContribute.total_kontribusi} />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </div>
  );  
};

export default Contribution;

 // InputProps={{
 //            classes: {
 //              root: classes.descriptionInputRoot,
 //              input: classes.descriptionInput,
 //              notchedOutline: classes.descriptionInputOutline,
 //            },
 //          }}





