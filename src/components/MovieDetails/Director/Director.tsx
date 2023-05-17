interface Props {
  name: string;
}

function Director({ name }: Props) {
  return (
    <div className='border-b-2 border-dotted border-gray-500 pb-3'>
      <p className='flex gap-2'>
        Director: <span className='text-gray-500'>{name}</span>
      </p>
    </div>
  );
}

export default Director;
