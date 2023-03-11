import styled from "styled-components";

export const ImageContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* Valor baixo para garantir que a imagem fique no fundo */
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
