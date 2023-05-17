import { useQueries } from '@tanstack/react-query';
import {
  getMovieCredits,
  getMovieDetails,
  getMovieTrailer,
} from '../../api/MovieApi';

export const useMovieDetailsAndCreditsAndTrailersQuery = (
  id: number | string
) =>
  useQueries({
    queries: [
      {
        queryKey: ['details', id],
        queryFn: () => getMovieDetails(id),
        retry: 2,
      },
      {
        queryKey: ['credits', id],
        queryFn: () => getMovieCredits(id),
        retry: 2,
      },
      {
        queryKey: ['trailers', id],
        queryFn: () => getMovieTrailer(id),
        retry: 2,
      },
    ],
  });
