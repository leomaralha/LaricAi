import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import style from "./style";
import SideMenu from "../../components/SideMenu";
import ItemMenu from "../../components/cards/ItemMenu";

const pic =
  "https://portal.minervafoods.com/files/hamburguer_de_frango_-_blog.jpg";

const dados = [
  {
    pic:
      "https://portal.minervafoods.com/files/hamburguer_de_frango_-_blog.jpg",
    name: "HAMBURGER",
    description: "(pão, bife caseiro, alface, tomate, batatinha, milho verde)",
    monetaryValue: "R$ 6,00",
  },
  {
    pic:
      "https://portal.minervafoods.com/files/hamburguer_de_frango_-_blog.jpg",
    name: "CHEESE BURGER",
    description:
      "(pão, bife caseiro, alface, queijo, tomate, batatinha, milho verde)",
    monetaryValue: "R$ 7,00",
  },
  {
    pic:
      "https://portal.minervafoods.com/files/hamburguer_de_frango_-_blog.jpg",
    name: "EGG BURGER",
    description:
      "(pão, bife caseiro, ovo, alface, tomate, batatinha, milho verde)",
    monetaryValue: "R$ 7,00",
  },
  {
    pic:
      "https://portal.minervafoods.com/files/hamburguer_de_frango_-_blog.jpg",
    name: "X-TUDO",
    description:
      "(pão, bife caseiro, ovo, queijo, bacon, presunto, alface, tomate, batatinha, milho verde)",
    monetaryValue: "R$ 11,00",
  },
  {
    pic:
      "https://portal.minervafoods.com/files/hamburguer_de_frango_-_blog.jpg",
    name: "X-CALANGO",
    description:
      "(pão, 2x bife caseiro, ovo, queijo, bacon, presunto, alface, tomate, batatinha, milho verde)",
    monetaryValue: "R$ 13,00",
  },
  {
    pic:
      "https://portal.minervafoods.com/files/hamburguer_de_frango_-_blog.jpg",
    name: "X-CALANGO",
    description:
      "(pão, 2x bife caseiro, ovo, queijo, bacon, presunto, alface, tomate, batatinha, milho verde)",
    monetaryValue: "R$ 13,00",
  },
  {
    pic:
      "https://portal.minervafoods.com/files/hamburguer_de_frango_-_blog.jpg",
    name: "X-CALANGO",
    description:
      "(pão, 2x bife caseiro, ovo, queijo, bacon, presunto, alface, tomate, batatinha, milho verde)",
    monetaryValue: "R$ 13,00",
  },
  {
    pic:
      "https://portal.minervafoods.com/files/hamburguer_de_frango_-_blog.jpg",
    name: "X-CALANGO",
    description:
      "(pão, 2x bife caseiro, ovo, queijo, bacon, presunto, alface, tomate, batatinha, milho verde)",
    monetaryValue: "R$ 13,00",
  },
];

const useStyles = makeStyles(style);
function Cart() {
  const [searchText, setSearchText] = React.useState("");
  const classes = useStyles();

  function mapDataToCard(cardData, index) {
    return (
      <ItemMenu
        imgUrl={cardData.pic}
        name={cardData.name}
        description={cardData.description}
        monetaryValue={cardData.monetaryValue}
        key={index}
      />
    );
  }
  return (
    <>
      <SideMenu
        onSearchFieldChange={setSearchText}
        searchFieldValue={searchText}
      />
      {dados.map(mapDataToCard)}
    </>
  );
}
export default Cart;
