
const drawerWidth = 240;

const drawerStyles = theme => ({
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...theme.mixins.toolbar,
    },
    drawerPaper: {
      height: '100%',
      width: drawerWidth,
    },
    chevron: {
      position: 'absolute',
      right: `calc(100% - ${drawerWidth}px)`,
    },
  });

  export default drawerStyles;