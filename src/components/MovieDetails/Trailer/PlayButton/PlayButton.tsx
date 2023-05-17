import play from '../../../../assets/images/png/play.png';
import { useTrailerContext } from '../../../../context/TrailerProvider/TrailerProvider';

function PlayButton() {
  const { setShowTrailer } = useTrailerContext();

  return (
    <div className='flex items-center gap-3'>
      <button onClick={() => setShowTrailer((prevState) => !prevState)}>
        <img src={play} alt='play icon' className='w14 h-14' />
      </button>
      <p>Watch Trailer</p>
    </div>
  );
}

export default PlayButton;
