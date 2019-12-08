import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles(theme => ({
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

export const useStylesWithProps = makeStyles({
  avatar: {
		backgroundColor: properties => properties.color,
		color: properties => properties.theme.palette.getContrastText(properties.color)
  },
});