import styled from "styled-components";

//SidebarContainer
export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15%;
  height: 100%;
  background-color: ${(props) => props.bgColor};
  @media screen and (max-width: 576px) {
    display: none;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    display: none;
  }
`;

export const SocialLogos = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
export const Heading = styled.h1`
  font-family: "Roboto";
  font-size: 25px;
  font-weight: bold;
  color: ${(props) => props.color};
`;

export const Paragraph = styled.p`
  font-family: "Roboto";
  font-size: 20px;
  color: ${(props) => props.color};
`;
export const LinksContainer = styled.ul`
  list-style: none;
  padding: 0px;
  height: 200px;
`;

export const LinkItem = styled.li`
  display: flex;
  align-items: center;
  padding: 15px;
  margin-bottom: 10px;
  background-color: ${(props) => (props.bgColor ? props.color : "")};
  color: black;
`;
export const LinkText = styled.p`
  font-family: "roboto";
  margin-left: 10px;
  margin-right: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 0px;
  color: ${(props) => props.color};
`;
