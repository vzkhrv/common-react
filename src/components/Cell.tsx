import styled from "styled-components";

export type CellProps = {
  data: boolean;
  index: string | number;
  onCellClick: () => void;
};

const CellViewStyled = styled.div<{ checked: boolean }>`
  width: 10px;
  height: 10px;
  border: 1px solid #8ec3b0;

  background-color: ${({ checked }) => (checked ? "#9ED5C5" : "#DEF5E5")};
`;

const Cell = ({ data, onCellClick, index }: CellProps) => {
  return (
    <>
      {console.log("Cell rerendered", index)}
      <CellViewStyled checked={data} onClick={onCellClick} />
    </>
  );
};

export default Cell;
