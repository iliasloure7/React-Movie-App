import Container from '../../common/Container';
import MovieCard from '../../common/MovieCard';
import Carousel from '../../common/Carousel';
import { useTopRatedQuery } from '../../queries/simpleQueries/useTopRatedQuery';
import { MovieWithGenreIds } from '../../api/MovieApi/interfaces';

function TopRated() {
  const { data, isLoading, isError } = useTopRatedQuery();

  if (isLoading) return <h3>Loading...</h3>;

  if (isError) return <h3>Something went wrong...</h3>;

  return (
    <Container>
      <h2 className='mb-3 text-xl'>Top Rated</h2>
      <Carousel>
        {data.map((movie: MovieWithGenreIds) => {
          return (
            <MovieCard key={movie.title} movie={movie as MovieWithGenreIds} />
          );
        })}
      </Carousel>
    </Container>
  );
}

export default TopRated;
