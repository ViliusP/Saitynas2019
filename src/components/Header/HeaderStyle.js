const drawerWidth = 240;

const appBarStyles = theme => ({
    appBar: {
      position: 'relative',
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginBottom: theme.spacing.unit *2,
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    appBarShiftLeft: {
      marginLeft: drawerWidth,
    },
    hide: {
      display: 'none',
    },
    whiteIcon: {
      color: theme.palette.primary.contrastText,
    },
  });

  export default appBarStyles;