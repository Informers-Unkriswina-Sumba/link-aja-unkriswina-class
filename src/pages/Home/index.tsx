import React, { useState, Fragment, useEffect, useCallback, useMemo } from "react";
import { IClass } from "../../interfaces/IClass";
import { IMataKuliah } from "../../interfaces/IMataKuliah";
import Typography from '@material-ui/core/Typography';
import useStyles from "./styles";
import CardClass from "../../components/CardClass";
import FilterSearch from "../../components/FilterSearch";
import db from "../../data-source/db.json";
import Grid from '@material-ui/core/Grid';
import { BiReset } from "react-icons/bi";
import IconButton from '@material-ui/core/IconButton';

interface IDataClassToSearching {
  class: string,
  dosen: string,
  namaMataKuliah: string,
  prodi: string,
  semester: number | null,
}

const Home: React.FC<any> = (props) => {
  const classes = useStyles();  
  const [dataClass, setDataClass] = useState<Array<IClass>>([])
  const [infoSearchClass, setInfoSearchClass] = useState<string>("")
  const [dataClassToSearch, setDataClassToSearch] = useState<IDataClassToSearching>({
    class: "",
    semester: null,
    prodi: "",
    namaMataKuliah: "",
    dosen: "",
  })
  const [isSearchClass, setIsSearchClass] = useState<boolean>(false)

  const updateSearchbySemester = (semester: number | null) => {
    infoSearchClass.length > 0 ? semester === null ? setInfoSearchClass(`semester: tidak diketahui, `) : setInfoSearchClass(`semester: ${semester}, `) : semester === null ? setInfoSearchClass(`Pencarian semester: tidak diketahui, `) : setInfoSearchClass(`Pencarian semester: ${semester}, `);    
    let tempDataClassToSearch = {
      ...dataClassToSearch,
      semester: semester,
    }
    console.log('tempDataClassToSearch',tempDataClassToSearch);
    setDataClassToSearch(tempDataClassToSearch);
    handle.onSearch(tempDataClassToSearch);
  }
  
  const updateSearchbyMataKuliah = (mataKuliah: IMataKuliah) => {
    infoSearchClass.length > 0 ? setInfoSearchClass(`mata kuliah: ${mataKuliah.namaMataKuliah}, kelas: ${mataKuliah.kelas}, prodi: ${mataKuliah.prodi}`) : setInfoSearchClass(`Pencarian mata kuliah: ${mataKuliah.namaMataKuliah}, kelas: ${mataKuliah.kelas}, prodi: ${mataKuliah.prodi}, `); 

    console.log('mataKuliah', mataKuliah)
    let tempDataClassToSearch = {
      ...dataClassToSearch,
      class: mataKuliah.kelas,
      prodi: mataKuliah.prodi,
      namaMataKuliah: mataKuliah.namaMataKuliah,
    }
    console.log('tempDataClassToSearch',tempDataClassToSearch);
    setDataClassToSearch(tempDataClassToSearch);
    handle.onSearch(tempDataClassToSearch);
  }
  const updateSearchByDosen = (namaDosen: string) => {
    infoSearchClass.length > 0 ? setInfoSearchClass(`dosen pengampu: ${namaDosen}, `) : setInfoSearchClass(`Pencarian dosen pengampu: ${namaDosen}, `);
    let tempDataClassToSearch = {
      ...dataClassToSearch,
      dosen: namaDosen,
    }

    setDataClassToSearch(tempDataClassToSearch);
    handle.onSearch(tempDataClassToSearch);
  }

  const updateResetFilterSearch = () => {
    setDataClass(db.data);
  }

  const memoizedOnSearchbySemester = useCallback(updateSearchbySemester, [])
  const memoizedOnSearchbyMataKuliah = useCallback(updateSearchbyMataKuliah, [])
  const memoizedOnSearchByDosen = useCallback(updateSearchByDosen, [])
  const memoizedResetFilterSearch = useCallback(updateResetFilterSearch, []);

  const findCorrectClass = (dataClassToSearching: IDataClassToSearching): boolean => {
    let resultSeacrhClass:any = [];
      if(dataClassToSearching.class.length !== 0 && dataClassToSearching.namaMataKuliah.length !== 0 && dataClassToSearching.prodi.length !== 0) {
        resultSeacrhClass = db.data.filter((dataClass: IClass) => {
          return dataClass.kelas === dataClassToSearching.class && 
              dataClass.prodi === dataClassToSearching.prodi &&
              dataClass.mata_kuliah === dataClassToSearching.namaMataKuliah
          }); 
      }
      if(dataClassToSearching.dosen.length !== 0) {
        resultSeacrhClass = db.data.filter((dataClass: IClass) => dataClass.dosen_pengampu.toLowerCase() === dataClassToSearching.dosen.toLowerCase());
      }
      if(dataClassToSearching.semester !== null) {
        resultSeacrhClass = db.data.filter((dataClass: IClass) => dataClass.semester === dataClassToSearching.semester );
      }
      console.log('resultSeacrhClass', resultSeacrhClass)
      if(resultSeacrhClass.length > 0) {
        setDataClass(resultSeacrhClass);
        return true;
      } else {
        return false;
      }
  }

  const findSimiliarClass = (dataClassToSearching: IDataClassToSearching) => {
    console.log('dataClassToSearching', dataClassToSearching)
    let searchClassByClassName:IClass[] = db.data.filter((dataClass: IClass) => {
      return dataClass.kelas === dataClassToSearching.class && 
        dataClass.prodi === dataClassToSearching.prodi 
    });  
    let searchClassBySemester:IClass[] = [];  
    if(dataClassToSearching.semester === 0) {
      searchClassBySemester = db.data.filter((dataClass: IClass) => dataClass.semester === 0 );
    } else {
      searchClassBySemester = db.data.filter((dataClass: IClass) => {
        return dataClass.semester === dataClassToSearching.semester
      });
    }
    let searchClassByProdi:IClass[] = db.data.filter((dataClass: IClass) => {
      return dataClass.prodi === dataClassToSearching.prodi 
    });
    let searchClassByMataKuliah:IClass[] = db.data.filter((dataClass: IClass) => {
      return dataClass.mata_kuliah === dataClassToSearching.namaMataKuliah &&
        dataClass.prodi === dataClassToSearching.prodi         
    });
    let searchClassByDosen:IClass[] = db.data.filter((dataClass: IClass) => dataClass.dosen_pengampu.toLowerCase() === dataClassToSearching.dosen.toLowerCase());

    // console.log('searchClassByClassName', searchClassByClassName);
    // console.log('searchClassBySemester', searchClassBySemester);
    // console.log('searchClassByProdi', searchClassByProdi);
    // console.log('searchClassByMataKuliah', searchClassByMataKuliah);
    // console.log('searchClassByDosen', searchClassByDosen);

    setDataClass([
      ...searchClassByClassName,
      ...searchClassBySemester,
      ...searchClassByProdi,
      ...searchClassByMataKuliah,
      ...searchClassByDosen
    ]);
  }

  const handle = {
    onSearch: async (dataClassToSearching: IDataClassToSearching) => {
      setDataClass([]);
      setIsSearchClass(true);
      const resultFindCorrectClass = await findCorrectClass(dataClassToSearching);
      console.log('resultFindCorrectClass', resultFindCorrectClass);
      if(!resultFindCorrectClass) {
        await findSimiliarClass(dataClassToSearching)
      }

      console.log('result data search class', dataClass);   
      if(dataClass.length === 0) {
        console.log('Pencarian kelas tidak ditemukan');
      } 

      setDataClassToSearch({
        class: "",
        semester: 0,
        prodi: "",
        namaMataKuliah: "",
        dosen: "",
      });
    }, 
    resetResultSearchClass: () => {
      setDataClass(db.data);
      setIsSearchClass(false);
      setInfoSearchClass("");
      setDataClassToSearch({
        class: "",
        semester: 0,
        prodi: "",
        namaMataKuliah: "",
        dosen: "",
      });
    }
  }

  useEffect(() => {
    console.log('perubahan terjadi')
    setDataClass(db.data);
  }, []);

  return (
    <div className={classes.homeContainer}>
      <div className={classes.grettingContainer}>
        <Typography component="h1" variant="h3" className={classes.gretting}>
          <span className={classes.userName}>Hi</span> <span className={classes.grettingText}>Selamat Datang</span> 
        </Typography>
      </div>
      <div className={classes.filterSearchContainer}>
        <FilterSearch 
          byMataKuliah={memoizedOnSearchbyMataKuliah}    
          bySemester={memoizedOnSearchbySemester}       
          byDosen={memoizedOnSearchByDosen}
          cancelFilterSearch={memoizedResetFilterSearch}
        />
        {isSearchClass && (
          <IconButton className={classes.btnResetResultSearchClass} onClick={handle.resetResultSearchClass}>
            <BiReset />
          </IconButton>
        )}        
      </div>
      <div className={classes.wrapperDataClass}>
        <Typography component="h1" variant="h3" className={classes.tagLineDataClassTitle}>
          <span className={classes.dataClassInfoSub}>Kami Mencari Kelas Yang Paling Relevan Dengan Pencarian Anda</span> <span className={classes.dataClassInfoSubSub}>Semoga Membantu</span> 
        </Typography>
        {isSearchClass && (
          <div className={classes.dataSearchClass}>
            <Typography variant="subtitle2" className={classes.infoResultSearchClass}>
              {isSearchClass && infoSearchClass.substr(0, infoSearchClass.length-2)}
            </Typography>      
          </div>
        )}
        <div className={classes.containerDataClass}>
          <Grid container spacing={1} className={classes.containerGridDataClass}>
            {dataClass.map((cleass: IClass, index: number) => (
              <Grid item lg={4} md={4} xl={4} xs={12} sm={6} key={index}>
                <CardClass dataClass={cleass}/>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );  
};

export default Home;
