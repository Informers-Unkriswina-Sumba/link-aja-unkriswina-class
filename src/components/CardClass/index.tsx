import React, { useState, Fragment } from "react";
import { IClass } from "../../interfaces/IClass";
import { makeStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import { classNames } from "../../utils/classNames";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button'
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import ButtonContribution from "../../components/ButtonContribution";
import { SiGoogleclassroom } from "react-icons/si";

import WhatsAppIcon from '@material-ui/icons/WhatsApp'; // WhatsApp
import PersonIcon from '@material-ui/icons/Person'; // dosen_pengampu
import ShowChartIcon from '@material-ui/icons/ShowChart'; // semester
import SchoolIcon from '@material-ui/icons/School'; // prodi
import MenuBookIcon from '@material-ui/icons/MenuBook'; // mata_kuliah
import ClassIcon from '@material-ui/icons/Class'; // kelas
import EventIcon from '@material-ui/icons/Event'; // hari
import FingerprintIcon from '@material-ui/icons/Fingerprint'; // kode
import HomeIcon from '@material-ui/icons/Home'; // ruangan

interface Props {
	dataClass: IClass 
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
	    width: "100%",
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    cardHeader: {
      display: 'flex',
      justifyContent: 'space-between'
    },
 	modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
	  // flexDirection: "column",
   //    width: "75%"
    },
    modalPaper: {
      opacity: 3,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
	  flexDirection: "column",
      width: "75%",
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    buttonBersediaKontribusi: {
		margin: theme.spacing(1),    	
    },
    menuLinks: {
	    opacity: 2,
	    marginLeft: '100px',
	    marginTop: '-58px',
	    [theme.breakpoints.down('sm')]: {
		    marginLeft: '44px',
	    },    	
    },
    titleErrorModal: {
	    color: "var(--color-warning-1)",
	    fontWeight: 600,
	    fontSize: "30px",
	    textAlign: "center",    	
    },
    errorInfoModal: {
	    fontSize: "20px",
	    fontWeight: 500,
	    color: "var(--color-mine-shaft)",
	    textAlign: "center"   	
    }
  }),
);
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));
const StyledMenuItem = withStyles((theme) => ({
  root: {
    minHeight: "auto",
    paddingLeft: "7px",
    paddingRight: "7px",
    paddingTop: 0,
    paddingBottom: 0,

    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);
function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

const CardClass: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [openLinkNotFound, setOpenLinkNotFound] = React.useState(false);

  const handle = {
	 	handleClickMenuLink: (event: React.MouseEvent<HTMLElement>) => {
	    setAnchorEl(event.currentTarget);
	  },
	  handleCloseMenuLink: () => {
	    setAnchorEl(null);
	  },
		handleExpandClick: () => {
	    setExpanded(!expanded);
	  },
	  onClickLinkClass: (link: string) => {
	  	console.log('link',link)
	  	if(link !== "#") {
			window.open(
			  `${link}`,
			  '_blank'
			);	  		
	  	} else {
			setOpenLinkNotFound(true);
	  	}
	  },
	  onCloseModalLinkNotFound: () => {
    	setOpenLinkNotFound(false);
	  },	 
  }

  return (
  	<Fragment>
	    <Card className={classes.root}>
	      <CardHeader
	        className={classes.cardHeader}
	        avatar={
	          <Avatar aria-label="recipe" className={classes.avatar}>
	            {props.dataClass.kelas}
	          </Avatar>
	        }        
	        title={`${props.dataClass.prodi} - Semester ${props.dataClass.semester}`  }
	        subheader={props.dataClass.hari}
	      />
	      <CardMedia
	        className={classes.media}
	        image={props.dataClass.image}
	        title="Paella dish"
	      />
	      <CardContent>
	       	<Typography gutterBottom variant="h5" component="h2">
	           {props.dataClass.mata_kuliah}
	        </Typography>        
	      </CardContent>	
	      <CardActions disableSpacing>
	        <IconButton aria-label="share" onClick={(e) => handle.handleClickMenuLink(e)}>
	          <ShareIcon />
	        </IconButton>
			<StyledMenu
		        id="customized-menu"
		        anchorEl={anchorEl}
		        keepMounted
		        open={Boolean(anchorEl)}
		        onClose={handle.handleCloseMenuLink}
		        className={classes.menuLinks}
		      >
		        <StyledMenuItem>
		          <ListItemIcon onClick={() => handle.onClickLinkClass(props.dataClass.link_kelas.whatsapp)}>
		            <WhatsAppIcon fontSize="small" />
		          </ListItemIcon>
		          <ListItemText primary="WhatsApp Group" />
		        </StyledMenuItem>
		        <StyledMenuItem>
		          <ListItemIcon onClick={() => handle.onClickLinkClass(props.dataClass.link_kelas.classroom)}>
		            <SiGoogleclassroom fontSize="small" />
		          </ListItemIcon>
		          <ListItemText primary="Classroom" />
		        </StyledMenuItem>
		      </StyledMenu>          
	        <IconButton
	          className={classNames(classes.expand, {
	            [classes.expandOpen]: expanded,
	          })}
	          onClick={handle.handleExpandClick}
	          aria-expanded={expanded}
	          aria-label="show more"
	        >
	          <ExpandMoreIcon />
	        </IconButton>
	      </CardActions>
	      <Collapse in={expanded} timeout="auto" unmountOnExit>
	        <CardContent>
	          <List component="nav" aria-label="main mailbox folders">
			        <ListItem button>
			          <ListItemIcon>
			            <PersonIcon />
			          </ListItemIcon>
			          <ListItemText primary={props.dataClass.dosen_pengampu} />
			        </ListItem>
				      <Divider />
			        <ListItem button>
			          <ListItemIcon>
			            <ShowChartIcon />
			          </ListItemIcon>
			          <ListItemText primary={String(props.dataClass.semester)} />
			        </ListItem>
				      <Divider />
			        <ListItem button>
			          <ListItemIcon>
			            <SchoolIcon />
			          </ListItemIcon>
			          <ListItemText primary={props.dataClass.prodi} />
			        </ListItem>
				      <Divider />
			        <ListItem button>
			          <ListItemIcon>
			            <MenuBookIcon />
			          </ListItemIcon>
			          <ListItemText primary={props.dataClass.mata_kuliah} />
			        </ListItem>
				      <Divider />
			        <ListItem button>
			          <ListItemIcon>
			            <ClassIcon />
			          </ListItemIcon>
			          <ListItemText primary={props.dataClass.kelas} />
			        </ListItem>
				      <Divider />
			        <ListItem button>
			          <ListItemIcon>
			            <EventIcon />
			          </ListItemIcon>
			          <ListItemText primary={props.dataClass.hari} />
			        </ListItem>
				      <Divider />
			        <ListItem button>
			          <ListItemIcon>
			            <FingerprintIcon />
			          </ListItemIcon>
			          <ListItemText primary={props.dataClass.kode} />
			        </ListItem>
				      <Divider />
			        <ListItem button>
			          <ListItemIcon>
			            <HomeIcon />
			          </ListItemIcon>
			          <ListItemText primary={props.dataClass.ruang} />
			        </ListItem>
			      </List>
	        </CardContent>
	      </Collapse>
	    </Card>
			<Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openLinkNotFound}
        onClose={handle.onCloseModalLinkNotFound}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
	      <Fade in={openLinkNotFound}>
					<div className={classes.modalPaper}>
						<h2 id="transition-modal-title" className={classes.titleErrorModal}>Opps, Maaf</h2>
						<Typography gutterBottom variant="h5" component="h2" className={classes.errorInfoModal}>
							Link kelas belum didapatkan, bersediakah kamu untuk berkontribusi di <span>Link Aja Unkriswina Class</span> dengan memberikan link kelas jika kamu mengetahuinya.
						</Typography>        
						<ButtonContribution/>  
					</div>
	      </Fade>
      </Modal>
  	</Fragment>
  );
};

export default CardClass;
