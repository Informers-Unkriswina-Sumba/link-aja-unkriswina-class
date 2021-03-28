import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	gretting: {

	},
	userName: {
		fontSize: "35px",
	    fontWeight: 600,
	    color: "var(--color-astra)",
	},
	grettingText: {
	    fontSize: "25px",
	    fontWeight: 600,
	    color: "#fff",
	},
	homeContainer: {

	},
	grettingContainer: {
    	backgroundColor: "lightpink",
	},
	tagLineDataClassTitle: {
		textAlign: "center",
	    lineHeight: 0.4,
	},
	dataClassInfoSub: {
	    color: "var(--color-astra)",
	    fontSize: "15px",
	    fontWeight: 600,		
	},
	dataClassInfoSubSub: {
		color: "var(--color-flamingo)",
	    fontSize: "22px",
	    fontWeight: 600
	},
	containerDataClass: {
		// overflow: "auto",
	    padding: "15px",	
	    marginTop: "25px",
	    height: "90vh",
	    overflow: "scroll",
	},	
	containerGridDataClass: {
	    margin: "0 auto",
	    padding: "4px",
	    width: "80%",
	    [theme.breakpoints.down('sm')]: {
		    margin: "0 auto",
		    padding: "10px",
		    width: "100%",
	    },
	},
	wrapperDataClass: {
		width: "100%",
	    overflow: "hidden"
	},
	filterSearchContainer: {
		alignItems: 'center',
		marginTop: '10px',
		display: 'flex',
		justifyContent: 'center',
		gap: '10px'
	},
	btnResetResultSearchClass: {
	    padding: '5px',
	    color: '#fff',
	    backgroundColor: "var(--color-astra)",
    	'&:hover' : {
			backgroundColor: 'var(--color-astra)',
		    color: '#fff',
	    	opacity: .7,
    	}
	},
	dataSearchClass: {
		marginTop: '7px'
	},
	infoResultSearchClass : {
	    fontSize: '13px',
	    fontWeight: 'normal',
	    textAlign: 'center',
	    textTransform: 'capitalize',
	    color: 'var(--color-dark-grey)',		
	}
}));

export default useStyles;
