import React, { useState } from 'react';
import ImageMapper from 'react-image-mapper';
import background from '../../../assets/images/exhibitor-bg.jpg';
import stall1 from '../../../assets/images/stall1.png';
import stall2 from '../../../assets/images/stall2.png';
import { makeStyles } from '@material-ui/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Link from '@material-ui/core/Link';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import ChatIcon from '@material-ui/icons/Chat';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import TextField from '@material-ui/core/TextField';
import Iframe from 'react-iframe';
import theme from '../../../theme';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Styles from './styles.css'


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const useStyles = makeStyles(theme => ({
    imgContainer: {
        margin: 'auto',
    },
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    root: {
        maxWidth: 345,
    },
    table: {
        minWidth: 650,
    },
    link: {
        color: '#304ffe',
    },
    large: {
        width: theme.spacing(9),
        height: theme.spacing(9),
    },
    button: {
        marginRight: theme.spacing(2),
    },


}));


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const MAP = {
    name: "lobby-map",
    areas: [
        { name: "Auditorium", shape: "rect", coords: [77,309,346,385], href: "/keynote" },
        { name: "Resources", shape: "rect", coords: [364, 288, 499, 368], href: "/resources" },
        { name: "Exhibition", shape: "rect", coords: [621, 299, 869, 364] },
        { name: "Networking", shape: "rect", coords: [1065, 267, 1212, 327], href: "/networking" },

    ]
}

function createData(Name, Type, Link) {
    return { Name, Type, Link };
}

const rows = [
    createData('Corporate Profile', 'PDF', 'Download'),
    createData('Product Brochures', 'PDF', 'Download'),

];

export default function Exhibitor() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('m'));
    const [value, setValue] = React.useState(0);
    const preventDefault = (event) => event.preventDefault();
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('lg');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            {/* <div className={classes.imgContainer}>
                <ImageMapper src={exhibitor} width={1366} imgWidth={1366} map={MAP}
                    onClick={handleClickOpen}
                />
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
                <div className="exhibitor-content" style={{position: 'absolute', margin: '0 10%'}}>
                <Carousel>
                    <div onClick={handleClickOpen}>
                        <img src={stall1} />
                        <p className="legend">Stall 1</p>
                    </div>
                    <div>
                        <img src={stall2} />
                        <p className="legend">Stall 2</p>
                    </div>
            </Carousel>
                
                </div>
            </Grid>
            <Dialog fullWidth={fullWidth}
                maxWidth={maxWidth} open={open} onClose={handleClose} TransitionComponent={Transition}>
                {/* <DialogContent>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h4" gutterbottom>Confirm</Typography>
                        </Grid>
                    </Grid>
                </DialogContent> */}

                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Exhibitor Name
            </Typography>


                    </Toolbar>
                </AppBar>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="About" {...a11yProps(0)} />
                    <Tab label="Products" {...a11yProps(1)} />
                    <Tab label="Team" {...a11yProps(2)} />
                    <Tab label="Video" {...a11yProps(3)} />
                    <Tab label="Assets" {...a11yProps(4)} />
                    <Tab label="Contact Us" {...a11yProps(5)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <Typography>
                        Cras mattis consectetur purus sit amet fermentum.
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.Cras mattis consectetur purus sit amet fermentum.
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.Cras mattis consectetur purus sit amet fermentum.
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.Cras mattis consectetur purus sit amet fermentum.
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.Cras mattis consectetur purus sit amet fermentum.
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.Cras mattis consectetur purus sit amet fermentum.
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.Cras mattis consectetur purus sit amet fermentum.
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.Cras mattis consectetur purus sit amet fermentum.
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        </Typography>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Grid container xs={12} sm spacing={2}>
                        <Grid item xs={6}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Solar Panels"
                                        height="140"
                                        image="https://www.solarcompare.co.in/media/blog/1019/1571216296solar_panel.jpg"
                                        title="Solar Panels"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Solar Panels
          </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Solar Panels are an arrangement of solar cells mounted in a frame and covered with glass. It is also known as Solar PV Modules, solar plates
          </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Download Brochure
        </Button>
                                    <Button size="small" color="primary" href="https://exquisito.whats.bz/#/store/">
                                        Buy Now
        </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card className={classes.root}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Solar Panels"
                                        height="140"
                                        image="https://www.solarcompare.co.in/media/blog/1019/1571216296solar_panel.jpg"
                                        title="Solar Panels"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Solar Panels
          </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Solar Panels are an arrangement of solar cells mounted in a frame and covered with glass. It is also known as Solar PV Modules, solar plates
          </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Download Brochure
        </Button>
                                    <Button size="small" color="primary" href="https://exquisito.whats.bz/#/store/">
                                        Buy Now
        </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>


                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Grid container xs={12} sm spacing={2}>
                        <Grid item xs={6}>
                            <Card elevation={3}>
                                <CardContent>
                                    <Grid container spacing={2}>
                                        <Grid item>
                                            <Avatar alt="Remy Sharp" src="https://pbs.twimg.com/profile_images/3746770727/90fbfb8ff2aba8e6d3acf4b135d824e6_400x400.jpeg" variant="square" className={classes.large} />
                                        </Grid>
                                        <Grid item xs={12} sm container>
                                            <Grid item xs container direction="column">
                                                <Grid item xs>
                                                    <Typography variant="h6" >Nisarg Mehta</Typography>
                                                    <Typography variant="subtitle1">Founder at Xporium</Typography>
                                                    <Typography variant="subtitle1" gutterBottom>Meeting ID: 818 240 56060</Typography>

                                                    <Button
                                                        variant="contained"
                                                        color="secondary"
                                                        className={classes.button}
                                                        startIcon={<VideoCallIcon />}
                                                        href="https://www.xporiumdemo.com/"
                                                        target="_blank"
                                                        //onClick={()=> setOpen2(true)}
                                                    >
                                                        Video Call
                            </Button>
                                                    <Button
                                                        variant="outlined"
                                                        className={classes.button}
                                                        startIcon={<ChatIcon />}
                                                    >
                                                        Chat
                            </Button>





                                                </Grid>

                                            </Grid>
                                        </Grid>
                                    </Grid>



                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card elevation={3}>
                                <CardContent>
                                    <Grid container spacing={2}>
                                        <Grid item>
                                            <Avatar alt="Remy Sharp" src="https://softvan.in/wp-content/uploads/2019/05/Aatish.png" variant="square" className={classes.large} />
                                        </Grid>
                                        <Grid item xs={12} sm container>
                                            <Grid item xs container direction="column">
                                                <Grid item xs>
                                                    <Typography variant="h6">Aatish Motipara</Typography>
                                                    <Typography variant="subtitle1">Business Development Manager at Xporium</Typography>
                                                    <Typography variant="subtitle1" gutterBottom>Meeting ID: 818 240 56060</Typography>

                                                    <Button
                                                        variant="contained"
                                                        color="secondary"
                                                        className={classes.button}
                                                        startIcon={<VideoCallIcon />}
                                                    >
                                                        Video Call
                            </Button>
                                                    <Button
                                                        variant="outlined"

                                                        className={classes.button}
                                                        startIcon={<ChatIcon />}
                                                    >
                                                        Chat
                            </Button>





                                                </Grid>

                                            </Grid>
                                        </Grid>
                                    </Grid>



                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                </TabPanel>
                <TabPanel value={value} index={3}>
                <Grid container xs={12} sm spacing={2}>
                        <Grid item xs={4}>
                        <iframe width="100%" height="240" src="https://www.youtube.com/embed/grc8nJx6uxU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </Grid>
                        <Grid item xs={4}>
                        <iframe width="100%" height="240" src="https://www.youtube.com/embed/H2JWFFPUEPw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </Grid>
                        <Grid item xs={4}>
                        <iframe width="100%" height="240" src="https://www.youtube.com/embed/oO5__Kkj740" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </Grid>
                        <Grid item xs={4}>
                        <iframe width="100%" height="240" src="https://www.exp360.in/project/vr360/Virtual_Furniture_Store" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </Grid>
                        {/* <Grid item xs={4}>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/DzuUnKY_2pk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </Grid> */}
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={4}>
                <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>File Name</TableCell>
                                    <TableCell align="right">Type</TableCell>
                                    <TableCell align="right">Link</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.Name}
                                        </TableCell>
                                        <TableCell align="right">{row.Type}</TableCell>
                                        <TableCell align="right" numeric component="a" href="google.com" className={classes.link}>{row.Link}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <Grid item container direction="column">
                        <Grid item>
                            <Grid item container spacing={2}>
                                <Grid item>
                                    <CallIcon />
                                </Grid>
                                <Grid item>
                                    <Typography variant="body1">(555) 555-5555)</Typography>
                                </Grid>
                            </Grid>
                            <Grid item container spacing={2}>
                                <Grid item>
                                    <MailIcon />
                                </Grid>
                                <Grid item>
                                    <Typography variant="body1">info@companyname.com</Typography>
                                </Grid>

                            </Grid>
                            <Grid item style={{ marginTop: "1em", marginBottom: "1em" }}>
                                <TextField style={{ width: "100%" }}
                                    id="outlined-multiline-static"
                                    label="Send Enquiry"
                                    multiline
                                    rows={4}
                                    defaultValue="Write your message here..."
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item>
                                <Button variant="contained">Send Enquiry</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </TabPanel>

            </Dialog>

            <Dialog fullScreen open={open2} onClose={()=>setOpen2(false)}>
             <DialogContent>
                 <Iframe src="https://xporiumdemo.com"
                width="450px"
                height="450px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
                allowFullScreen />
            </DialogContent>                       
            </Dialog>
        </React.Fragment>


    )
}