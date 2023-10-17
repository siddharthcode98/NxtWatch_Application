import styled from "styled-components";

export const HomeSection = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
`;

export const HomeSection2 = styled.div`
  width: 85%;
  overflow-y: auto;
  box-sizing: border-box;
  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
export const Title = styled.h1`
  font-family: "Roboto";
  font-size: 22px;
  color: ${(props) => props.color};
  text-align: center;
`;

export const Para = styled.p`
  font-family: "Roboto";
  font-size: 15px;
  color: ${(props) => props.color};
  text-align: center;
`;
export const ImageContainer = styled.div`
  text-align: center;
`;
export const NotFoundContainer = styled.div`
  background-color: ${(props) => props.bgColor};
`;
export const NotFoundImage = styled.img`
  width: 700px;
  @media screen and (max-width: 576px) {
    width: 250px;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 250px;
  }
`;
