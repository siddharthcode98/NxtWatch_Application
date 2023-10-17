import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
`;

export const HomeSection = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
`;

export const TrendingBannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  background-color: ${(props) => props.bgColor};
  height: 150px;
  @media screen and (max-width: 576px) {
    height: 100px;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    height: 100px;
  }
`;

export const TrendingHeading = styled.h1`
  font-size: 50px;
  font-family: "Roboto";
  color: ${(props) => props.color};
  margin-left: 20px;
  @media screen and (max-width: 576px) {
    font-size: 35px;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    font-size: 35px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 75px;
  border-radius: 35px;
  background-color: ${(props) => props.color};
`;

export const TrendingSection2 = styled.div`
  width: 85%;
  overflow-y: scroll;
  box-sizing: border-box;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 100%;
  }
`;
