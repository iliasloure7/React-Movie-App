interface Props {
  name: string;
}

function Writer({ name }: Props) {
  return (
    <div className='border-b-2 border-dotted border-gray-500 pb-3'>
      <p className='flex gap-2'>
        Writer: <span className='text-gray-500'>{name}</span>
      </p>
    </div>
  );
}

export default Writer;
