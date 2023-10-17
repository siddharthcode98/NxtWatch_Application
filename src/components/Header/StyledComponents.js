import styled from "styled-components";

//Header page
export const LoginLogo = styled.img`
  width: 250px;
  align-self: center;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  padding: 10px;
  height: 10vh;
`;

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 30px;
  margin-left: 20px;
  @media screen and (max-width: 576px) {
    display: none;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    display: block;
  }
`;

export const LogoutBtn = styled.button`
  width: 125px;
  height: 27px;
  border: 2px solid #3b82f6;
  background-color: transparent;
  color: #3b82f6;
  @media screen and (min-width: 576px) {
    display: block;
  }
  @media screen and (max-width: 576px) {
    display: none;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    display: block;
  }
`;
export const MobileLogout = styled.button`
  background-color: transparent;
  border: none;
  margin-right: 10px;
  @media screen and (max-width: 576px) {
    display: block;
  }
  @media screen and (min-width: 577px) {
    display: none;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    display: none;
  }
`;
export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PopupContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
`;

export const PopupButton = styled.button`
  height: 30px;
  width: 80px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.Color};
  border-radius: 2px;
  margin-right: 4px;
`;

export const TransBtn = styled.button`
  background-color: transparent;
  border: none;
`;
export const SmallScreenClose = styled(TransBtn)`
  align-self: flex-start;
`;
export const LinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  padding: 0px;
  height: 100vh;
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

export const SmallScreenPopup = styled.div`
  @media screen and (max-width: 576px) {
    display: block;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    display: block;
  }
  @media screen and (min-width: 577px) {
    display: none;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    display: block;
  }
`;
