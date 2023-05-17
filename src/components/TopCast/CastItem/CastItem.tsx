import Avatar from '../../../common/Avatar';

interface Props {
  cast: { name: string; profile_path: string; character: string };
}

function CastItem({ cast }: Props) {
  // We check if cast.profile_path it's not null because the api has problem with some images paths.
  return cast.profile_path !== null ? (
    <div className='flex flex-col gap-1'>
      <Avatar
        path={cast.profile_path}
        text={cast.name}
        size='w32h32'
        rounded='rounded-full'
      />
      <p className='text-base'>{cast.name}</p>
      <p className='text-sm text-gray-500'>{cast.character}</p>
    </div>
  ) : null;
}

export default CastItem;
