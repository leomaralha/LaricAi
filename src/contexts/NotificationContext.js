import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';
import { red, blue, green, yellow } from '@material-ui/core/colors';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';import SnackBarManager from '../components/Alert/SnackBar'
import DialogManager from '../components/Alert/Dialog/DialogManager'
import ErrorIcon from '@material-ui/icons/Error';


const messageTypes = {
    warning: {
        icon: <WarningIcon />,
        style: {
            color: "#fff",
            backgroundColor: yellow[800],
        }
    },
    error: {
        icon: <ErrorIcon />,
        style: {
            color: "#fff",
            backgroundColor: red[500],
        }
    },
    info: {
        icon: <InfoIcon />,
        style: {
            color: "#fff",
            backgroundColor: blue[500],
        }
    },
    success: {
        icon: <CheckCircleIcon />,
        style: {
            color: "#fff",
            backgroundColor: green[500],
        }
    },
}



const NotificationContext = React.createContext({
    dialogs: [],
    alerts: []
})

function NotificationContextProvider({ children }) {
    const [dialogs, setDialogs] = React.useState([])
    const [alerts, setAlerts] = React.useState([])

    const pushSnackBar = React.useCallback((messageProps) => {
        const defaultProps = {
            variant: 'outlined',
            anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
            key: Date.now(),
            elevation: 6,
        }
        const props = Object.assign(defaultProps, messageProps)

        const clonedAlerts = [...alerts]
        clonedAlerts.push(props)
        setAlerts(clonedAlerts)
    }, [alerts])


    const pushDialog = React.useCallback((messageProps) => {
        const clonedDialogs = [...dialogs]
        const { type } = messageProps;
        const { icon, style: titleStyle } = messageTypes[type];
        const mergedProps = Object.assign({ icon, titleStyle }, messageProps);

        clonedDialogs.push(mergedProps)
        setDialogs(clonedDialogs)
    }, [dialogs])

    const pushAsyncDialog = React.useCallback((messageProps) => {
        return new Promise((resolve) => {
            messageProps.handleClose = () => resolve(false)
            messageProps.handleConfirm = () => resolve(true)
            messageProps.hasCloseButton = true
            pushDialog(messageProps)
        })
    }, [pushDialog])


    const popNotification = React.useCallback((messageProps) => {
        const { scheme, ...othersProps } = messageProps
        const strategy = {
            snack: pushSnackBar,
            dialog: pushDialog,
            asyncDialog: pushAsyncDialog,
            default: () => { throw new Error("Invalid Scheme on popNotification") }
        };

        return (strategy[scheme] || strategy['default'])(othersProps)

    }, [pushSnackBar, pushDialog, pushAsyncDialog])


    const handleSnackClose = React.useCallback((key) => {
        const [removedItem, state] = handleClose(key, alerts)

        setAlerts(state)
    }, [alerts])

    const handleDialogClose = React.useCallback((key) => {
        const [removedItem, state] = handleClose(key, dialogs)
        debugger
        setDialogs(state)
    }, [dialogs])

    return (
        <NotificationContext.Provider value={popNotification}>
            {children}
            <DialogManager dialogs={dialogs} handleDialogClose={handleDialogClose} />
            <SnackBarManager alerts={alerts} onSnackClose={handleSnackClose} />
        </NotificationContext.Provider>
    );
}

function handleClose(key, context) {
    const clonedContext = [...context]
    const indexOfElement = clonedContext.findIndex(el => el.key === key)
    const removedItem = clonedContext.splice(indexOfElement, 1)

    return [removedItem, clonedContext]
}


export { NotificationContextProvider, NotificationContext };