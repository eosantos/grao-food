import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Button from "../../components/Button";

import * as C from "./styles";

const Products = () => {
  const navigate = useNavigate();

  return (
    <C.Container>
      <Header />

      <C.Title>Products</C.Title>
      <Button Text="Home" onClick={() => [navigate("/home")]}>
        Home
      </Button>
    </C.Container>
  );
};

export default Products;
