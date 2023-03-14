import React from "react";
import StarPurple500OutlinedIcon from "@mui/icons-material/StarPurple500Outlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import PaidIcon from "@mui/icons-material/Paid";
import { useNavigate } from "react-router-dom";

import * as C from "./styles";

const CardRestaurant = ({ restaurants, redirectProduct }) => {
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
                <strong>{data.restaurante}</strong>
                <p>{data.description}</p>
              </C.Title>

              <C.Icons>
                <StarPurple500OutlinedIcon />
                <strong>4,0</strong>
                <QueryBuilderOutlinedIcon />
                <strong>30 - 40min</strong>
                <PaidIcon />
                <strong>R$ 7,99</strong>
              </C.Icons>
            </C.Description>
          </C.CardContainer>
        ))}
    </div>
  );
};

export default CardRestaurant;
