import React from "react";
import * as C from "./styles";

const ProductCard = ({ imageUrl, title, description, price }) => {
  return (
    <C.CardContainer>
      <C.CardImage src={imageUrl} alt={title} />
      <C.CardBody>
        <C.CardTitle>{title}</C.CardTitle>
        <C.CardDescription>{description}</C.CardDescription>
        <C.CardPrice>{price}</C.CardPrice>
      </C.CardBody>
    </C.CardContainer>
  );
};

export default ProductCard;
