import { makeStyles } from '@material-ui/core/styles';
const fontFamily = "font-family: 'Ubuntu', sans-serif;"
export default makeStyles((theme) => ({
    root: {
        fontFamily: fontFamily,
        borderLeft: `solid 7px ${theme.palette.info.main}`,
        background: theme.palette.grey['200'],
        borderRadius: '7px',
        margin: '5px',
        padding: '10px'
    },
    title: {
        fontSize: '1.2rem',
        color: theme.palette.info.light,
        lineHeight: 1.66,
        fontWeight: 700,
        letterSpacing: '0.5px',
    },
    subtitle: {
        color: theme.palette.grey['700'],
        fontSize: '0.75rem',
        lineHeight: 1.4,
        letterSpacing: 0,
        margin: '10px 0 10px 5px'
    },
    divider:{
        color: theme.palette.info.light,
        background: theme.palette.info.light,
        borderColor: theme.palette.info.light,
    }
}))