import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
`;

export const HomeSection = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
`;

export const HomeSection2 = styled.div`
  width: 85%;
  overflow-y: scroll;
  box-sizing: border-box;
  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
