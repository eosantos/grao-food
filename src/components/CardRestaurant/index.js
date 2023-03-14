import React from "react";
import StarPurple500OutlinedIcon from "@mui/icons-material/StarPurple500Outlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import PaidIcon from "@mui/icons-material/Paid";
import { useNavigate } from "react-router-dom";

import * as C from "./styles";

const CardRestaurant = ({ restaurants }) => {
  const navigate = useNavigate();
  console.log(restaurants);
  return (
    <div>
      {restaurants &&
        restaurants.map((data) => (
          <C.CardContainer
            key={data.id}
            onClick={() => [navigate("/products")]}
          >
            <C.Image src={data.image} alt="Imagem do Card" />
            <C.Description>
              <C.Avatar src={data.avatar} alt="Avatar do autor" />
              <C.Title>
                <strong>{data.name}</strong>
                <p>{data.description}</p>
              </C.Title>
              <C.Icons>
                <StarPurple500OutlinedIcon />
                <strong>{data.stars}</strong>
                <QueryBuilderOutlinedIcon />
                <strong>{data.deliveryTime}</strong>
                <PaidIcon />
                <strong>{data.deliveryPrice}</strong>
              </C.Icons>
            </C.Description>
          </C.CardContainer>
        ))}
    </div>
  );
};

export default CardRestaurant;
