import React from "react";
import * as C from "./styles";
import background from "../../assets/background.jpg";

const FullScreenImage = () => {
  return (
    <C.ImageContainer>
      <C.Image src={background} alt="Descrição da imagem" />
    </C.ImageContainer>
  );
};

export default FullScreenImage;
