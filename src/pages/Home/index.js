import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import CardRestaurant from "../../components/CardRestaurant";
import Button from "../../components/Button";
import Search from "../../components/Search";
import useAuth from "../../hooks/useAuth";
import restaurants from "../../utils/dataRestaurant";

import * as C from "./styles";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const handleSearch = (searchTerm) => {
    // Execute a busca com o termo de pesquisa
    console.log(`Buscando por: ${searchTerm}`);
    const search = restaurants.filter(
      (restaurant) => restaurant.name === searchTerm
    );
    console.log(search);
    setData(
      restaurants.filter((restaurant) => restaurant.name.includes(searchTerm))
    );
  };

  const redirectProduct = (e) => {
    console.log(e);
    navigate("/products.id");
  };

  if (data.length === 0) {
    setData(restaurants);
  }

  return (
    <C.Container>
      <Header />
      <Search onSearch={handleSearch} />

      <CardRestaurant
        title="Título do Card"
        description="Descrição do Card"
        restaurants={data}
        onClick={() => [redirectProduct("/products.id")]}
      />

      {/* <C.Title>Home</C.Title>
      <Button
        Text="Products"
        onClick={() => {
          redirectProduct();
        }}
      >
        Products
      </Button> */}
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </C.Container>
  );
};

export default Home;
