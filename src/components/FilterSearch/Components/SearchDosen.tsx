/* eslint-disable no-use-before-define */
import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person'; // dosen_pengampu
import { IDosen } from "../../../interfaces/IDosen";
import db from "../../../data-source/db.json";
import useStyles from "./styles";

interface IProps {
  onChange: (dosen: string) => void;
}

const SearchDosen: React.FC<IProps> = (props) => {
  const classes = useStyles();
  const [listDosen, setListDosen]:any = useState([]);
  const handle = {
    onChangeSearch: (dosen: IDosen | null) => {
      // console.log('dosen', dosen);
      dosen && props.onChange(dosen.namaDosen)
    }
  }

  // const setDataDosen = () => {
  //   let resultFilterDosen = db.dosen.map((dataDosen: IDosen) => {
  //     return dataDosen;
  //   });
  //   setListDosen(resultFilterDosen)    
  // }

  useEffect(() => {
    // setDataDosen();
  }, [])

  return (
    <Autocomplete
      id="country-select-demo"
      style={{ width: 300 }}
      options={db.dosen}
      className={classes.inputAutoComplete}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      getOptionLabel={(option) => option.namaDosen}
      onChange={(event, value) => handle.onChangeSearch(value)}
      renderOption={(option) => (
        <div className={classes.dosenContainer}>
          {option.namaDosen}
        </div>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Dosen"
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}

export default SearchDosen;