import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	headerContainer: {
	    color: "#fff",
	    fontWeight: 600,
	    backgroundColor: "var(--color-astra)",
	    borderTopLeftRadius: "10px",
	    borderTopRightRadius: "10px",
	    alignItems: "center",
	    fontSize: "30px",
	    [theme.breakpoints.down('sm')]: {
		    borderTopLeftRadius: 0,
		    borderTopRightRadius: 0,
	    },            
	},
	headerInfoContainer: {
	    display: "flex",
	    justifyContent: "space-between",
	    alignItems: "center",
	},
	userInfo: {
		display: "flex",
	    alignItems: "center",
	    gap: "10px",
	    padding: '5px',
	},
	headerTitle: {
	    fontSize: "24px",
	    textAlign: "center",
	    [theme.breakpoints.down('sm')]: {
		    fontSize: "20px",
	    },            
	},
	headerActions: {

	},
	imgUser: {
		borderRadius: "50%",
	    objectFit: "cover",
	    objectPosition: "center",
	    width: '36px',
	    height: '36px',
	},
	username: {
		fontSize: "16px",
    	fontWeight: 700		
	},
	menuContainer: {
	    marginLeft: "-60px",
	    marginTop: "4px",	
	}
}));

export default useStyles;

