import Container from '../../common/Container';
import Hero from '../../components/Hero';
import Trending from '../../components/Trending';
import Popular from '../../components/Popular';
import TopRated from '../../components/TopRated';

function Home() {
  return (
    <>
      <Hero />
      <Container>
        <Trending />
        <Popular />
        <TopRated />
      </Container>
    </>
  );
}

export default Home;
