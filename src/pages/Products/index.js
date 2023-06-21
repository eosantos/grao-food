import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Button from "../../components/Button";
import CardRestaurantProduct from "../../components/CardRestaurantProduct";
import ProductCard from "../../components/ProductCard";
//import Slider from "react-slick";

import * as C from "./styles";

const Products = ({ restaurants, products }) => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  // };

  const navigate = useNavigate();

  // const [data, setData] = useState([]);
  // console.log(data.restaurants);

  // const [product, setProduct] = useState([]);

  // setProduct(
  //   //console.log(product);
  //   products.filter((product) => product.nameProduct.includes(product))
  // );

  // const redirectProduct = (e) => {
  //   console.log(e);
  //   navigate("/products");
  // };

  // if (data.length === data.id) {
  //   setData(restaurants);
  // }

  return (
    <C.Container>
      <Header />
      <CardRestaurantProduct />

      <C.Title>Pratos</C.Title>
      {/* <C.CarouselWrapper>
        <Slider {...settings}> */}
      <ProductCard
        imageUrl="https://www.sabornamesa.com.br/media/k2/items/cache/c910db2cadeb7dd44121f01e6d7b155d_XL.jpg"
        title="Strogonof"
        description="Carne, Arroz, Feijão, Batata Frita"
        price="R$ 18,99"
      />
      {/* </Slider>
      </C.CarouselWrapper> */}
      <C.Title>Bebidas</C.Title>
      <ProductCard
        imageUrl="https://riomarrecife.com.br/recife/2019/09/CIA-142.jpg"
        title="Água"
        price="R$ 3,99"
      />
      {/* <C.Title>Products</C.Title> */}
      <Button Text="Voltar" onClick={() => [navigate("/home")]}>
        Voltar
      </Button>
    </C.Container>
  );
};

export default Products;
