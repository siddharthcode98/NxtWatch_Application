import styled from "styled-components";

export const GameContainer = styled.li`
  height: 370px;
  width: 250px;
  margin-right: 5px;
  padding: 10px;
  margin-bottom: 10px;
  @media screen and (max-width: 576px) {
    min-width: 200px;
    min-height: 300px;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    min-width: 200px;
    min-height: 300px;
  }
`;

export const GameThumbnail = styled.img`
  width: 100%;
`;

export const Title = styled.h1`
  font-family: "Roboto";
  font-size: 22px;
  color: ${(props) => props.color};
`;

export const Para = styled.p`
  font-family: "Roboto";
  font-size: 15px;
  color: ${(props) => props.color};
`;
