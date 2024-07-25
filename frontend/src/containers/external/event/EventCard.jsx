import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {CardHeader} from "@material-ui/core";
import defaultImage from "../../../assets/event-default.jpg"

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 160,
    },
});

const EventCard = (props) => {

    const classes = useStyles();

    const fields = props.fields

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardHeader
                    title={fields.title}
                />
                <CardMedia
                    className={classes.media}
                    image={defaultImage}
                    title="Default event image"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {fields.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={(event) => props.onActionHandler(fields)}>
                    {props.actionName}
                </Button>
            </CardActions>
        </Card>
    );
}

export default EventCard;