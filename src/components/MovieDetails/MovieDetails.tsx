import Avatar from '../../common/Avatar';
import DetailsGenre from './DetailsGenre';
import DetailsRating from './DetailsRating';
import Overview from './Overview';
import Director from './Director';
import Writer from './Writer';
import Trailer from './Trailer';
import { convertToHoursAndMinutes } from '../../utils';
import {
  MovieCredit,
  DetailedMovie,
  MovieTrailer,
} from '../../api/MovieApi/interfaces';

interface Props {
  details: DetailedMovie;
  credits: MovieCredit;
  trailers: MovieTrailer;
}

function MovieDetails({ details, credits, trailers }: Props) {
  const director = credits.crew.find((c) => c.job === 'Director');
  const writer = credits.crew.find((c) => c.job === 'Novel');
  const officialTrailer = trailers.results.find((t) => t.type === 'Trailer');

  return (
    <div className='flex flex-col gap-8 md:flex-row'>
      <Avatar
        path={details.poster_path}
        text={details.title}
        size='w72'
        rounded='rounded-md'
      />
      <div className='flex flex-col gap-4'>
        <h2 className='text-2xl font-bold'>{details.title}</h2>
        <DetailsGenre genres={details.genres} />
        <div className='flex gap-4'>
          <DetailsRating rating={details.vote_average} />
          <Trailer trailer={officialTrailer?.key ?? 'No available video.'} />
        </div>
        <Overview overview={details.overview} />
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col gap-3 md:gap-0 md:flex-row md:border-b-2 md:border-dotted md:border-gray-500 md:pb-3 md:justify-between'>
            <div className='border-b-2 border-dotted border-gray-500 pb-3 md:border-b-0 md:pb-0'>
              <p className='flex gap-2'>
                Status: <span className='text-gray-500'>{details.status}</span>
              </p>
            </div>
            <div className='border-b-2 border-dotted border-gray-500 pb-3 md:border-b-0 md:pb-0'>
              <p className='flex gap-2'>
                Release Date:
                <span className='text-gray-500'>{details.release_date}</span>
              </p>
            </div>
            <div className='border-b-2 border-dotted border-gray-500 pb-3 md:border-b-0 md:pb-0'>
              <p className='flex gap-2'>
                Runtime:
                <span className='text-gray-500'>
                  {convertToHoursAndMinutes(details.runtime)}
                </span>
              </p>
            </div>
          </div>
          <Director name={director?.name ?? '-'} />
          <Writer name={writer?.name ?? '-'} />
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
