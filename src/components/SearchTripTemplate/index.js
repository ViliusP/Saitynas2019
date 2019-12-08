import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/styles';

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DriveEta from '@material-ui/icons/DriveEta';

const useStyles = makeStyles(theme => ({
  card: {
    marginBottom: theme.spacing(2)
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
	},
	cardContent: {
		paddingBottom: theme.spacing(0),
	},

}));	

const useStylesWithProps = makeStyles({
  avatar: {
		backgroundColor: properties => properties.color,
		color: properties => properties.theme.palette.getContrastText(properties.color)
  },
});
const  generateColor = () => (
	'#' +  Math.random().toString(16).substr(-6)
)
	


export default function SearchTripTemplate(props) {
	const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
	const [properties] = React.useState({ color: generateColor(), theme: useTheme()})

	const classesUsingProps = useStylesWithProps(properties);


  const {
    tripID,
    tripFirstCity,
    tripLastCity,
    cost,
    space,
    info,
    postDate,
    departureDate,
    userFirstName,
    userLastName,
    phoneNumber,
    photoURL
	} = props;
	
	return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classesUsingProps.avatar}>
            {userFirstName[0] + userLastName[0]}
          </Avatar>
        }
        title= {userFirstName + " " +  userLastName}
        subheader={postDate}
      />

      <CardContent className={classes.cardContent}>
				<Typography paragraph variant="body2" color="textSecondary" component="p">
				 Departure date: {departureDate} - {tripLastCity}
        </Typography>
        <Typography paragraph variant="body2" color="textSecondary" component="p">
				 Route: {tripFirstCity} - {tripLastCity}
        </Typography>
				<Typography paragraph variant="body2" color="textSecondary" component="p">
				 Cost: {cost} eur
        </Typography>
				<Typography paragraph variant="body2" color="textSecondary" component="p">
				 Free space: {space}
        </Typography>
				<Typography paragraph variant="body2" color="textSecondary" >
          {info}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Send request">
          <DriveEta/>
        </IconButton>
      </CardActions>
    </Card>
  );
}
