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
import ProductDescription from "../cards/ProductDescription";

const Produtos = [
  {
    pic:
      "https://i.pinimg.com/736x/b3/e0/a5/b3e0a5678eccd90997a85adb6bbcbbfc.jpg",
    name: "Pote 300ML",
    description: "(2 Sabores + 4 Acompanhamento)",
    value: "R$ 8,00",
    Acompanhamentos: [
      {
        name: "Amendoin",
        id: 0,
      },
      {
        name: "Granola",
        id: 1,
      },
      {
        name: "Leite em pó",
        id: 2,
      },
      {
        name: "Paçoca",
        id: 3,
      },
      {
        name: "Ovomaltine",
        id: 4,
      },
      {
        name: "Coco Ralado",
        id: 5,
      },
      {
        name: "Flocos de Arroz",
        id: 6,
      },
      {
        name: "Aveia em Flocos",
        id: 7,
      },
    ],
    Caldas: [
      {
        name: "Leite Condesado",
        id: 8,
      },
      {
        name: "Calda de Morango",
        id: 9,
      },
      {
        name: "Calda de Caramelo",
        id: 10,
      },
      {
        name: "Calda de Chocolate",
        id: 11,
      },
    ],

    Frutas: [
      {
        name: "Banana",
        id: 12,
      },
      {
        name: "Kiwi",
        id: 13,
      },
      {
        name: "Manga",
        id: 14,
      },
      {
        name: "Uva",
        id: 15,
      },
    ],
  },
  {
    pic:
      "https://i.pinimg.com/736x/b3/e0/a5/b3e0a5678eccd90997a85adb6bbcbbfc.jpg",
    name: "Pote 500ML",
    description: "(2 Sabores + 5 Acompanhamento)",
    value: "R$ 10,00",
    Acompanhamentos: [
      {
        name: "Amendoin",
        id: 0,
      },
      {
        name: "Granola",
        id: 1,
      },
      {
        name: "Leite em pó",
        id: 2,
      },
      {
        name: "Paçoca",
        id: 3,
      },
      {
        name: "Ovomaltine",
        id: 4,
      },
      {
        name: "Coco Ralado",
        id: 5,
      },
      {
        name: "Flocos de Arroz",
        id: 6,
      },
      {
        name: "Aveia em Flocos",
        id: 7,
      },
    ],
    Caldas: [
      {
        name: "Leite Condesado",
        id: 8,
      },
      {
        name: "Calda de Morango",
        id: 9,
      },
      {
        name: "Calda de Caramelo",
        id: 10,
      },
      {
        name: "Calda de Chocolate",
        id: 11,
      },
    ],

    Frutas: [
      {
        name: "Banana",
        id: 12,
      },
      {
        name: "Kiwi",
        id: 13,
      },
      {
        name: "Manga",
        id: 14,
      },
      {
        name: "Uva",
        id: 15,
      },
    ],
  },
  {
    pic:
      "https://i.pinimg.com/736x/b3/e0/a5/b3e0a5678eccd90997a85adb6bbcbbfc.jpg",
    name: "Pote 700ML",
    description: "(3 Sabores + 6 Acompanhamento)",
    value: "R$ 12,00",
    Acompanhamentos: [
      {
        name: "Amendoin",
        id: 0,
      },
      {
        name: "Granola",
        id: 1,
      },
      {
        name: "Leite em pó",
        id: 2,
      },
      {
        name: "Paçoca",
        id: 3,
      },
      {
        name: "Ovomaltine",
        id: 4,
      },
      {
        name: "Coco Ralado",
        id: 5,
      },
      {
        name: "Flocos de Arroz",
        id: 6,
      },
      {
        name: "Aveia em Flocos",
        id: 7,
      },
    ],
    Caldas: [
      {
        name: "Leite Condesado",
        id: 8,
      },
      {
        name: "Calda de Morango",
        id: 9,
      },
      {
        name: "Calda de Caramelo",
        id: 10,
      },
      {
        name: "Calda de Chocolate",
        id: 11,
      },
    ],

    Frutas: [
      {
        name: "Banana",
        id: 12,
      },
      {
        name: "Kiwi",
        id: 13,
      },
      {
        name: "Manga",
        id: 14,
      },
      {
        name: "Uva",
        id: 15,
      },
    ],
  },
  {
    pic:
      "https://i.pinimg.com/736x/b3/e0/a5/b3e0a5678eccd90997a85adb6bbcbbfc.jpg",
    name: "Pote 800ML",
    description: "(4 Sabores + 8 Acompanhamento )",
    value: "R$ 15,00",
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
    ],
  },
  {
    pic:
      "https://i.pinimg.com/736x/b3/e0/a5/b3e0a5678eccd90997a85adb6bbcbbfc.jpg",
    name: "Pote 1000ML",
    description: "(4 Sabores + 10 Acompanhamento)",
    value: "R$ 18,00",
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
    ],
  },
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function TabBodyAcai({ filter }) {
  const classes = useStyles();
  const [isLoading, setLoading] = React.useState(true);
  const [dialogState, setDialogState] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [amount, setAmount] = React.useState(0);

  const handleClickCard = (index) => {
    const selected = products[index];
    setDialogState(true);
    setSelectedProduct(selected);
  };

  const handleDialogClose = () => setDialogState(false);

  const fetchData = async () => {
    const data = await fakeFetch(Produtos);
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
            monetaryValue={cardData.value}
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
          <DialogHeader onClose={handleDialogClose} title="Personalização" />
          <ProductDescription
          img={selectedProduct.pic}
          type = {selectedProduct.name}
          />
          
        </Dialog>
      )}
      <Backdrop open={isLoading} className={classes.backdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default TabBodyAcai;
