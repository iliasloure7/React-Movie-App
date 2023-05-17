import { useTrailerContext } from '../../context/TrailerProvider/TrailerProvider';

interface Props {
  children: React.ReactNode;
}

function Overlay({ children }: Props) {
  const { setShowTrailer } = useTrailerContext();

  return (
    <div
      className='fixed top-0 left-0 w-full h-full bg-black/[.60] flex items-center justify-center'
      onClick={() => setShowTrailer((prevState) => !prevState)}
    >
      {children}
    </div>
  );
}

export default Overlay;
