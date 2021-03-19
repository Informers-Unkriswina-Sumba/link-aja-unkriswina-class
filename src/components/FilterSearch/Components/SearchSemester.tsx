import React, {useEffect, useState, Fragment} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import db from "../../../data-source/db.json";
import { IClass } from "../../../interfaces/IClass";
import useStyles from "./styles";

interface IProps {
  onChange: (semester: number | null) => void;
}
const SearchSemester: React.FC<IProps> = (props) => {
  const classes = useStyles();
  const [listSemester, setListSemester]:any = useState([]);
  const [semester, setSemester] = useState<any>(null);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    console.log('semester', event.target.value)
    setSemester(event.target.value);
    props.onChange(Number(event.target.value))
  };
  
  const setDataSemester = () => {
    let resultFilterSemester = db.data.map((dataKelas: IClass) => {
      return dataKelas.semester;
    });
    resultFilterSemester = resultFilterSemester.filter((value: any, index: number) => resultFilterSemester.indexOf(value) === index)
    setListSemester(resultFilterSemester.sort())
  }

  useEffect(() => {
    setDataSemester();
  }, []);

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="select-semester">Semester</InputLabel>
        <Select
          labelId="select-semester"
          id="demo-customized-select"
          value={semester}
          onChange={handleChange}
        >
          {listSemester.map((semester:number, index: number) => (
            semester === 0 ? (
              <MenuItem key={index} value={0}>Tidak Diketahui</MenuItem>            
              ) : (
              <MenuItem key={index} value={semester}>{semester}</MenuItem>                          
            )
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default SearchSemester;