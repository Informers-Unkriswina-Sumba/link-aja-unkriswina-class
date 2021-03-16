/* eslint-disable no-use-before-define */
import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { IMataKuliah } from "../../../interfaces/IMataKuliah";
import { IClass } from "../../../interfaces/IClass";
import db from "../../../data-source/db.json";
import useStyles from "./styles";

interface IProps {
  onChange: (mataKuliah: IMataKuliah) => void;
}

const SearchMataKuliah: React.FC<IProps> = (props) => {
  const [listMataKuliah, setListMataKuliah] = useState<any>([]);
  const classes = useStyles();

  const options = listMataKuliah.map((option: any) => {
    const firstLetter = option.prodi[0].toUpperCase();
    return {
      firstLetter: option.prodi,
      ...option,
    };
  });

  const handle = {
    onChange: (mataKuliah: IMataKuliah | null) => {
      // console.log('mataKuliah', mataKuliah);
      // setMataKuliah      
      mataKuliah && props.onChange(mataKuliah);
    }
  }

  const setDataMatakuliah = () => {
    let resultFilterMataKuliah = db.data.map((dataKelas: IClass) => {
      return {
        mata_kuliah: dataKelas.mata_kuliah,
        kelas: dataKelas.kelas,
        prodi: dataKelas.prodi,
        sortProdiName: dataKelas.sortProdiName
      };
    });

    console.log('resultFilterMataKuliah', resultFilterMataKuliah);
    setListMataKuliah(resultFilterMataKuliah);
  }

  useEffect(() => {
    setDataMatakuliah()
  }, []);

  return (
    <Autocomplete
      id="grouped-mata-kuliah"
      className={classes.inputAutoComplete}
      options={options.sort((a:any, b: any) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option:any) => option.firstLetter}
      getOptionLabel={(option:any) => `${option.mata_kuliah} - ${option.kelas} - ${option.sortProdiName}`}
      style={{ width: 300 }}
      renderInput={ (params) => 
        <TextField 
        {...params} 
          label="Mata Kuliah" 
          variant="outlined" 
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      }
      onChange={(event, value) => handle.onChange(value)}
    />
  );
}

export default SearchMataKuliah;