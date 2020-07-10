import React from 'react';
import useStyles from './style';
import MuiSnackbar from "@material-ui/core/Snackbar";
import { Alert as MuiAlert, AlertTitle } from '@material-ui/lab';
import Slide from '@material-ui/core/Slide';
import { withStyles } from '@material-ui/core'
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';


const StyledAlert = withStyles((theme) => ({
    root: {
        minWidth: '70vw',
    },
    outlinedSuccess: {
        background: theme.palette.success.light + '50'
    },
    outlinedInfo: {
        background: theme.palette.info.light + '50'
    },
    outlinedWarning: {
        background: theme.palette.warning.light + '50'
    },
    outlinedError: {
        background: theme.palette.secondary.light + '50'
    },
}))(MuiAlert)

const Snackbar = withStyles((theme) => ({
    root: {
        position: 'relative'
    }
}))(MuiSnackbar)


function Alert({ open, message, onClose, autoHideDuration = 4000, anchorOrigin, key, type, title, variant, ...others }) {
    const classes = useStyles();

    return (
        <Snackbar
            anchorOrigin={anchorOrigin}
            open={open}
            onClose={onClose}
            autoHideDuration={autoHideDuration}
            {...others.Snackbar}
        >
            <StyledAlert
                onClose={onClose} severity={type} variant={variant} {...others.Alert}>
                {title && <AlertTitle>{title}</AlertTitle>}
                {message}
            </StyledAlert>
        </Snackbar>
    )
}


function SnackBarManager({ alerts, onSnackClose }) {
    const classes = useStyles();

    const handleClose = (key) => (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        onSnackClose(key)
    }

    const transitioncss = {
        enter: classes["item-enter"],
        enterActive: classes["item-enter-active"],
        exit: classes["item-exit"],
        exitActive: classes["item-exit-active"],
        enterDone: classes["item-enter-done"]
    }

    return (
        <div className={classes.root}>
            <TransitionGroup className={classes.listContainer}>
                {
                    alerts.map((alert, index) => {
                        const { message, key, autoHideDuration, type, ...others } = alert
                        if (index >= 5) return null
                        return (
                            <CSSTransition
                                key={`${key}-css`}
                                timeout={500}
                                classNames={transitioncss}
                            >
                                <Alert
                                    key={key}
                                    type={type}
                                    open={true}
                                    message={message}
                                    onClose={handleClose(key)}
                                    autoHideDuration={autoHideDuration}
                                    {...others}
                                />
                            </CSSTransition>
                        )
                    })
                }
            </TransitionGroup>
        </div>
    );
}

export default SnackBarManager;