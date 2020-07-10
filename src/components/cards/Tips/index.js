import React from 'react';
import { Grid, Typography, Divider } from '@material-ui/core';
import useStyles from './style';

function TipCard({ primaryText, secondaryText }) {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <Grid container>
                    <Typography className={classes.title}>{primaryText}</Typography>
                    <Grid item xs={12}>
                    <Divider className={classes.divider} />
                    </Grid>
                    <Typography className={classes.subtitle}>{secondaryText}</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default TipCard;