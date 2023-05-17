export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

export interface PaginatedMovies {
  page: number;
  results: Array<Movie>;
  total_pages: number;
  total_results: number;
}

export interface MovieWithGenreIds extends Movie {
  genre_ids: Array<number>;
}

export interface DetailedMovie extends Movie {
  runtime: number;
  status: string;
  genres: Array<{ id: number; name: string }>;
}

export interface MovieCredit {
  id: number;
  cast: Array<{ name: string; profile_path: string; character: string }>;
  crew: Array<{ name: string; job: string }>;
}

export interface MovieTrailer {
  id: number;
  results: Array<{ key: string; type: string }>;
}
