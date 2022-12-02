import { useRef } from "react";
import Cell from "./components/Cell";
import Grid from "./components/Grid";
import Row from "./components/Row";
import { createGrid } from "./utils/utils";

function App() {
  const data = useRef(createGrid());
  const grid = useRef(createGrid());

  const onCellClick = (i: number, j: number) => (update: (value: boolean) => void) => {
    data.current[i][j] = !data.current[i][j];
    update(data.current[i][j]);
  };

  return (
    <Grid
      data={grid.current}
      row={(rowProps) => (
        <Row
          key={`row-${rowProps.index}`}
          data={rowProps.data}
          cell={(cellProps) => (
            <Cell
              index={`${rowProps.index}${cellProps.index}`}
              key={`cell-${cellProps.index}`}
              data={data.current[rowProps.index][cellProps.index]}
              onCellClick={onCellClick(rowProps.index, cellProps.index)}
            />
          )}
        />
      )}
    />
  );
}

export default App;
