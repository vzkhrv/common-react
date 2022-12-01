import React from "react";
import styled from "styled-components";
import Cell from "./Cell";

type Props = {
  data: boolean[];
  index: number;
  onCellClick: (j: number) => () => void;
};

const RowStyledView = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const Row = ({ data, onCellClick, index }: Props) => {
  return (
    <RowStyledView>
      {data.map((cell, j) => (
        <Cell
          index={`${index}${j}`}
          key={`cell-${j}`}
          data={cell}
          onCellClick={onCellClick(j)}
        />
      ))}
    </RowStyledView>
  );
};

export default Row;
