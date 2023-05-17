import { getPopulars } from '../../api/MovieApi';
import { useQuery } from '@tanstack/react-query';
import { Movie } from '../../api/MovieApi/interfaces';

export const usePopularsQuery = () =>
  useQuery<Movie[]>({
    queryKey: ['populars'],
    queryFn: () => getPopulars(),
    retry: 2,
  });
