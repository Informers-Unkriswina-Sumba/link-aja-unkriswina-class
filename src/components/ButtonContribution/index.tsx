import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import { classNames } from "../../utils/classNames";
import NoteAddIcon from '@material-ui/icons/NoteAdd';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonBersediaKontribusi: {
			margin: theme.spacing(1),    	
    }    
  }),
);

interface Props {

}

const ButtonContribution: React.FC<Props> = (props) => {
  	const classes = useStyles();

	const handle = {
	  onClickContribution: () => {
	  	let subject:string = "Petarung Kontribusi Link aja Unkriswina Class";
	  	let emailTo:string = "r3ndydinar@gmail.com";
	  	let body: string = `
			Hi %0Asaya ingin menjadi kontributor di Link Aja Unkriswina Class %0ABerikut Kontribusi Saya:	
			%0AProdi: 
			%0ASemester: 
			%0AMata Kuliah: 
			%0AKelas: 
			%0ADosen Pengampu: 
			%0AHari: 
			%0ARuang: 
			%0AKode: 
			%0ALink kelas Whatsapp: 
			%0ALink kelas Classroom: 
			%0AUnggahan Foto Kartu Rencana Studi Saya: 
			%0A%0AIni kontribusi saya
			%0ASemoga bermanfaat
			%0ASalam #KITA
			%0ATerimakasih
	  	`;
	 	window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
	  }		
	}
	return (
		<div>
		    <Button
		        variant="contained"
		        color="secondary"
		        className={classes.buttonBersediaKontribusi}
		        startIcon={<NoteAddIcon />}
		        onClick={handle.onClickContribution}
		    >
		        Saya Ingin berkontribusi
		    </Button>		        
		</div>
	);
};

export default ButtonContribution;