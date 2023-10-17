import styled from "styled-components";

export const TrendingListContainer = styled.ul`
  list-style: none;
  padding: 0px;
`;
export const TrendingSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgColor};
  width: 100%;
  min-height: 100vh;
`;
export const FailureImageContainer = styled.div`
  text-align: center;
`;

export const FailureImage = styled.img`
  width: 500px;
  @media screen and (max-width: 576px) {
    width: 250px;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    width: 250px;
  }
`;
export const Title = styled.h1`
  font-family: "Roboto";
  font-size: 22px;
  color: ${(props) => props.color};
  text-align: center;
`;

export const Para = styled.p`
  font-family: "Roboto";
  font-size: 15px;
  color: ${(props) => props.color};
  text-align: center;
`;
export const RetryBtn = styled.button`
  background-color: #4f46e5;
  height: 30px;
  width: 100px;
  border: none;
  border-radius: 5px;
  color: white;
  position: center;
`;
