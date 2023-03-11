import React from "react";
import bgrestaurant from "../../assets/bgrestaurant001.png";
import avatar from "../../assets/avatar001.png";
import StarPurple500OutlinedIcon from "@mui/icons-material/StarPurple500Outlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import PaidIcon from "@mui/icons-material/Paid";

import * as C from "./styles";

const CardRestaurant = ({ imageSrc, avatarSrc, title, description }) => {
  return (
    <C.CardContainer>
      <C.Image src={bgrestaurant} alt="Imagem do Card" />
      <C.Description>
        <C.Avatar src={avatar} alt="Avatar do autor" />
        <C.Title>
          <strong>Restaurant</strong>
          <p>Comida brasileira</p>
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
  );
};

export default CardRestaurant;
