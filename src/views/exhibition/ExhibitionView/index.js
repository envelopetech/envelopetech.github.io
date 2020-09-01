import React from 'react';
import ImageMapper from 'react-image-mapper';
import background from 'src/assets/images/exhibit-hall.jpg';
import { makeStyles } from '@material-ui/styles';
import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles(theme => ({
    imgContainer: {
        margin: 'auto',
    },
    anchorKeynote: {
        position: 'absolute', 
        left: '12.34%', 
        top: '20.74%', 
        width: '10.99%', 
        height: '6.2%', 
        zIndex: 2
    },
    anchorResource: {
        position: 'absolute', 
        left: '26.61%', 
        top: '40.74%', 
        width: '9.74%', 
        height: '7.96%', 
        zIndex: 2
    },
    anchorExhibition: {
        position: 'absolute', 
        left: '40.94%', 
        top: '42.5%', 
        width: '15.57%', 
        height: '8.15%', 
        zIndex: 2
    },
    anchorNetwork: {
        position: 'absolute', 
        left: '83.02%', 
        top: '40%', 
        width: '11.2%', 
        height: '6.85%', 
        zIndex: 2
    },
}));

const MAP = {
    name: "lobby-map",
    areas: [
        { name: "Auditorium", shape: "rect", coords: [105,138,263,209], href: "/app/keynote"  },
        { name: "Resources", shape: "rect", coords: [364,288,499,368], href: "/app/resources"  },
        { name: "Exhibition", shape: "rect", coords: [621,299,869,364], href: "/app/exhibitor"},
        { name: "Networking", shape: "rect", coords: [1065,267,1212,327], href: "/app/networking"  },   
    ]
  }

export default function ExhibitionView() {
    const classes = useStyles();
    return (
        // <div className={classes.imgContainer}>
        //     <ImageMapper src={exhibithall} width={1920} imgWidth={1920} map={MAP}/>
        // </div>
        <Grid item container style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "calc(100vh - 64px)"
        }}>
            <div className="users">
                <Link href='/app/keynote' className={classes.anchorKeynote}></Link>
                <Link href='/app/resource' className={classes.anchorResource}></Link>
                <Link href='/app/exhibitor' className={classes.anchorExhibition}></Link>
                <Link href='/app/network' className={classes.anchorNetwork}></Link>
            </div>
        </Grid>
    )
}