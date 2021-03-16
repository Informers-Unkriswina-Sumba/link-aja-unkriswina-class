// React Dependencies
import React, { useState, Fragment, useEffect } from "react";
// Material UI Components - Core
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// Material UI Components - Icons
// Redux Setup
// API Call
// Interface Call
import { IClass } from "../../interfaces/IClass";
import { IDosen } from "../../interfaces/IDosen";
import { IMataKuliah } from "../../interfaces/IMataKuliah";
// Custom Components
import SearchMataKuliah from './Components/SearchMataKuliah';
import SearchSemester from './Components/SearchSemester';
import SearchDosen from './Components/SearchDosen';
// Styles
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import useStyles from "./styles";
import { classNames } from "../../utils/classNames";
// Assets
// Local Storage


interface IProps {
  // byClassName: (className: string) => void;
  bySemester: (semester: number) => void;
  // byProdi: (prodi: string) => void;
  byMataKuliah: (mataKuliah: IMataKuliah) => void;
  byDosen: (namaDosen: string) => void;
  cancelFilterSearch: () => void;
}
interface ISearchMataKuliah {
  namaMataKuliah: string, 
  kelas: string, 
  prodi: string, 
  sortProdiName: string,
}

const FilterSearch: React.FC<IProps> = (props) => {
  const classes = useStyles();  
  const [openDialog, setOpenDialog] = React.useState(false);

  const handle = {
    onOpenDialog: () => {
      setOpenDialog(true);      
    },
    onCloseDialog: () => {
      setOpenDialog(false);
    },
    onChangeSearchMataKuliah: (dataMataKuliah: IMataKuliah) => {
      // console.log('dataMataKuliah', dataMataKuliah);      
      // props.byClassName(dataMataKuliah.kelas);
      // props.byProdi(dataMataKuliah.prodi);
      props.byMataKuliah(dataMataKuliah);
    },
    onChangeSemester: (dataSemester: number) => {
      console.log('dataSemester', dataSemester);
      props.bySemester(dataSemester);
    },
    onChangeDosen: (namaDosen: string) => {
      console.log('namaDosen', namaDosen)
      props.byDosen(namaDosen);
    },
    onCloseDialogCancel: () => {
      props.cancelFilterSearch()
      setOpenDialog(false);      
    }
  }

  useEffect(() => {
  }, []);

  return (
    <div className={classes.filterSearchContentCointainer}>
      <Button onClick={handle.onOpenDialog} className={classes.btnOpenDialogFilterSearch}><span className={classes.textOpenDialogFilterSearch}>Filter Pencarian</span></Button>
      <Dialog disableBackdropClick disableEscapeKeyDown open={openDialog} onClose={handle.onCloseDialog}>
        <DialogTitle>Filter Pencarian</DialogTitle>
        <DialogContent className={classNames({
          classes: {
            root: classes.containeContentFilterSeacrch
          }
        }, classes.containeContentFilterSeacrch)}>
          <div className={classes.container}>
            <div className={classes.formControl}>
              <SearchMataKuliah onChange={handle.onChangeSearchMataKuliah} />
            </div>
            <div className={classes.formControl}>
              <SearchSemester onChange={handle.onChangeSemester} />
            </div>
            <div className={classes.formControl}>
              <SearchDosen onChange={handle.onChangeDosen} />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handle.onCloseDialogCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handle.onCloseDialog} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FilterSearch;
