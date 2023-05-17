import Container from '../../common/Container';
import Form from './Form';

function Hero() {
  return (
    <section className='h-screen relative'>
      <div className='w-full h-full bg-hero-pattern bg-cover'>
        <div className='w-full h-full bg-black/60 p-5'></div>
        <div className='absolute top-0 left-0 w-full h-full'>
          <Container height='full'>
            <div className='h-full flex flex-col items-center justify-center text-center gap-4 pb-24'>
              <h1 className='text-6xl font-bold'>Welcome.</h1>
              <p className='text-lg'>
                Millions of movies, Tv shows and people to discover. Explore
                now.
              </p>
              <Form />
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}

export default Hero;
