import styled from "styled-components";

export const Container = styled.div`
  > div {
    width: 120px;
    height: 120px;
    border-radius: 8px;
  }

  input {
    font-weight: bold;
    font-size: 15px;
    width: 120px;
    text-align: center;
    border-radius: 8px;
    border-style: none;
    margin-top: 8px;
    color: #6f6f6f;
    height: 20px;

    &:focus {
      color: #0d0505;
      border-color: #6f6f6f;
      border-style: solid;
      border-width: 1.5px;
    }
  }
`;

export const Popover = styled.div`
  position: fixed;
  z-index: 2;
`;

export const Cover = styled.div`
  position: absolute;
`;
