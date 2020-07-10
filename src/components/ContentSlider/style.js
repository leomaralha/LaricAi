import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        color: ''
    },
    // Fade transition
    "fade-enter": {
        opacity: 0,
        transform: 'translateX(-100%)',
    },
    "fade-enter-active": {
        opacity: 1,
        transform: 'translateX(0%)',
        transition: ({transitionTime}) => `opacity ${transitionTime/2}ms, transform ${transitionTime/2}ms`,
    },
    "fade-enter-done":{
        opacity: 1,
        transform: 'translateX(0%)',
    },
    "fade-exit": {
        opacity: 1,
        transform: 'translateX(0%)',
    },
    "fade-exit-active": {
        opacity: 0,
        transform: 'translateX(100%)',
        transition: ({transitionTime}) => `opacity ${transitionTime/3}ms, transform ${transitionTime/3}ms`,
    },
    
    "fade-exit-done":{
        opacity: 0,
        transform: 'translateX(100%)',
    },
}))