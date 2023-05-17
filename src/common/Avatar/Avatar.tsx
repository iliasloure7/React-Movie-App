import { IMAGE_URL } from '../../constants';
import { sizeVariants } from './sizes';

interface Props {
  path: string;
  text: string;
  size?: string;
  rounded?: string;
}

function Avatar({
  path,
  text,
  size = 'wauto',
  rounded = 'rounded-none',
}: Props) {
  return (
    <div
      className={`${rounded} overflow-hidden ${sizeVariants[size]}`}
      draggable={false}
    >
      <img
        src={`${IMAGE_URL}/${path}`}
        alt={text}
        className='w-full h-full object-cover'
        draggable={false}
      />
    </div>
  );
}

export default Avatar;
