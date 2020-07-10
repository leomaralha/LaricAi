import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        position: 'fixed',
        bottom: 0,
        right: 0,
        left: 0,
        padding: theme.spacing(2),
        height: 'auto',
        zIndex: theme.zIndex.snackbar,
    },
    snackRoot: {
        position: 'relative',
    },
    listContainer:{
        transition: 'height 500ms ease 500ms ',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },

    "item-enter": {
        opacity: 0,
        transform: 'translateX(-100%)',
    },
    "item-enter-active": {
        opacity: 1,
        transform: 'translateX(0)',
        transition: 'opacity 500ms, transform 500ms ease-out',
    },
    "item-exit": {
        opacity: 1,
        transform: 'translateX(0%)',
    },
    "item-exit-active": {
        opacity: 0,
        transform: 'translateX(100%)',
        transition: 'opacity 500ms, transform 500ms ease-in',
    },

}))