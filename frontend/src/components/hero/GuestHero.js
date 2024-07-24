import {Button, Grid, Typography} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";
import React from "react";
import BackgroundImageContainer from "../common/BackgroundImageContainer";

const styles = (theme) => ({

    root: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(14),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    h5: {
        marginBottom: theme.spacing(4),
        marginTop: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
            marginTop: theme.spacing(10),
        },
    },
});

const GuestHero = (props) => {

    const classes = props;

    return (
        <BackgroundImageContainer className={classes.background}>
            <Grid
                container
                spacing={6}
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item>
                    <Typography color="inherit" align="center" variant="h2">
                        Welcome to
                    </Typography>
                    <Typography color="inherit" align="center" variant="h2" marked="center" style={{fontWeight: 400}}>
                        Event Marine
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
                        You can easily attend in the event that interests you.
                    </Typography>
                </Grid>
                <Grid item>
                    <Grid container spacing={1}>
                        <Grid item>
                            <Button
                                color="secondary"
                                variant="contained"
                                size="large"
                                component="a"
                                href="/login"
                            >
                                Login
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                color="secondary"
                                variant="outlined"
                                size="large"
                                component="a"
                                href="/register"
                            >
                                Register
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </BackgroundImageContainer>
    );

}

export default withStyles(styles)(GuestHero);