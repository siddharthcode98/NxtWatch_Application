import styled from "styled-components";

export const VideoContainer = styled.li`
  box-sizing: border-box;
  width: 300px;
  margin-right: 5px;
  padding: 10px;
  margin-bottom: 5px;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 100%;
  }
`;

export const ThumbnailImg = styled.img`
  width: 100%;
`;

export const VideoDetails = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const ChannelLogo = styled.img`
  padding-top: 10px;
  width: 45px;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-family: "Roboto";
  color: ${(props) => props.color};
  font-family: "Roboto";
  font-size: 18px;
  height: 41px;
  overflow-y: hidden;
  margin-bottom: 5px;
  @media screen and (max-width: 576px) {
    font-size: 18px;
    overflow-y: visible;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    font-size: 18px;
    overflow-y: visible;
  }
`;
export const ChannelName = styled.p`
  color: ${(props) => props.color};
  font-family: "Roboto";
  margin-bottom: 5px;
`;
export const ViewsPara = styled.p`
  color: ${(props) => props.color};
  font-family: "Roboto";
  margin-bottom: 5px;
`;
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
