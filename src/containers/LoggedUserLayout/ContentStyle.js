
const styles = theme =>({
content: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 1,
    marginRight: theme.spacing.unit * 1,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
},

appBarSpacer: theme.mixins.toolbar,
})

export default styles;