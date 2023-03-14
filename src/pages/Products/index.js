import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Button from "../../components/Button";
import CardRestaurantProduct from "../../components/CardRestaurantProduct";
import ProductCard from "../../components/ProductCard";

import * as C from "./styles";

const Products = ({ products }) => {
  const navigate = useNavigate();

  return (
    <C.Container>
      <Header />
      <CardRestaurantProduct />
      <h4>Pratos</h4>
      <ProductCard
        imageUrl="https://www.sabornamesa.com.br/media/k2/items/cache/c910db2cadeb7dd44121f01e6d7b155d_XL.jpg"
        title="Strogonof"
        description="Carne, Arroz, Feijão, Batata Frita"
        price="R$ 18,99"
        products={products}
      />

      <h4>Bebidas</h4>
      <ProductCard
        imageUrl="https://riomarrecife.com.br/recife/2019/09/CIA-142.jpg"
        title="Água"
        price="R$ 3,99"
      />
      <C.Title>Products</C.Title>
      <Button Text="Home" onClick={() => [navigate("/home")]}>
        Home
      </Button>
    </C.Container>
  );
};

export default Products;
