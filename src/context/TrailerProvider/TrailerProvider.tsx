import { createContext, useContext, useState } from 'react';
import { TrailerState, Props } from './interfaces';

const TrailerContext = createContext<TrailerState | undefined>(undefined);

function TrailerProvider({ children }: Props) {
  const [showTrailer, setShowTrailer] = useState(false);

  return (
    <TrailerContext.Provider value={{ showTrailer, setShowTrailer }}>
      {children}
    </TrailerContext.Provider>
  );
}

export const useTrailerContext = () => {
  const context = useContext(TrailerContext);

  if (context === undefined) {
    throw new Error('useTrailerContext must be within TrailerProvider');
  }

  return context;
};

export default TrailerProvider;
