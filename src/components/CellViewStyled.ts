import styled from "styled-components";

export const CellViewStyled = styled.div<{ checked: boolean }>`
  width: 10px;
  height: 10px;
  border: 1px solid #8ec3b0;

  background-color: ${({ checked }) => (checked ? "#9ED5C5" : "#DEF5E5")};
`;