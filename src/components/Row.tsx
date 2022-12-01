import React from "react";
import styled from "styled-components";

type CellRenderProps = {index: number, data: boolean};

export type RowProps = {
  data: boolean[];
  cell: React.FC<CellRenderProps>;
};

const RowStyledView = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const Row = ({ data, cell }: RowProps) => {
  return (
    <RowStyledView>
      {data.map((cellData, j) => cell({ data: cellData, index: j }))}
    </RowStyledView>
  );
};

export default Row;
