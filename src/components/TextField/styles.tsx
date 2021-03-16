import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textRed: {
    color: "var(--color-warning-1)"
  },
  rootInputFilled: {
    // backgroundColor: "var(--color-gallery)",
    '&.MuiAutocomplete-inputRoot[class*="MuiFilledInput-root"]': {
      padding: 0,
      paddingLeft:theme.spacing(2),
      paddingRight:'16px !important',
      fontSize:theme.spacing(1.75),
    },
  },
  rootInputNoFill: {
    backgroundColor: "transparent",
    "&.Mui-focused": {
      backgroundColor: "transparent",
    },
    '&.MuiAutocomplete-inputRoot[class*="MuiFilledInput-root"]': {
      padding: 0,
      paddingLeft:theme.spacing(2),
      paddingRight:'16px !important',
      fontSize:theme.spacing(1.75),
    },
  },
  rootInput: {
    width:"100%",
    backgroundColor: "transparent",
    minHeight: theme.spacing(5.25),
    borderRadius: theme.spacing(0.625),
    fontFamily: "'Poppins', sans-serif",
    [theme.breakpoints.down("xs")]: {
      height: theme.spacing(3.625),
    },
  },
  rootInputOutlined: {
    backgroundColor: "white",
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--color-mine-shaft)",
    },
    '&.MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]': {
      padding: 0,
      paddingLeft:theme.spacing(2),
      paddingRight:'16px !important',
      fontSize:theme.spacing(1.75),
    },
  },
  input: {
    padding: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(0.625),
      fontSize: theme.spacing(1.375),
    },
    '&::placeholder': {
      fontSize: "14px",
      // padding: theme.spacing(1),
    }
  },
  labelContainer: {
    display: "flex",
    marginBottom: theme.spacing(0.625),
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  inputLabel: {
    position: "initial",
    color: "var(--color-mine-shaft)",
    fontSize: theme.spacing(2),
    fontWeight: 700,
    transform: "none",
    letterSpacing: theme.spacing(0.04),
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.spacing(1.375),
    },
    "&.Mui-focused": {
      color: "var(--color-mine-shaft)",
    },
  },
  errorText: {
    marginTop: theme.spacing(0.625),
    color: "var(--color-warning-1)",
    fontSize: theme.spacing(1.5),
    fontWeight: 700,
    letterSpacing: theme.spacing(0.04),
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.spacing(1),
    },
  }
}));


export default useStyles;