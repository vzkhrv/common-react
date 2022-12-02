import { Dispatch, SetStateAction } from "react";

const SIZE = 100;

export const createGrid = (size: number = SIZE): boolean[][] =>
  Array(size)
    .fill(false)
    .map((x) => Array(size).fill(false));

export type CellProps = {
  data: boolean;
  index: string | number;
  onCellClick: (update: Dispatch<SetStateAction<boolean>>) => void;
};

export type CellRenderProps = { index: number; data: boolean };

export type RowProps = {
  data: boolean[];
  cell: React.FC<CellRenderProps>;
};
