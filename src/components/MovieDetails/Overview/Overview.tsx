interface Props {
  overview: string;
}

function Overview({ overview }: Props) {
  return (
    <div className='flex flex-col gap-1'>
      <h2 className='text-xl font-bold'>Overview</h2>
      <p className='max-w-xl'>{overview}</p>
    </div>
  );
}

export default Overview;
