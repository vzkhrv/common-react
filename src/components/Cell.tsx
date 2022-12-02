import { useRef, useState } from "react";
import { CellProps } from "../utils/utils";
import { CellViewStyled } from "./CellViewStyled";

const Cell = ({ data, onCellClick, index }: CellProps) => {
  const [checked, forceUpdate] = useState(data);
  const flag = useRef(false);
  
  const handleClick = () => {
    onCellClick(forceUpdate);
  }

  if (flag.current) {
    console.log("Cell rerendered", index);
  } else {
    flag.current = true;
  }


  return (
    <>
      <CellViewStyled checked={checked} onClick={handleClick} />
    </>
  );
};

export default Cell;
