import styled from "styled-components";

export const Button = styled.button`
  opacity: ${(props) => props.isActive};
  border-radius: 10px;
  height: 30px;
  width: 100px;
`;
