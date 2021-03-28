import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px",
    // width: '100%%',
    // display: "flex",
    // justifyContent: "center",
  },
  containerBottomNavigationAction: {
    justifyContent: "space-around",
    height: "40px"
  },
  footer: {
    backgroundColor: "var(--color-astra)",
    textAlign: "center",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",  
    height: "35px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "14px",
    color: "#fff",
    fontWeight: 800,
    [theme.breakpoints.down('sm')]: {
      borderTopLeftRadius: "5px",
      borderTopRightRadius: "5px",  
    }
  }

}));

export default useStyles;
