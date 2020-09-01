import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    imgContainer: {
        margin: 'auto',
    }
}));


export default function ThreeD() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid item container direction="column"
                justify="center"
                alignItems="center" style={{ paddingTop: "15px" }}>
                <Grid item container direction="column" justify="center" alignItems="center">
                <Typography variant="h2" gutterbottom>Feedback Form</Typography>
                <Typography variant="h6" gutterbottom>Thank you for visiting us. We would love to hear your feedback.</Typography>
                </Grid>
                {/* <Grid item style={{ width: "80vw", height: "80vh" }}>
                    <iframe width="100%" height="100%" src="https://3d.xporium.com/renewxposuperfinal2staging/" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Grid> */}

            </Grid>

        </React.Fragment>
    )
}