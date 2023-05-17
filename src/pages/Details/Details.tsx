import Container from '../../common/Container';
import MovieDetails from '../../components/MovieDetails';
import TopCast from '../../components/TopCast/TopCast';
import { useParams } from 'react-router-dom';
import { useMovieDetailsAndCreditsAndTrailersQuery } from '../../queries/multipleQueries/useMovieDetailsAndCreditsAndTrailersQuery';

function Details() {
  const { id } = useParams();
  const [detailsQuery, creditsQuery, trailersQuery] =
    useMovieDetailsAndCreditsAndTrailersQuery(id ?? '');

  if (detailsQuery.isLoading) return <h3>Loading...</h3>;
  if (creditsQuery.isLoading) return <h3>Loading...</h3>;
  if (trailersQuery.isLoading) return <h3>Loading...</h3>;
  if (detailsQuery.isError) return <h3>Error...</h3>;
  if (creditsQuery.isError) return <h3>Error...</h3>;
  if (trailersQuery.isError) return <h3>Error...</h3>;

  return (
    <Container>
      <MovieDetails
        details={detailsQuery.data}
        credits={creditsQuery.data}
        trailers={trailersQuery.data}
      />
      <TopCast data={creditsQuery.data} />
    </Container>
  );
}

export default Details;
