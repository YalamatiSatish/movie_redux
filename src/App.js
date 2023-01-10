import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import MovieDetail from './components/MovieDetail';
import PageNotFound from './components/PageNotFound';
import Footer from './components/Footer';


function App() {
  return (
    <div className=" bg-slate-500 h-screen text-white">
      <BrowserRouter>
          <Header />
          <Routes>          
              <Route path='/' exact element ={<Home/>} />
              <Route path='/movie/:imdbID' element ={<MovieDetail/>} />
              <Route path='*' element ={<PageNotFound/>} />
          </Routes>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
