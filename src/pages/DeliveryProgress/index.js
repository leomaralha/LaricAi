import React from "react";
import {
  Grid,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
} from "@material-ui/core";
import useStyles from "./style";
import SideMenu from "../../components/SideMenu";
import StepperIcons from "../../components/Stepper/StepperIcons";
import StepperConnector from "../../components/Stepper/StepperConnector";
import Box from "@material-ui/core/Box";
import clsx from "clsx";

function DeliveryProgressPage() {
  const [activeStep, setActiveStep] = React.useState(1);
  const classes = useStyles();
  const steps = ["Aprovação", "Preparo", "Entrega", "Finalizado"];

  const handleNext = React.useCallback(() => {
    setActiveStep((prevActiveStep) => {
      if (prevActiveStep + 1 <= 4) return prevActiveStep + 1;
      return prevActiveStep;
    });
  });

  const handleBack = React.useCallback(() => {
    setActiveStep((prevActiveStep) => {
      if (prevActiveStep - 1 >= 0) return prevActiveStep - 1;
      return prevActiveStep;
    });
  });

  const handleReset = React.useCallback(() => {
    setActiveStep(0);
  });

  function getStatusDescription(index) {
    const description = {
      0: "Nossa atendente está validando os pedidos, em breve será a sua vez 😀",
      1: "Seu pedido está sendo preparado!!",
      2: "Seu pedido saiu para a entrega.",
      3: "Nos avise quando receber seu pedido.",
      4: "Aproveite seu lanche ^-^",
    };

    return description[String(index)];
  }

  function getStatus(index) {
    if (index == 4)
      return (
        <Typography
          className={clsx(classes.overline, {
            [classes.textCompleted]: true,
          })}
        >
          Status: Entregue
        </Typography>
      );

    return (
      <Typography className={classes.overline}>Status: Pendente</Typography>
    );
  }

  return (
    <>
      <SideMenu onSearchFieldChange searchFieldValue />
      <div className={classes.rootContainer}>
        <Grid container>
          <Grid item xs={12}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="flex-start"
            >
              <Typography className={classes.heading}>
                Pedido Enviado
              </Typography>
              <Typography className={classes.textBody}>
                Seu pedido foi computado, agora você só precisa acompanhar o
                andamento da aceitação e entrega.
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.root}>
              <Stepper
                alternativeLabel
                activeStep={activeStep}
                connector={<StepperConnector />}
              >
                {steps.map((label, index) => (
                  <Step key={label}>
                    <StepLabel StepIconComponent={StepperIcons}>
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="center" alignItems="flex-start">
              <Box
                mt="40px"
                width="100%"
                padding="8px"
                bgcolor="#f6f6f6"
                p="12px"
              >
                {getStatus(activeStep)}
                <Typography className={classes.heading}>
                  {steps[activeStep]}
                </Typography>
                <Typography className={classes.textBody}>
                  {getStatusDescription(activeStep)}
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container></Grid>
          </Grid>
        </Grid>
        <Button onClick={handleBack}>Back</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </>
  );
}

export default DeliveryProgressPage;
