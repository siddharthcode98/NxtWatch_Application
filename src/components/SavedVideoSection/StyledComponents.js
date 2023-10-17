import styled from "styled-components";

export const SavedVideoImage = styled.img`
  width: 50%;
  @media screen and (max-width: 576px) {
    width: 250px;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 250px;
  }
`;
export const SavedVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  height: 100vh;
`;
export const TrendingBannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  align-self: stretch;
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
export const TrendingListContainer = styled.ul`
  list-style: none;
  padding: 0px;
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
