import styled from "styled-components";

export const LoginInput = styled.input`
  height: 30px;
  border: 1px solid #cccccc;
  border-radius: 2px;
`;

export const SearchInput = styled(LoginInput)`
  width: 500px;
  height: 30px;
  border: 1px solid #cccccc;
  border-radius: 2px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
`;
export const HomeVideosContainer = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  @media screen and (max-width: 576px) {
    padding: 10px;
  }
  @media screen and (min-width: 576px) and (max-width: 768px) {
    padding: 10px;
  }
`;

export const VideosUnorderedList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0px;
  box-sizing: border-box;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
  @media screen and (min-width: 577px) and (max-width: 768px) {
    width: 100%;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
`;

export const SearchBtn = styled.button`
  background-color: #cccccc;
  width: 50px;
  height: 30px;
  border-style: none;
  border-radius: 1px;
`;

export const FailureImageContainer = styled.div`
  text-align: center;
`;

export const FailureImage = styled.img`
  width: 500px;
  @media screen and (max-width: 576px) {
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
