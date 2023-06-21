import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 110vh;
  gap: 20px;
`;

export const Title = styled.h2`
  align-self: baseline;
  margin-left: 30px;
  font-size: 16px;
`;

export const CarouselWrapper = styled.div`
  display: flex;
  .slick-slide {
    padding: 0 10px;
  }
`;
