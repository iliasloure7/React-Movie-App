import MovieRating from './MovieRating';
import MovieGenre from './MovieGenre/MovieGenre';
import Avatar from '../Avatar';
import { MovieWithGenreIds } from '../../api/MovieApi/interfaces';
import { useCarouselContext } from '../../context/CarouselProvider';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../constants';

type Props = {
  movie: MovieWithGenreIds;
};

function MovieCard({ movie }: Props) {
  const { isDragging } = useCarouselContext();
  const navigate = useNavigate();

  const handleClick = () => {
    if (!isDragging) {
      navigate(`${PATH.details}/${movie.id}`);
    }
  };

  return (
    <div onClick={handleClick}>
      <div className='relative'>
        <Avatar
          path={movie.poster_path}
          text={movie.title}
          size='w44'
          rounded='rounded-md'
        />
        <MovieGenre genres={movie.genre_ids} />
        <MovieRating rating={movie.vote_average} />
      </div>
      <div className='mt-6'>
        <h3 className='text-sm'>{movie.title}</h3>
        <p className='text-gray-500 text-xs'>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
