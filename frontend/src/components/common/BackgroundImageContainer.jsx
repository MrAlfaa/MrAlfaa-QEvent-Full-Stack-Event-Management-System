import {makeStyles} from "@material-ui/core/styles";
import {Container} from "@material-ui/core";

const image =
    'https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80';


const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.common.white,
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            height: '80vh',
            minHeight: 500,
            maxHeight: 1300,
        },
    },
    backdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.5,
        zIndex: -1,
    },
    background: {
        backgroundImage: `url(${image})`,
        backgroundColor: 'black',
        backgroundPosition: 'center',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        zIndex: -2,
    },

}));

const BackgroundImageContainer = (props) => {

    const classes = useStyles();

    return (
        <Container className={classes.root}>

            {props.children}
            <div className={classes.backdrop}/>
            <div className={classes.background}/>

        </Container>
    );

}

export default BackgroundImageContainer;