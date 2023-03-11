import styled from "styled-components";

export const Header = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  z-index: 100;
  width: 100vw;
  height: 86px;
  background-color: #f0f2f5;

  -webkit-box-shadow: 0px 9px 7px -6px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0px 9px 7px -6px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 9px 7px -6px rgba(0, 0, 0, 0.16);
`;

export const divIcon = styled.div`
  margin-left: 30px;
  color: #8cc63f;
`;

export const label = styled.label`
  display: flex;
  text-align: end;
  justify-content: flex-end;
  align-items: center;
  &:nth-child(1) {
    font-size: 16px;
    color: #000000;
  }
  &:nth-child(2) {
    font-size: 14px;
    color: #8cc63f;
    margin-top: 9px;
  }
`;

export const div = styled.div`
  padding: 20px;
  margin: 10px;
`;
