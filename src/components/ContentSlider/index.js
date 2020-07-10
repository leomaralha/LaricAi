import React from 'react';
import { Box } from '@material-ui/core';
import { SwitchTransition, CSSTransition } from "react-transition-group";
import useStyles from './style';


function Tips({ children, transitionTime = 3000, onClickBack, onClickNext, pause=false }) {
    const classes = useStyles({transitionTime});
    const [activeTip, setActiveTip] = React.useState(0)
    const CSSTransitions = {
        enter: classes["fade-enter"],
        enterActive: classes["fade-enter-active"],
        exit: classes["fade-exit"],
        exitActive: classes["fade-exit-active"],
        enterDone: classes["fade-enter-done"],
        exitDone: classes["fade-exit-done"],
    };

    React.useEffect(() => {
        if(pause) return
        console.log(activeTip, children.length)
        const intervalId = setInterval(() => {
            const shouldIncrement = activeTip + 1 < children.length
            if (shouldIncrement) setActiveTip(activeTip + 1)
            else setActiveTip(0)
        }, transitionTime)

        return () => {
            clearInterval(intervalId);
        }
    }, [activeTip, children, transitionTime, pause])


    return (
        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="center">
            <SwitchTransition mode="out-in">
                <CSSTransition
                    key={`tip-${activeTip}`}
                    classNames={CSSTransitions}
                    timeout={300}
                >
                    {children[activeTip]}
                </CSSTransition>
            </SwitchTransition>
        </Box>
    );
}

export default Tips;

