import styled from "styled-components";

export const Container = styled.div`
  margin: 0px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  height: 100vh;
  flex-direction: column;
`;

export const Header = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");

  margin-top: 64px;

  h1 {
    color: #8a8a8a;
    font-size: 5rem;
    font-family: "Pacifico", cursive;
    background: -webkit-linear-gradient(
      360deg,
      rgba(223, 199, 244, 1) 0%,
      rgba(144, 19, 254, 1) 50%,
      rgba(55, 0, 103, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const Content = styled.section`
  /* height: 100%; */
  margin-top: 64px;
  width: 100%;
  flex: 1;
  max-width: 1500px;
  display: flex;
  /* background-color: red; */
  /* flex: 1; */
  /* align-items: center; */
  justify-content: space-around;
`;

export const BoxInput = styled.div`
  width: 200px;
  > div {
    width: 200px;
    height: 200px;
  }
  input {
    height: 19px;
    text-align: center;
  }
  display: flex;
  flex-direction: column;
`;
