interface Props {
  rating: number;
}

function DetailsRating({ rating }: Props) {
  const formatedRating = Number(rating.toFixed(1));
  const ratingColor =
    formatedRating >= 7
      ? 'border-green-500'
      : formatedRating >= 6.0
      ? 'border-orange-500'
      : 'border-red-500';

  return (
    <div
      className={`w-14 h-14 rounded-full border-4 ${ratingColor} text-white flex items-center justify-center text-xl`}
    >
      {formatedRating}
    </div>
  );
}

export default DetailsRating;
