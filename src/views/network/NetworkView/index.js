import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import MyNetwork from '../../../components/MyNetwork.js';
import Styles from '../../../components/styles.css'


const useStyles = makeStyles(theme => ({
    imgContainer: {
        margin: 'auto',
    }
}));


export default function NetworkView() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography variant="h4" gutterbottom><MyNetwork /></Typography>
        </React.Fragment>
    )
}