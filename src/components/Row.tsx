import { RowProps } from "../utils/utils";
import { RowStyledView } from "./RowViewStyled";

const Row = ({ data, cell }: RowProps) => {
  return (
    <RowStyledView>
      {data.map((cellData, j) => cell({ data: cellData, index: j }))}
    </RowStyledView>
  );
};

export default Row;
