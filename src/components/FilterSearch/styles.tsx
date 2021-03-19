import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	container: {
      display: 'flex',
      flexWrap: 'wrap',
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center'
      }

    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    containeContentFilterSeacrch: {
    	padding: 0
    },
    filterSearchContentCointainer: {
      display: 'flex',
      justifyContent: 'center',
    },
    textOpenDialogFilterSearch: {
      color: '#fff',
      fontSize: '16px',
      letterSpacing: 0,
    },
    btnOpenDialogFilterSearch: {
      backgroundColor: "var(--color-astra)",
      '&:hover': {
        backgroundColor: "var(--color-astra)",
        opacity: .7
      }
    }
}));

export default useStyles;
