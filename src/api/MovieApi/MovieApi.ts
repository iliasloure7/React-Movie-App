import axios from 'axios';
import {
  PaginatedMovies,
  Movie,
  DetailedMovie,
  MovieCredit,
  MovieTrailer,
} from './interfaces';
import { API_URL, API_KEY } from '../../constants';

export const getTrendings = async (
  mediaType: string,
  time: string
): Promise<Movie[]> => {
  const { data } = await axios.get<PaginatedMovies>(
    `${API_URL}/trending/${mediaType}/${time}?api_key=${API_KEY}`
  );

  return data.results;
};

export const getPopulars = async (): Promise<Movie[]> => {
  const { data } = await axios.get<PaginatedMovies>(
    `${API_URL}/movie/popular?api_key=${API_KEY}`
  );

  return data.results;
};

export const getTopRated = async (): Promise<Movie[]> => {
  const { data } = await axios.get<PaginatedMovies>(
    `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );

  return data.results;
};

export const getMovieDetails = async (
  id: number | string
): Promise<DetailedMovie> => {
  const { data } = await axios.get<DetailedMovie>(
    `${API_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );

  return data;
};

export const getMovieCredits = async (
  id: number | string
): Promise<MovieCredit> => {
  const { data } = await axios.get<MovieCredit>(
    `${API_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );

  return data;
};

export const getMovieTrailer = async (
  id: number | string
): Promise<MovieTrailer> => {
  const { data } = await axios.get<MovieTrailer>(
    `${API_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
  );

  return data;
};
