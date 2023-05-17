import { useQuery } from '@tanstack/react-query';
import { Movie } from '../../api/MovieApi/interfaces';
import { getTrendings } from '../../api/MovieApi';

export const useTrendingsQuery = (mediaType: string, time: string) =>
  useQuery<Movie[]>({
    queryKey: ['trendings', mediaType, time],
    queryFn: () => getTrendings(mediaType, time),
    retry: 2,
  });
