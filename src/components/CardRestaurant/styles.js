import styled from "styled-components";

export const CardContainer = styled.div`
  width: 330px;
  height: 180px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
`;

export const Description = styled.div`
  width: 100%;
  height: 50%;
  background-color: #fff;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-bottom: 100px;

  -webkit-box-shadow: 0px 9px 7px -6px rgba(0, 0, 0, 0.16);
  -moz-box-shadow: 0px 9px 7px -6px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 9px 7px -6px rgba(0, 0, 0, 0.16);
`;

export const Title = styled.strong`
  font-size: 20px;
  margin: 0 100px 50px 15px;
  font-wight: 400;

  p {
    font-size: 14px;
    font-wight: 100;
    margin-top: 3px;
  }
`;

export const Icons = styled.div`
  display: flex;
  position: absolute;
  margin: 240px 0px 220px 80px;
  mix-blend-mode: normal;
  height: 10px;
  font-size: 8px;
  color: #8cc63f;

  strong {
    display: flex;
    font-size: 12px;
    margin: 5px 5px 0px 5px;
    font-wight: 400;
    color: #000000;
  }
`;
