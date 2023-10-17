import styled from "styled-components";

export const VideoItemContainer = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100%;
  height: 100%;
  overflow-y: Scroll;
  box-sizing: border-box;
  padding: 20px;
`;
export const ChannelLogo = styled.img`
  padding-top: 10px;
  width: 45px;
`;
export const VideoPlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${(props) => props.bgColor};
`;

export const Title = styled.h1`
  font-family: "Roboto";
  font-size: 25px;
  font-weight: normal;
  color: ${(props) => props.color};
`;
export const ViewPara = styled.p`
  font-family: "Roboto";
  font-size: 18px;
  font-weight: normal;
  color: #616e7c;
`;

export const ChannelName = styled(ViewPara)`
  font-size: 17px;
  color: ${(props) => props.color};
  font-weight: bold;
`;

export const SubscriberCount = styled(ViewPara)`
  font-size: 15px;
`;

export const Description = styled(ViewPara)`
  color: ${(props) => props.color};
  font-weight: normal;
`;

export const TransBtn = styled.button`
  display: flex;
  align-items: center;
  margin-right: 10px;
  border: none;
  background-color: transparent;
  color: ${(props) => props.color};
`;
export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const BtnAndViewsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 576px) {
    display: block;
  }
`;
