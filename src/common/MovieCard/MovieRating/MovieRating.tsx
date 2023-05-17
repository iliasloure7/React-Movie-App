interface Props {
  rating: number;
}

function MovieRating({ rating }: Props) {
  const formatedRating = Number(rating.toFixed(1));
  const ratingColor =
    formatedRating >= 7
      ? 'border-green-500'
      : formatedRating >= 6.0
      ? 'border-orange-500'
      : 'border-red-500';

  return (
    <div
      className={`absolute left-1 -bottom-4 w-9 h-9 rounded-full bg-white text-gray-900 flex items-center justify-center`}
    >
      <div
        className={`w-8 h-8 border-4 ${ratingColor} rounded-full flex items-center justify-center text-xs`}
      >
        {formatedRating}
      </div>
    </div>
  );
}

export default MovieRating;
