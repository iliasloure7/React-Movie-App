import Container from '../../common/Container';
import MovieCard from '../../common/MovieCard';
import Carousel from '../../common/Carousel';
import { useTrendingsQuery } from '../../queries/simpleQueries/useTrendingsQuery';
import { MovieWithGenreIds } from '../../api/MovieApi/interfaces';

function Trending() {
  const { data, isLoading, isError } = useTrendingsQuery('movie', 'day');

  if (isLoading) return <h3>Loading...</h3>;

  if (isError) return <h3>An error has occured...</h3>;

  return (
    <Container>
      <h2 className='mb-3 text-xl'>Trending</h2>
      <Carousel>
        {data.map((movie) => {
          return (
            <MovieCard key={movie.title} movie={movie as MovieWithGenreIds} />
          );
        })}
      </Carousel>
    </Container>
  );
}

export default Trending;
