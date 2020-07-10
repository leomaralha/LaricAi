import React from 'react';
import { Grid, Button } from '@material-ui/core';
import useStyles from './style';
import Tips from "../../components/ContentSlider"
import HelperCard from '../../components/cards/Tips'
import { NotificationContext } from '../../contexts/NotificationContext'

let somatorio = 0
function Test() {
    const classes = useStyles();
    const popNotify = React.useContext(NotificationContext)

    const handleClick = async () => {
        const resp = await popNotify({
            okText: "Claro!",
            scheme: 'asyncDialog',
            title: "OOopa, tudubom?",
            cancelText: "Não, obvio.",
            type: getType(somatorio),
            message: 'teste' + somatorio,
        })
        somatorio++
        console.log(resp);
        return resp
    }


    const handleClickSnack = async () => {
        popNotify({
            scheme: 'snack',
            title: "OOopa, tudubom?",
            type: getType(somatorio),
        })
        somatorio++
    }
    return (
        <Grid container>
            <Tips >
                <HelperCard primaryText="Somente Teste {1}" secondaryText="secondary textttt juts testing the card only that" ></HelperCard >
                <HelperCard primaryText="Somente Teste {2}" secondaryText="secondary textttt juts testing the card only that" ></HelperCard >
                <HelperCard primaryText="Somente Teste {3}" secondaryText="secondary textttt juts testing the card only that" ></HelperCard >
                <HelperCard primaryText="Somente Teste {4}" secondaryText="secondary textttt juts testing the card only that" ></HelperCard >
            </Tips>
            <Button variant="outlined" onClick={handleClick}>
                Pop notification
            </Button>
            <Button  variant="outlined"onClick={handleClickSnack}>
                Pop notification Snack
            </Button>
        </Grid>
    );
}
function getType(n) {
    if(n%4 === 0) return "success"
    if(n%3 === 0) return "error"
    if(n%2 === 0) return "info"
    if(n%1 === 0) return "warning"
}

export default Test;