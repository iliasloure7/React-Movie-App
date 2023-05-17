import Container from '../../common/Container';
import MovieCard from '../../common/MovieCard';
import Carousel from '../../common/Carousel';
import { usePopularsQuery } from '../../queries/simpleQueries/usePopularsQuery';
import { MovieWithGenreIds } from '../../api/MovieApi/interfaces';

function Popular() {
  const { data, isLoading, isError } = usePopularsQuery();

  if (isLoading) return <h3>Loading...</h3>;

  if (isError) return <h3>Something went wrong...</h3>;

  return (
    <Container>
      <h2 className='mb-3 text-xl'>What's Popular</h2>
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

export default Popular;
