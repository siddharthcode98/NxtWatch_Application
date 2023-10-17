import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 500px;
  background-color: white;
  border-radius: 10px;
  box-shadow: -1px -2px 23px 9px rgba(0, 0, 0, 0.25);
  padding: 20px;
  background-color: ${(props) => props.bgColor};
  @media screen and (max-width: 576px) {
    height: 300px;
    width: 300px;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    height: 300px;
    width: 300px;
  }
`;

export const Form = styled.form`
  display: Flex;
  flex-direction: column;
  width: 100%;
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${(props) => props.bgColor};
`;

export const LoginLogo = styled.img`
  width: 250px;
  align-self: center;
  @media screen and (max-width: 576px) {
    width: 125px;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 125px;
  }
`;

export const LoginInput = styled.input`
  height: 30px;
  border: 1px solid #cccccc;
  border-radius: 2px;
`;

export const LoginBtn = styled.button`
  height: 32px;
  background-color: #3b82f6;
  border-radius: 5px;
  border-style: none;
  color: white;
`;

export const LoginError = styled.p`
  color: red;
  font-family: "Roboto";
`;

export const Label = styled.label`
  font-family: "Roboto";
  color: ${(props) => props.color};
  @media screen and (max-width: 576px) {
    font-size: 15px;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    font-size: 15px;
  }
`;
