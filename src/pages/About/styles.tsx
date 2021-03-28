import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		height: "100vh",
	    display: "flex",
	    flexDirection: "column",
	    alignItems: "center",
	    justifyContent: "center",
	},
	textInfo: {
	    textTransform: "uppercase",
	    color: "var(--color-dark-grey)",
	    textAlign: "center",
        fontWeight: 800,
    	fontFamily: "sans-serif",
    	fontSize: "30px",
  		[theme.breakpoints.down('sm')]: {
	    	fontSize: "25px"
  		}
  	}

}));

export default useStyles;
