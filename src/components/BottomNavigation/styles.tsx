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
    borderBottomLeftRadius: "6px",
    borderBottomRightRadius: "6px",  
    height: "35px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "14px",
    color: "#fff",
    fontWeight: 800,
    [theme.breakpoints.down('sm')]: {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    }
  }

}));

export default useStyles;
