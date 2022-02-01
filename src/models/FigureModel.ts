export interface IFigure {
  sizes: ISizes;
  cursor: ICursor;
  setLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ISizes {
  width: number;
  height: number;
}

export interface ICursor {
  x: number;
  y: number;
}
