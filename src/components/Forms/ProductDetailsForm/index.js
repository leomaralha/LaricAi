import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import useStyles from "./style";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import IncremetsCard from "../../cards/IncrementCard";
const DEFAULT_IMAGE =
  "https://static.carrefour.com.br/medias/sys_master/images/images/h10/h46/h00/h00/12175673655326.jpg";

function ProductFormDetails({
  name,
  value,
  imgSrc,
  categories,
  description,
  onChange,
}) {
  const classes = useStyles();
  const [amount, setAmount] = React.useState({});
  const [total, setTotal] = React.useState(0);

  const onAdd = (category, id) => {
    return () => {
      const cloned = { ...amount };
      const stringFiedId = String(id);
      if (!cloned[category]) cloned[category] = {};
      if (!cloned[category][stringFiedId]) cloned[category][stringFiedId] = 0;

      cloned[category][stringFiedId]++;
      setAmount(cloned);
    };
  };

  const onRemove = (category, id) => {
    return () => {
      const cloned = { ...amount };
      const stringFiedId = String(id);
      if (!cloned[category]) cloned[category] = {};
      if (!cloned[category][stringFiedId]) cloned[category][stringFiedId] = 0;

      if (cloned[category][stringFiedId] - 1 >= 0) {
        cloned[category][stringFiedId]--;
      } else {
        return;
      }
      setAmount(cloned);
    };
  };

  const getAmount = (category, id) => {
    const cloned = { ...amount };
    const stringFiedId = String(id);
    if (cloned[category] && cloned[category][stringFiedId])
      return cloned[category][stringFiedId];
    return 0;
  };

  let somatorio = 0; 
  //Nao tava fazendo o somatorio para ingredientes,ai fiz algumas mudanças e agora está FUNCIONAL para os dois
  //Tem modo melhor? acredito que sim
  //Mais ainda vou descobri-lo
  //Obs by:Devair

  React.useEffect(() => {
    if (!amount.Incrementos) {
      return;
    }

    for (const key in amount.Incrementos) {
      const increment = categories.Incrementos.find(
        (increment) => key == increment.id
      );
      const incrementAmount = amount.Incrementos[key];
      const parsedValue = parseFloat(increment.value);
      const total = parsedValue * incrementAmount;
      somatorio += total;
    }

    onChange(somatorio);
    setTotal(somatorio);
  }, [amount]);

  React.useEffect(() => {
    if (!amount.Ingredientes) {
      return;
    }

    for (const key in amount.Ingredientes) {
      const increment = categories.Ingredientes.find(
        (increment) => key == increment.id
      );
      const incrementAmount = amount.Ingredientes[key];
      const parsedValue = parseFloat(increment.value);
      const total = parsedValue * incrementAmount;
      somatorio += total;
    }

    onChange(somatorio);
    setTotal(somatorio);
  }, [amount]);

  return (
    <Grid
      container
      className={classes.root}
      justify="center"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Box className={classes.imageContainer}>
          <img
            alt="Foto do produto"
            src={imgSrc || DEFAULT_IMAGE}
            className={classes.image}
          />
        </Box>
      </Grid>

      <Grid item xs={12} className={classes.infoContainer}>
        <Grid container direction="column">
          <Typography className={classes.name}>{name}</Typography>
          <Typography className={classes.description}>{description}</Typography>
          <Typography className={classes.monetaryValue}>{value}</Typography>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container direction="column" spacing={1}>
          <List className={classes.listRoot} subheader={<li />}>
            {Object.keys(categories).map((categoryName) => (
              <li
                key={`section-${categoryName}`}
                className={classes.listSection}
              >
                <ul className={classes.ul}>
                  <ListSubheader>
                    <div className={classes.listSubheader}>
                      <Typography className={classes.ListHeader}>
                        {categoryName}
                      </Typography>
                    </div>
                  </ListSubheader>
                  {categories[categoryName].map((item, index) => (
                    <IncremetsCard
                      key={`item-${categoryName}-${item.name}`}
                      value={item.value}
                      onAdd={onAdd(categoryName, item.id)}
                      amount={getAmount(categoryName, index)}
                      onRemove={onRemove(categoryName, item.id)}
                      productName={item.name}
                    />
                  ))}
                </ul>
              </li>
            ))}
          </List>
        </Grid>
      </Grid>
    </Grid>
  );
}

ProductFormDetails.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  increments: PropTypes.array,
  categories: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

export default ProductFormDetails;
