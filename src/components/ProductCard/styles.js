import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 185px;
  height: 210px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
`;

export const CardBody = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40%;
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
`;

export const CardDescription = styled.p`
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 4px;
`;

export const CardPrice = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #8cc63f;
`;
