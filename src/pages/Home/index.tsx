import React, { useState, Fragment, useEffect, useCallback, useMemo } from "react";
import { IClass } from "../../interfaces/IClass";
import { IMataKuliah } from "../../interfaces/IMataKuliah";
import Typography from '@material-ui/core/Typography';
import useStyles from "./styles";
import CardClass from "../../components/CardClass";
import FilterSearch from "../../components/FilterSearch";
import db from "../../data-source/db.json";
import Grid from '@material-ui/core/Grid';

const Home: React.FC<any> = (props) => {
  const classes = useStyles();  
  const [dataClass, setDataClass] = useState<Array<IClass>>([])
  const [dataClassToSearch, setDataClassToSearch] = useState({
    class: "",
    semester: 0,
    prodi: "",
    namaMataKuliah: "",
    dosen: "",
  })

  console.log('render home');

  // const updateSearchbyClassName = (className: string) => {
  //   setDataClassToSearch({
  //     ...dataClassToSearch,
  //     class: className,
  //   });
  //   handle.onSearch();
  // }
  const updateSearchbySemester = (semester: number) => {
    console.log('dataClassToSearch', dataClassToSearch);
    let b = {
      ...dataClassToSearch,
      semester: semester,
    }
    console.log('b',b);
    setDataClassToSearch(b);
    handle.onSearch(b);
  }
  // const updateSearchbyProdi = (prodi: string) => {
  //   setDataClassToSearch({
  //     ...dataClassToSearch,
  //     prodi: prodi,
  //   });
  //   handle.onSearch();
  // }
  const updateSearchbyMataKuliah = (mataKuliah: IMataKuliah) => {
    console.log('dataClassToSearch', dataClassToSearch);
    let b = {
      ...dataClassToSearch,
      class: mataKuliah.kelas,
      prodi: mataKuliah.prodi,
      namaMataKuliah: mataKuliah.namaMataKuliah,
    }
    console.log('b',b);
    setDataClassToSearch(b);
    // console.log('dataClassToSearch', dataClassToSearch)

    handle.onSearch(b);

  }
  const updateSearchByDosen = (namaDosen: string) => {
    let b = {
      ...dataClassToSearch,
      dosen: namaDosen,
    }

    setDataClassToSearch(b);
    handle.onSearch(b);
  }

  // const memoizedOnSearchbyClassName = useCallback(updateSearchbyClassName, [])
  const memoizedOnSearchbySemester = useCallback(updateSearchbySemester, [])
  // const memoizedOnSearchbyProdi = useCallback(updateSearchbyProdi, [])
  const memoizedOnSearchbyMataKuliah = useCallback(updateSearchbyMataKuliah, [])
  const memoizedOnSearchByDosen = useCallback(updateSearchByDosen, [])

  // const getDataClassToSearch = (data:any) => {
  //   return data;
  // }
  // const dataClassProps = useMemo(() => getDataClassToSearch(dataClassToSearch), [dataClassToSearch])

  const handle = {
    // onSearchbyClassName: (className: string) => {
    //   setDataClassToSearch({
    //     ...dataClassToSearch,
    //     class: className,
    //   });
    //   handle.onSearch();
    // },
    // onSearchbySemester: (semester: number) => {
    //   setDataClassToSearch({
    //     ...dataClassToSearch,
    //     semester: semester,
    //   });
    //   handle.onSearch();
    // },
    // onSearchbyProdi: (prodi: string) => {
    //   setDataClassToSearch({
    //     ...dataClassToSearch,
    //     prodi: prodi,
    //   });
    //   handle.onSearch();
    // },
    // onSearchbyMataKuliah: (mataKuliah: IMataKuliah) => {
    //   console.log('dataMataKuliah', mataKuliah);      

    //   setDataClassToSearch({
    //     ...dataClassToSearch,
    //     class: mataKuliah.kelas,
    //     prodi: mataKuliah.prodi,
    //     namaMataKuliah: mataKuliah.namaMataKuliah,
    //   });
    //   console.log('dataClassToSearch', dataClassToSearch)

    //   handle.onSearch();
    // },
    // onSearchByDosen: (namaDosen: string) => {
    //   let b = {
    //     ...dataClassToSearch,
    //     dosen: namaDosen,
    //   }

    //   setDataClassToSearch(b);
    //   handle.onSearch(b);
    // },
    onSearch: async (dataClassToSearching: any) => {
      setDataClass([]);
      console.log('dataClassToSearching', dataClassToSearching)
      let searchClassByClassName:IClass[] = db.data.filter((dataClass: IClass) => {
        return dataClass.kelas === dataClassToSearching.class && 
          dataClass.prodi === dataClassToSearching.prodi 
      });     
      let searchClassBySemester:IClass[] = db.data.filter((dataClass: IClass) => {
        return dataClass.semester === dataClassToSearching.semester
      });
      let searchClassByProdi:IClass[] = db.data.filter((dataClass: IClass) => {
        return dataClass.prodi === dataClassToSearching.prodi 
      });
      let searchClassByMataKuliah:IClass[] = db.data.filter((dataClass: IClass) => {
        return dataClass.mata_kuliah === dataClassToSearching.namaMataKuliah &&
          dataClass.prodi === dataClassToSearching.prodi         
      });
      let searchClassByDosen:IClass[] = db.data.filter((dataClass: IClass) => dataClass.dosen_pengampu.toLowerCase() === dataClassToSearching.dosen.toLowerCase());

      console.log('searchClassByClassName', searchClassByClassName);
      console.log('searchClassBySemester', searchClassBySemester);
      console.log('searchClassByProdi', searchClassByProdi);
      console.log('searchClassByMataKuliah', searchClassByMataKuliah);
      console.log('searchClassByDosen', searchClassByDosen);

      setDataClass([
        ...searchClassByClassName,
        ...searchClassBySemester,
        ...searchClassByProdi,
        ...searchClassByMataKuliah,
        ...searchClassByDosen
      ])    

      console.log('result data sea', dataClass);   
      if(dataClass.length === 0) {
        console.log('Pencarian kelas tidak ditemukan');
      } 

      setDataClassToSearch({
        class: "",
        semester: 0,
        prodi: "",
        namaMataKuliah: "",
        dosen: "",
      })

    }, 
    resetFilterSearch: () => {
      setDataClass(db.data);
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
          cancelFilterSearch={handle.resetFilterSearch}
        />
      </div>
      <div className={classes.wrapperDataClass}>
        <Typography component="h1" variant="h3" className={classes.infoDataClassTitle}>
          <span className={classes.dataClassInfoSub}>Kami Mencari Kelas Yang Paling Relevan Dengan Pencarian Anda</span> <span className={classes.dataClassInfoSubSub}>Semoga Membantu</span> 
        </Typography>
        <div className={classes.containerDataClass}>
          <Grid container spacing={1} className={classes.containerGridDataClass}>
            {dataClass.map((cleass: IClass, index: number) => (
              <Grid item lg={6} md={6} xl={6} xs={12} sm={6} key={index}>
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
