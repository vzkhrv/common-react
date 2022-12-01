import styled from "styled-components";

type RowRenderProps = {index: number, data: boolean[]};

type Props = {
  row: React.FC<RowRenderProps>;
  data: boolean[][];
};

const GridStyledView = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const Grid: React.FC<Props> = (props) => {
  return (
    <GridStyledView>
      {props.data.map((data, index) => props.row({ data, index }))}
    </GridStyledView>
  );
};

export default Grid;
