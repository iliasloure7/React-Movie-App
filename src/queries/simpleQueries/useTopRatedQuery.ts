import { useQuery } from '@tanstack/react-query';
import { getTopRated } from '../../api/MovieApi';

export const useTopRatedQuery = () =>
  useQuery({
    queryKey: ['topRated'],
    queryFn: () => getTopRated(),
    retry: 2,
  });
