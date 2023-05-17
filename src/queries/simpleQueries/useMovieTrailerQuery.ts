import { useQuery } from '@tanstack/react-query';
import { getMovieTrailer } from '../../api/MovieApi';

export const useMovieTrailerQuery = (id: number | string) =>
  useQuery({
    queryKey: ['trailer', id],
    queryFn: () => getMovieTrailer(id),
    retry: 2,
  });
