import styled from "styled-components";

export const Container = styled.div`
  margin: 0px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100vh;
`;

export const Content = styled.section`
  height: 100%;
  max-width: 1500px;
  display: flex;
  /* background-color: red; */
  flex: 1;
  align-items: center;
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
