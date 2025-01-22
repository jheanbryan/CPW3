import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  gap: 20px;
`;

export const SearchInput = styled.input.attrs({ type: "text" })`
  width: 400px;
  height: 35px;
  font-size: 1rem;
  text-align: center;
  font-family: "regular";
  border: 2px solid #ccc;
  &:focus {
    outline: 2px solid #555;
  }
`;

export const ResultsArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;
