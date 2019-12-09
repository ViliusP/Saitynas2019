import React from 'react';
import { useTheme } from '@material-ui/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DriveEta from '@material-ui/icons/DriveEta';

import { useStyles, useStylesWithProps } from './SearchTripTemplateStyle';

const  generateColor = () => (
	'#' +  Math.random().toString(16).substr(-6)
)
	


export default function SearchTripTemplate(props) {
	const classes = useStyles();
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
		photoURL,
		setDataAndOpen
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
        <IconButton aria-label="Send request" onClick={()=> setDataAndOpen({open: true, data: {tripID: tripID}})}>
          <DriveEta/>
        </IconButton>
      </CardActions>
    </Card>
  );
}
