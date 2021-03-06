import React from "react";
import { Grid, Dialog, Typography } from "@material-ui/core";
import useStyles from "./style";
import ItemMenu from "../../components/cards/ItemMenu";
import { fakeFetch } from "../../utils/fakeFetch";
import { Backdrop } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import DialogHeader from "../../components/cards/DialogHeader";
import ProductDetailsForm from "../../components/Forms/ProductDetailsForm";
import CircularProgress from "@material-ui/core/CircularProgress";
import FooterAddCart from "../../components/Footers/FooterAddCart";

const FILTERED_MOCK = [
  {
    pic:
      "https://portal.minervafoods.com/files/hamburguer_de_frango_-_blog.jpg",
    name: "HAMBURGER",
    description: "(pão, bife caseiro, alface, tomate, batatinha, milho verde pão, bife caseiro, alface, tomate, batatinha, milho verde)",
    value: "R$ 6,00",
    increments: [
      {
        name: "Bacon",
        id: 0,
        value: "4.00",
      },
      {
        name: "Bacon",
        id: 1,
        value: "4.00",
      },
      {
        name: "Bacon",
        id: 2,
        value: "4.00",
      },
      {
        name: "Bacon",
        id: 3,
        value: "4.00",
      },
      {
        name: "Bacon",
        id: 4,
        value: "4.00",
      },
      {
        name: "Bacon",
        id: 5,
        value: "4.00",
      },
      {
        name: "Bacon",
        id: 6,
        value: "4.00",
      },
      {
        name: "Bacon",
        id: 7,
        value: "4.00",
      },
      {
        name: "Bacon",
        id: 8,
        value: "4.00",
      },
      {
        name: "Bacon",
        id: 9,
        value: "4.00",
      },
      {
        name: "Bacon",
        id: 10,
        value: "4.00",
      },
      {
        name: "Bacon",
        id: 11,
        value: "4.00",
      },
      {
        name: "Bacon",
        id: 12,
        value: "4.00",
      },
      {
        name: "Bacon",
        id: 13,
        value: "4.00",
      },
      {
        name: "Bacon",
        id: 14,
        value: "4.00",
      },
      {
        name: "Bacon",
        id: 15,
        value: "4.00",
      },
      {
        name: "Bacon",
        id: 16,
        value: "4.00",
      },
      {
        name: "Bacon",
        id: 17,
        value: "4.00",
      },
      {
        name: "Bacon",
        id: 18,
        value: "4.00",
      },
      {
        name: "Bacon",
        id: 19,
        value: "4.00",
      },
      {
        name: "Bacon",
        id: 20,
        value: "4.00",
      },
      {
        name: "Bacon",
        id: 21,
        value: "4.00",
      },
      {
        name: "Bacon",
        id: 22,
        value: "4.00",
      },
    ],
    ingredients: [
      {
        name: "Bacon",
        id: 0,
        value:"2,00"
      },
      {
        name: "Bacon",
        id: 1,
        value: "4.00",
      },
      {
        name: "Bacon",
        id: 2,
        value: "4.00",
      },
      {
        name: "Bacon",
        id: 3,
        value: "4.00",
      },
      {
        name: "Bacon",
        id: 4,
        value: "4.00",
      },
      {
        name: "Bacon",
        id: 5,
        value: "4.00",
      },
      {
        name: "Bacon",
        id: 6,
        value: "4.00",
      },
      {
        name: "Bacon",
        id: 7,
        value: "4.00",
      },
      {
        name: "Bacon",
        id: 8,
        value: "4.00",
      },
      {
        name: "Bacon",
        id: 9,
        value: "4.00",
      },
      {
        name: "Bacon",
        id: 10,
        value: "4.00",
      },
      {
        name: "Bacon",
        id: 11,
        value: "4.00",
      },
      {
        name: "Bacon",
        id: 12,
        value: "4.00",
      },
      {
        name: "Bacon",
        id: 13,
        value: "4.00",
      },
      {
        name: "Bacon",
        id: 14,
        value: "4.00",
      },
      {
        name: "Bacon",
        id: 15,
        value: "4.00",
      },
    ],
  },
  {
    pic:
      "https://portal.minervafoods.com/files/hamburguer_de_frango_-_blog.jpg",
    name: "CHEESE BURGER",
    description:
      "(pão, bife caseiro, alface, queijo, tomate, batatinha, milho verde)",
    value: "R$ 7,00",
    increments: [
      {
        name: "Bacon",
        id: 2,
        value: "4.00",
      },
    ],
    ingredients: [
      {
        name: "Bacon",
        id: 2,
      },
    ],
  },
  {
    pic:
      "https://portal.minervafoods.com/files/hamburguer_de_frango_-_blog.jpg",
    name: "EGG BURGER",
    description:
      "(pão, bife caseiro, ovo, alface, tomate, batatinha, milho verde)",
    value: "R$ 7,00",
    increments: [
      {
        name: "Bacon",
        id: 3,
        value: "4.00",
      },
    ],
    ingredients: [
      {
        name: "Bacon",
        id: 3,
      },
    ],
  },
  {
    pic:
      "https://portal.minervafoods.com/files/hamburguer_de_frango_-_blog.jpg",
    name: "X-TUDO",
    description:
      "(pão, bife caseiro, ovo, queijo, bacon, presunto, alface, tomate, batatinha, milho verde)",
    value: "R$ 11,00",
    increments: [
      {
        name: "Bacon",
        id: 4,
        value: "4.00",
      },
    ],
    ingredients: [
      {
        name: "Bacon",
        id: 4,
      },
    ],
  },
  {
    pic:
      "https://portal.minervafoods.com/files/hamburguer_de_frango_-_blog.jpg",
    name: "X-CALANGO",
    description:
      "(pão, 2x bife caseiro, ovo, queijo, bacon, presunto, alface, tomate, batatinha, milho verde)",
    value: "R$ 13,00",
    increments: [
      {
        name: "Bacon",
        id: 5,
        value: "4.00",
      },
    ],
    ingredients: [
      {
        name: "Bacon",
        id: 5,
      },
    ],
  },
  {
    pic:
      "https://portal.minervafoods.com/files/hamburguer_de_frango_-_blog.jpg",
    name: "X-CALANGO",
    description:
      "(pão, 2x bife caseiro, ovo, queijo, bacon, presunto, alface, tomate, batatinha, milho verde)",
    value: "R$ 13,00",
    increments: [
      {
        name: "Bacon",
        id: 6,
        value: "4.00",
      },
    ],
    ingredients: [
      {
        name: "Bacon",
        id: 6,
      },
    ],
  },
  {
    pic:
      "https://portal.minervafoods.com/files/hamburguer_de_frango_-_blog.jpg",
    name: "X-CALANGO",
    description:
      "(pão, 2x bife caseiro, ovo, queijo, bacon, presunto, alface, tomate, batatinha, milho verde)",
    value: "R$ 13,00",
    increments: [
      {
        name: "Bacon",
        id: 7,
        value: "4.00",
      },
    ],
    ingredients: [
      {
        name: "Bacon",
        id: 7,
      },
    ],
  },
  {
    pic:
      "https://portal.minervafoods.com/files/hamburguer_de_frango_-_blog.jpg",
    name: "X-CALANGO",
    description:
      "(pão, 2x bife caseiro, ovo, queijo, bacon, presunto, alface, tomate, batatinha, milho verde)",
    value: "R$ 13,00",
    increments: [
      {
        name: "Bacon",
        id: 8,
        value: "4.00",
      },
    ],
    ingredients: [
      {
        name: "Bacon",
        id: 8,
      },
    ],
  },
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function TabBodyFilter({ filter }) {
  const classes = useStyles();
  const [isLoading, setLoading] = React.useState(true);
  const [dialogState, setDialogState] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [amount, setAmount] = React.useState(0);

  const handleChange = (qtd) => {
    setAmount(qtd);   
  };
  const handleClickCard = (index) => {
    const selected = products[index];
    setDialogState(true);
    setSelectedProduct(selected);
  };

  const handleDialogClose = () => setDialogState(false);

  const fetchData = async () => {
    const data = await fakeFetch(FILTERED_MOCK);
    setProducts(data);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const getroductCategories = (product) => {
    const { increments, ingredients } = product;
    return { Incrementos: increments, Ingredientes: ingredients };
  };
  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center">
        {products.map((cardData, index) => (
          <ItemMenu
            imgUrl={cardData.pic}
            name={cardData.name}
            description={cardData.description}
            monetaryValue={cardData.monetaryValue}
            key={index}
            index={index}
            onClick={handleClickCard}
          />
        ))}
      </Grid>

      {selectedProduct && (
        <Dialog
          open={dialogState}
          fullScreen
          onClose={handleDialogClose}
          TransitionComponent={Transition}
        >
          <DialogHeader
            onClose={handleDialogClose}
            title="Detalhes do pedido"
          />
          <ProductDetailsForm
            name={selectedProduct.name}
            value={selectedProduct.value}
            imgSrc={selectedProduct.pic}
            onChange={handleChange}
            categories={getroductCategories(selectedProduct)}
            description={selectedProduct.description}
          />

          <FooterAddCart
          value = {amount} 
          />
        </Dialog>
      )}
      <Backdrop open={isLoading} className={classes.backdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default TabBodyFilter;
