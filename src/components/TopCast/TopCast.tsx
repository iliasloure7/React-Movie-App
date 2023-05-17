import { MovieCredit } from '../../api/MovieApi/interfaces';
import Carousel from '../../common/Carousel';
import CastItem from './CastItem';

interface Props {
  data: MovieCredit;
}

function TopCast({ data }: Props) {
  return (
    <div className='mt-6 flex flex-col gap-4'>
      <h2 className='text-xl'>Top Cast</h2>
      <Carousel>
        {data.cast.map((c) => {
          return <CastItem key={c.name} cast={c} />;
        })}
      </Carousel>
    </div>
  );
}

export default TopCast;
