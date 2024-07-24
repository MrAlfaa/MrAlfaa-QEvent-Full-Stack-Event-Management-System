import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {makeStyles} from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import {Container} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    toolbar: {
        justifyContent: "space-between",
        backgroundColor: "#28282a"
    },
    title: {
        flexGrow: 1,
        fontSize: 24,
    },
    left: {
        flex: 1,
    },
    leftLinkActive: {
        color: theme.palette.common.white,
    },
    logoText: {
        color: "#caa756",
    },
    right: {
        flex: 1,
        display: "flex",
        justifyContent: "flex-end",
    },
    rightLink: {
        fontSize: 16,
        color: theme.palette.common.white,
        marginLeft: theme.spacing(3),
    },
    linkSecondary: {
        color: theme.palette.secondary.main,
    },
}));

const GuestAppBar = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar className={classes.toolbar}>
                    <Link
                        variant="h6"
                        underline="none"
                        color="inherit"
                        className={classes.title}
                        href="/"
                    >
                        Event Marine
                    </Link>


                    <Container className={classes.right}>
                        <Link
                            color="inherit"
                            variant="h6"
                            underline="none"
                            className={classes.rightLink}
                            href="/login"
                        >
                            {"Login"}
                        </Link>
                        <Link
                            variant="h6"
                            underline="none"
                            className={`${classes.rightLink} ${classes.linkSecondary}`}
                            href="/register"
                        >
                            {"Register"}
                        </Link>
                    </Container>
                </Toolbar>
            </AppBar>
            <div/>
        </div>
    );
}

export default GuestAppBar;