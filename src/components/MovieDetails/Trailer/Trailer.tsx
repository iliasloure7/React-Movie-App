import Overlay from '../../../common/Overlay';
import PlayButton from './PlayButton';
import { VIDEO_URL } from '../../../constants';
import { useTrailerContext } from '../../../context/TrailerProvider/TrailerProvider';

interface Props {
  trailer: string;
}

function Trailer({ trailer }: Props) {
  const { showTrailer } = useTrailerContext();

  return (
    <>
      <PlayButton />
      {showTrailer && (
        <Overlay>
          <iframe
            className='w-[700px] h-[400px] rounded-lg outline-none'
            src={`${VIDEO_URL}/${trailer}`}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          ></iframe>
        </Overlay>
      )}
    </>
  );
}

export default Trailer;
