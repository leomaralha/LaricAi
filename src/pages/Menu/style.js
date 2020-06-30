import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>({
    root: {
        display: "flex",
        flexFlow:"column wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
      },
      gridList: {
        display:"flex",
        flexFlow:"column wrap",
    
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: "translateZ()",//Defines a 3D translation, using only the value for the Z-axis
      },
      titleBar: {
        display: "flex",
        flexFlow:"column wrap",
         background:
          'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
          'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        
        height: "auto",
      },
      styleCat: {
        marginTop:"10px",
        textAlign: "center",
        fontSize: "2rem",
        fontFamily:"Arial Narrowl",
      },
      styleDesc:{
        textAlign: "center",
        fontSize: "1rem",
        
      },
}))