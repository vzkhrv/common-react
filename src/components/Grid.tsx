import styled from "styled-components";
import Row from "./Row";

type Props = {
  data: boolean[][];
  onCellClick: (i: number) => (j: number) => () => void;
};

const GridStyledView = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const Grid = ({ data, onCellClick }: Props) => {
  return (
    <GridStyledView>
      {data.map((row, i) => (
        <Row
          index={i}
          key={`row-${i}`}
          data={row}
          onCellClick={onCellClick(i)}
        />
      ))}
    </GridStyledView>
  );
};

export default Grid;
