import styled from "styled-components";

export const Heading = styled.h1`
  color: white;
  font-size: 30px;
`;
export const GradientContainer = styled.div`
  background-image: linear-gradient(
    to ${(props) => props.direction1},
    ${(props) => props.gradient1},
    ${(props) => props.gradient2}
  );
`;

export const Paragraph = styled.p`
  color: white;
  font-size: 15px;
`;
export const Button = styled.button`
  background-color: grey;
  border-radius: 10px;
  height: 30px;
  width: 100px;
`;
export const InputElement = styled.input`
  height: 100px;
  width: 200px;
`;

export const LabelInput = styled.label`
  font-size: 12px;
`;
export const ListContainer = styled.ul`
  list-style: none;
`;
// export const Button = styled.button`
//   background-color: grey;
//   border-radius: 10px;
//   height: 30px;
//   width: 100px;
// `;
