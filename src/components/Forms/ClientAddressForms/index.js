import React from "react";
import { Grid, Typography } from "@material-ui/core";
import useStyles from "./style";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import MaskedInput from "react-text-mask";
import PropTypes from "prop-types";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "(",
        /[1-9]/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

function ClientAddressForms() {
  const [values, setValues] = React.useState({
    textmask: "(  )     -    ",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const classes = useStyles();

  return (
    <div class={classes.root}>
      <Grid container direction="column">
        <Typography class={classes.typographyStyle}>
          Informe seu Endereço de Entrega:
        </Typography>

        <form noValidate autoComplete="off">
          <Box display="flex" p={1}>
            <TextField
              id="Name"
              label="Nome"
              className={classes.textFieldStyle}
              size="small"
              variant="outlined"
              fullWidth
            />
          </Box>

          <Box display="flex" p={1} direction="column">
            <FormControl>
              <TextField
                id="Telefone"
                label="Telefone"
                className={classes.textFieldStyle}
                size="small"
                variant="outlined"
                InputProps={{
                  inputComponent: TextMaskCustom,
                }}
              />
            </FormControl>
          </Box>

          <Box display="flex" p={1} direction="column">
            <Grid item>
              <TextField
                id="Street"
                label="Rua"
                className={classes.textFieldStyle}
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="number"
                label="Numero"
                className={classes.textFieldStyle}
                variant="outlined"
                size="small"
              />
            </Grid>
          </Box>
          <Box display="flex" p={1}>
            <TextField
              id="
Neighborhood"
              label="Bairro"
              variant="outlined"
              className={classes.textFieldStyle}
              size="small"
              fullWidth
            />
          </Box>
          <Box display="flex" p={1}>
            <TextField
              id="Reference"
              label="Ponto de Referencia"
              variant="outlined"
              className={classes.textFieldStyle}
              size="small"
              fullWidth
            />
          </Box>
          <Box display="flex" p={1}>
            <TextField
              id="
delivery notice"
              label="Observação da Entrega"
              variant="outlined"
              className={classes.textFieldStyle}
              size="small"
              fullWidth
            />
          </Box>
        </form>
        <Box display="flex" p={1}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<CloudUploadIcon />}
            className={classes.buttonStyle}
            fullWidth
          >
            Enviar
          </Button>
        </Box>
      </Grid>
    </div>
  );
}

export default ClientAddressForms;
