import React from 'react';
import InteractionDialog from './index'

function DialogManager({ dialogs, handleDialogClose }) {

    function actionWrapper(action, key) {
        return async () => {
            action && await action()
            handleDialogClose(key)
        }
    }
    return (
        <>
            {
                dialogs.map(dialogInfo => {
                    const { handleClose, handleConfirm, ...otherProps } = dialogInfo
                    const key = dialogInfo.key
                    const warppedHandleClose = actionWrapper(handleClose, key)
                    const warppedHandleConfirm = actionWrapper(handleConfirm, key)

                    return <InteractionDialog
                        key={`${dialogInfo.key}-dialog`}
                        open={true}
                        handleClose={warppedHandleClose}
                        handleConfirm={warppedHandleConfirm}
                        {...otherProps}
                    />
                })
            }
        </>
    );
}

export default DialogManager;