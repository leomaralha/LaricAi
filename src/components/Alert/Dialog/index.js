import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import PropTypes from 'prop-types'


/** Componente que renderiza um único dialog, tendo suas props como principal fonte de dados. 
 * Apesar de ter acesso ao contexto que disponibiliza os styles e tipos existentes para diferentes renderizações desse componente */
export default function InteractionDialog(props) {
    const dialogStyle = props.dialogTitleClass ? {} : props.titleStyle
    const actionBarStyle = props.reverseActionButtons ? { flexDirection: 'row-reverse', justifyContent: 'flex-start' } : {}
    debugger;
    return (
        <Dialog
            fullWidth={props.fullWidth}
            maxWidth={props.maxWidth}
            disableBackdropClick={props.disableBackdropClick}
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="message-dialog-title"
            aria-describedby="message-dialog-description"
        >
            {
                props.title &&
                <DialogTitle
                    id="message-dialog-title"
                    className={props.dialogTitleClass || ''}
                    style={dialogStyle}
                >
                    {props.icon}
                    <span>&nbsp;</span>
                    {props.title}
                </DialogTitle>
            }
            <DialogContent>
                {
                    typeof props.message === "object"
                        ?
                        props.message
                        :
                        <DialogContentText id="message-dialog-description">
                            {props.message}
                        </DialogContentText>
                }

            </DialogContent>

            {
                props.dialogActions ?
                    props.dialogActions
                    :
                    <DialogActions style={actionBarStyle}>
                        <Button onClick={props.handleConfirm} color="primary" autoFocus>
                            {props.okText}
                        </Button>
                        {
                            props.hasCloseButton &&
                            <Button onClick={props.handleClose} color="primary">
                                {props.cancelText}
                            </Button>
                        }
                    </DialogActions>
            }
        </Dialog>
    );
}


InteractionDialog.propTypes = {
    icon: PropTypes.node,
    open: PropTypes.bool,
    type: PropTypes.string,
    okText: PropTypes.string,
    fullWidth: PropTypes.bool,
    handleClose: PropTypes.func,
    cancelText: PropTypes.string,
    handleConfirm: PropTypes.func,
    hasCloseButton: PropTypes.bool,
    dialogActions: PropTypes.element,
    dialogTitleClass: PropTypes.string,
    disableBackdropClick: PropTypes.bool,
    reverseActionButtons: PropTypes.bool,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    message: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
}

InteractionDialog.defaultProps = {
    okText: 'Ok',
    cancelText: 'Cancelar',
    hasCloseButton: false,
    disableBackdropClick: true,
    reverseActionButtons: true,
    maxWidth: 'md',
    fullWidth: false,
}