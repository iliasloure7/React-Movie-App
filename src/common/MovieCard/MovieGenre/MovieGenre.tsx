import { findGenreFromId } from '../../../utils';

interface Props {
  genres: Array<number>;
}

function MovieGenre({ genres }: Props) {
  return (
    <div className='absolute w-full h-full top-0 left-0 flex items-end justify-end gap-2 p-2 text-xs flex-col'>
      <p className='bg-orange-500 p-1 rounded-sm'>
        {findGenreFromId(genres[0])}
      </p>
      {genres.length > 1 && (
        <p className='bg-orange-500 p-1 rounded-sm'>
          {findGenreFromId(genres[1])}
        </p>
      )}
    </div>
  );
}

export default MovieGenre;
