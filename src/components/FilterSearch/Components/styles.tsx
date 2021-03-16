import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
  avatarDosen: {
    width: '24px',
    height: '24px',
    objectFit: 'cover',
    objectPosition: 'center'
  },
  dosenContainer: {
    display: 'flex',
    gap: '5px',
  },
	formControl: {
	  margin: theme.spacing(1),
	  minWidth: 120,
    [theme.breakpoints.down('sm')]: {
	  display: 'flex',
	    justifyContent: 'center',
	    alignItems: 'center',
	  }
	},
	selectEmpty: {
	  marginTop: theme.spacing(2),
	},
	inputAutoComplete: {
		width: '300 px',
    [theme.breakpoints.down('sm')]: {
			width: '245px !important',
		}

	}


}));

export default useStyles;
