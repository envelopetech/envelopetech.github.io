import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import ImageMapper from 'react-image-mapper';
import audi from 'src/assets/images/audi.jpg';
import Slide from '@material-ui/core/Slide';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Page from 'src/components/Page';
import Grid from "@material-ui/core/Grid";
import background from '../../../assets/images/audi.jpg';
import Styles from './styles.css';
import Backdrop from '@material-ui/core/Backdrop';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Agenda from '../AgendaView'


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
    },
    
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    imgContainer: {
        margin: 'auto',
    },
    iframeContainer: {
        overflow: 'hidden',
        position: 'relative',
    },
    iframeContainer_iframe: {
        border: '0',
        height: '800px',
        left: '0',
        position: 'relative',
        top: '0',
        width: '100%',
    },
    speedDial: {
        position: 'absolute',
        bottom: theme.spacing(10),
        right: theme.spacing(6),
      },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const MAP = {
    name: "lobby-map",
    areas: [
        { name: "Webinar", shape: "rect", coords: [896, 357, 449, 143] },

    ]
}

const actions = [
    { icon: <FileCopyIcon />, name: 'All' },
  ];

export default function KeynoteView() {
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const classes = useStyles();
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('lg');
    const [hidden, setHidden] = React.useState(false);


    const handleClickOpen = () => {
        setOpen2(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleVisibility = () => {
        setHidden((prevHidden) => !prevHidden);
      };
    
      const handleOpen2 = () => {
        setOpen(true);
      };
    
      const handleClose2 = () => {
        setOpen(false);
      };

    return (
        <Page className={classes.root}
            title="Keynote">
            {/* <div>
                <div className={classes.imgContainer}>
                    <ImageMapper src={audi} width={'100%'} imgWidth={1920} map={MAP} onClick={handleClickOpen} />
                </div>
                <Dialog fullWidth={fullWidth} maxWidth={maxWidth} open={open} onClose={handleClose} TransitionComponent={Transition}>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                Demo Webinar
            </Typography>

                        </Toolbar>
                    </AppBar>
                    <div className={classes.iframeContainer}>
                        <iframe width="90%" className={classes.iframeContainer_iframe} src="https://www.bigmarker.com/xporium/Xporium-Demo?bmid=b0f384fa3336" allowfullscreen></iframe>
                    </div>
                </Dialog>
            </div> */}

            <Grid item container style={{
                   position: 'relative',
                   webkitTransformOrigin: '0% 0% 0',
                   transformOrigin: '0% 0% 0',
                   height: '100%',
                   width: '100%',
                   maxWidth: '100%',
                   overflow: 'hidden',
            }}>
                <div className="audi-background">
                <img alt="auditorium" src={background} className="background-fluid" />
                </div>
                <div className="audi-content">
                    <div className="audi-content-center">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Sm-JwZbgomI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                
                </div>
            </Grid>
            
      <Button onClick={handleVisibility}>Toggle Speed Dial</Button>
      <Backdrop open={open} style={{zIndex: '9'}} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        className={classes.speedDial}
        hidden={hidden}
        icon={<SpeedDialIcon />}
        onClose={handleClose2}
        onOpen={handleOpen2}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClickOpen}
          />
        ))}
      </SpeedDial>

      <Dialog
        open={open2}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        fullWidth={fullWidth}
        maxWidth={maxWidth}
      >
        <DialogTitle id="alert-dialog-slide-title">{"All Videos"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Please click on the desired video to play it in the auditorium.
          </DialogContentText>
          <Agenda />
        </DialogContent>
      </Dialog>
    
        </Page>

    );
}
