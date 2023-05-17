import Logo from '../Logo';
import { Link } from 'react-router-dom';
import { PATH } from '../../../constants';

function Navbar() {
  return (
    <nav className='flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <Logo />
        <Link to={PATH.home} className='text-3xl'>
          FilmFlow
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
