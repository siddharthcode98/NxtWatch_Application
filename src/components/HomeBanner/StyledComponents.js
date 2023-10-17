import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px;
  padding-right: 30px;
  background-image: url("https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png");
  width: 85%%;
  height: 300px;
  background-size: cover;
`;

export const Paragraph = styled.p`
  font-size: 20px;
  color: black;
  font-family: "Roboto";
`;

export const TransBtn = styled.button`
  background-color: transparent;
  align-self: flex-end;
  border-style: none;
`;

export const LoginBtn = styled.button`
  height: 32px;
  background-color: #3b82f6;
  border-radius: 5px;
  border-style: none;
  color: white;
`;
export const GetItNowBtn = styled.button`
  width: 125px;
  height: 50px;
  border: 2px solid black;
  background-color: transparent;
  color: black;
  font-family: "roboto";
`;

export const HomeBannerLogo = styled.img`
  width: 250px;
`;
