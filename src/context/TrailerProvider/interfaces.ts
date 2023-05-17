export interface TrailerState {
  showTrailer: boolean;
  setShowTrailer: (callback: (prevState: boolean) => boolean) => void;
}

export interface Props {
  children: React.ReactNode;
}
