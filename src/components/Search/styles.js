import styled from "styled-components";

export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 330px;
  height: 40px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 0 16px;
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  color: #8cc63f;
  cursor: pointer;
  margin-right: 16px;
`;
