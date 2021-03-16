import { FilledInput, FormControl, InputLabel, OutlinedInput } from "@material-ui/core";
import { AutocompleteRenderInputParams } from "@material-ui/lab";
import React from "react";
import { classNames } from "../../utils/classNames";
import useStyles from "./styles";

interface Props {
  label?: string;
  placeholder?: string;
  hintText?: string;
  maxLength?: number;
  name?: string;
  type?: "text" | "password";
  value?: any;
  required?: boolean;
  defaultValue?: any;
  error?: boolean;
  errorText?: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  autoCompleteParams?: AutocompleteRenderInputParams;
  variant?: "filled" | "outlined" | "nofill";
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
  className?: string;
  classNameInput?: string;
  inputRef?:any;
  inputProps?:any;
  rows?: any
  autoFocus?: any
}

const TextField: React.FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <FormControl fullWidth required={props.required}>
      {(props.label || props.maxLength) && (
        <div className={classes.labelContainer}>
          {props.label && (
            <InputLabel shrink classes={{ shrink: classes.inputLabel }}>
              {props.label}
            </InputLabel>
          )}
        </div>
      )}
      {props.variant === "filled" || props.variant === "nofill" ? (
        <FilledInput
          autoComplete="off"
          innerRef={props.autoCompleteParams?.InputProps.ref}
          placeholder={props.placeholder ?? ""}
          value={props.value}
          defaultValue={props.defaultValue}
          autoFocus={props.autoFocus}
          name={props.name}
          error={props.error}
          classes={{
            root: classNames(
              props.className,
              classes.rootInput,
              props.variant === "filled" ? classes.rootInputFilled : classes.rootInputNoFill
            ),
            //input: classes.input,
            input: classNames(classes.input, props.classNameInput),
          }}
          inputProps={{
            maxLength: props.maxLength,
            ...props.autoCompleteParams?.inputProps,
          }}
          type={props.type ?? "text"}
          disableUnderline
          startAdornment={props.startAdornment}
          endAdornment={props.endAdornment}
          onBlur={props.onBlur}
          onChange={props.onChange}
          onKeyDown={props.onKeyDown}
          inputRef={props.inputRef}          
          rows={props.rows}
          {...props.autoCompleteParams?.InputProps}
        />
      ) : (
        <OutlinedInput
          autoComplete="off"
          innerRef={props.autoCompleteParams?.InputProps.ref}
          value={props.value}
          defaultValue={props.defaultValue}
          placeholder={props.placeholder ?? ""}
          autoFocus={props.autoFocus}
          name={props.name}
          error={props.error}
          classes={{
            root: classNames(props.className, classes.rootInput, classes.rootInputOutlined),
            input: classNames(classes.input, props.classNameInput),
          }}
          inputProps={{
            maxLength: props.maxLength,
            ...props.autoCompleteParams?.inputProps,
          }}
          type={props.type ?? "text"}
          startAdornment={props.startAdornment}
          endAdornment={props.endAdornment}
          onBlur={props.onBlur}
          onChange={props.onChange}
          onKeyDown={props.onKeyDown}
          inputRef={props.inputRef}
          rows={props.rows}
          {...props.autoCompleteParams?.InputProps}
        />
      )}
      {props.error && props.errorText && <div className={classes.errorText}>{props.errorText}</div>}
    </FormControl>
  );
};

TextField.defaultProps = {
  variant: "outlined",
};

export default TextField;
