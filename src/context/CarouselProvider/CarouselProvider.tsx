import { createContext, useContext, useState } from 'react';
import { CarouselState, Props } from './interfaces';

const CarouselContext = createContext<CarouselState | undefined>(undefined);

const CarouselProvider = ({ children }: Props) => {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <CarouselContext.Provider value={{ isDragging, setIsDragging }}>
      {children}
    </CarouselContext.Provider>
  );
};

export const useCarouselContext = (): CarouselState => {
  const context = useContext(CarouselContext);

  if (context === undefined) {
    throw new Error('useCarouselContext must be within a CarouselProvider');
  }

  return context;
};

export default CarouselProvider;
