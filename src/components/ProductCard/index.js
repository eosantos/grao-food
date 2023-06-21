import React from "react";
import * as C from "./styles";
//import { useNavigate } from "react-router-dom";

const ProductCard = ({ imageUrl, title, description, price, restaurants }) => {
  //const navigate = useNavigate();
  console.log(restaurants);
  return (
    <div>
      {/* {restaurants &&
        restaurants.map((data) => ( */}
      <C.CardContainer>
        <C.CardImage src={imageUrl} alt={title} />
        <C.CardBody>
          <C.CardTitle>{title}</C.CardTitle>
          <C.CardDescription>{description}</C.CardDescription>
          <C.CardPrice>{price}</C.CardPrice>
        </C.CardBody>
        {/* <C.CardImage src={data.imageProduct} alt={"Imagem do Produto"} />
            <C.CardBody>
              <C.CardTitle>{data.id}</C.CardTitle>
              <C.CardDescription>{data.nameProduct}</C.CardDescription>
              <C.CardPrice>{data.priceProduct}</C.CardPrice>
            </C.CardBody> */}
      </C.CardContainer>
      {/* ))} */}
    </div>
  );
};

export default ProductCard;
