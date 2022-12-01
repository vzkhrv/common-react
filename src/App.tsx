import { useState } from "react";
import Cell from "./components/Cell";
import Grid from "./components/Grid";
import Row from "./components/Row";

const size = 10;
const array: boolean[][] = Array(size)
  .fill(false)
  .map((x) => Array(size).fill(false));

function App() {
  const [data, setData] = useState(array);

  const onCellClick = (i: number, j: number) => () => {
    const newData = [...data];
    newData[i][j] = !newData[i][j];

    setData(newData);
  };

  return (
    <Grid
      data={data}
      row={(rowProps) => (
        <Row
          key={`row-${rowProps.index}`}
          data={rowProps.data}
          cell={(cellProps) => (
            <Cell
              index={`${rowProps.index}${cellProps.index}`}
              key={`cell-${cellProps.index}`}
              data={cellProps.data}
              onCellClick={onCellClick(rowProps.index, cellProps.index)}
            />
          )}
        />
      )}
    />
  );
}

export default App;
