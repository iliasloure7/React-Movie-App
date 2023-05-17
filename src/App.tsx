import Header from './components/Header';
import Home from './pages/Home';
import Details from './pages/Details';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { PATH } from './constants';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={PATH.home} element={<Home />} />
        <Route path={`${PATH.details}/:id`} element={<Details />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
