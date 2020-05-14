export interface Field {
  mine: number;
  row: number;
  col: number;
  cells: Cell[];
}

export interface Cell {
  isOpen: boolean;
  isFlag: boolean;
  isLandMine: boolean;
  aroundMines: number;
}

export interface Config {
  darkTheme: boolean;
  mine: number;
  row: number;
  col: number;
}

export interface OpenMap {
  row: number;
  col: number;
  group: number;
}
