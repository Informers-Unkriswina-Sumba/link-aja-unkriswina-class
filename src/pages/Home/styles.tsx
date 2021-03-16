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
	infoDataClassTitle: {
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
	    marginTop: "10px",
	},	
	containerGridDataClass: {
	    margin: "0 auto",
	    padding: "4px",
	    width: "100%",
	},
	wrapperDataClass: {
		width: "100%",
	    overflow: "hidden"
	},
	filterSearchContainer: {
		display: 'flex',
		justifyContent: 'center',
	}
}));

export default useStyles;
