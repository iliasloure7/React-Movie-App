interface Props {
  genres: Array<{ id: number; name: string }>;
}

function DetailsGenre({ genres }: Props) {
  return (
    <div className='flex gap-2 text-xs'>
      <p className='bg-orange-500 p-1 rounded-sm'>{genres[0].name}</p>
      {genres.length > 1 && (
        <p className='bg-orange-500 p-1 rounded-sm'>{genres[1].name}</p>
      )}
    </div>
  );
}

export default DetailsGenre;
