import { useState } from "react";
import Grid from "./components/Grid";

const size = 10;
const array = Array(size)
  .fill(false)
  .map((x) => Array(size).fill(false));

function App() {
  const [data, setData] = useState(array);

  const onCellClick = (i: number) => (j: number) => () => {
    const newData = [...data];
    newData[i][j] = !newData[i][j];

    setData(newData);
  };

  return <Grid data={data} onCellClick={onCellClick} />;
}

export default App;
