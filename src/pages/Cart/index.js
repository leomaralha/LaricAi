import React from "react";
import useStyles from "./style";
import SideMenu from "../../components/SideMenu";
import ItemMenu from "../../components/cards/ItemMenu";

const pic =
  "https://portal.minervafoods.com/files/hamburguer_de_frango_-_blog.jpg";

const dados = [
  {
    pic:pic,
    name: "HAMBURGER",
    description: "(pão, bife caseiro, alface, tomate, batatinha, milho verde)",
    monetaryValue: "R$ 6,00",
  },
  {
    pic:pic,
    name: "CHEESE BURGER",
    description:
      "(pão, bife caseiro, alface, queijo, tomate, batatinha, milho verde)",
    monetaryValue: "R$ 7,00",
  },
  {
    pic:pic,
    name: "EGG BURGER",
    description:
      "(pão, bife caseiro, ovo, alface, tomate, batatinha, milho verde)",
    monetaryValue: "R$ 7,00",
  },
  {
    pic:pic,
    name: "X-TUDO",
    description:
      "(pão, bife caseiro, ovo, queijo, bacon, presunto, alface, tomate, batatinha, milho verde)",
    monetaryValue: "R$ 11,00",
  },
  {
    pic:pic,
    name: "X-CALANGO",
    description:
      "(pão, 2x bife caseiro, ovo, queijo, bacon, presunto, alface, tomate, batatinha, milho verde)",
    monetaryValue: "R$ 13,00",
  },
  {
    pic:pic,
    name: "X-CALANGO",
    description:
      "(pão, 2x bife caseiro, ovo, queijo, bacon, presunto, alface, tomate, batatinha, milho verde)",
    monetaryValue: "R$ 13,00",
  },
  {
    pic:pic,
    name: "X-CALANGO",
    description:
      "(pão, 2x bife caseiro, ovo, queijo, bacon, presunto, alface, tomate, batatinha, milho verde)",
    monetaryValue: "R$ 13,00",
  },
  {
    pic:pic,
    name: "X-CALANGO",
    description:
      "(pão, 2x bife caseiro, ovo, queijo, bacon, presunto, alface, tomate, batatinha, milho verde)",
    monetaryValue: "R$ 13,00",
  },
];

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
