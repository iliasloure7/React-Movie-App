import Container from '../../common/Container/Container';
import Navbar from './Navbar';

function Header() {
  return (
    <header className='bg-slate-700 sticky top-0 z-10'>
      <Container>
        <Navbar />
      </Container>
    </header>
  );
}

export default Header;
