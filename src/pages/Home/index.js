import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import CardRestaurant from "../../components/CardRestaurant";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";

import * as C from "./styles";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <Header />
      <CardRestaurant
        imageSrc="https://picsum.photos/300/200"
        avatarSrc="https://picsum.photos/64"
        title="Título do Card"
        description="Descrição do Card"
      />
      <C.Title>Home</C.Title>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </C.Container>
  );
};

export default Home;
