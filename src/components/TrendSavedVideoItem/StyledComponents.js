import styled from "styled-components";

export const TrendingVideoContainer = styled.li`
  display: flex;
  margin-bottom: 10px;
  @media screen and (max-width: 576px) {
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const Title = styled.h1`
  font-size: 20px;
  font-family: "Roboto";
  color: ${(props) => props.color};
`;

export const TrendingThumbnail = styled.img`
  height: 250px;
  @media screen and (max-width: 576px) {
    height: 200px;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    height: 200px;
  }
`;
export const ViewsPara = styled.p`
  color: ${(props) => props.color};
  font-family: "Roboto";
  margin-bottom: 5px;
`;
export const ChannelName = styled.p`
  color: ${(props) => props.color};
  font-family: "Roboto";
  margin-bottom: 5px;
`;
export const TextContainer = styled.div`
  margin-left: 30px;
`;
