import React from 'react';
import Moviecard from './Moviecard';
import Addmovie from '../Addmovie';

function Movieslist({ movies,setmovies,text,rate }) {
  return (
    <div>
    <div className='add'>
        <Addmovie movies={movies} setmovies={setmovies}/>
    </div>
    <div className='container'>
        {movies.filter((el) => el.name.toLowerCase().includes(text.toLowerCase())&& el.rating>=rate).map((el) => 
        <Moviecard el={el} />).reverse()}
    </div></div>
  );
}

export default Movieslist;