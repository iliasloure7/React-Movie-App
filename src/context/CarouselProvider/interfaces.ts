export interface CarouselState {
  isDragging: boolean;
  setIsDragging: (isDragging: boolean) => void;
}

export interface Props {
  children: React.ReactNode;
}
