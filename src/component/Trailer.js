import React from 'react'
import { useParams } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";


function Trailer({movies}) {
    const params=useParams();
    const movie=movies.filter((el)=>el.name==params.name)[0];
    console.log(movie);
  return (
    <div style={{ width:"100%",textAlign:'center'}}>
      <div style={{marginTop:"60PX"}}><img src={movie.posterurl} style={{width:"80%",
       borderRadius:"15px"
      }}/>
      </div>
      <h1 style={{textShadow:"1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue"}}>{movie.name } </h1>
      <p>{movie.description}</p>
      <div className='ReactStars'><ReactStars 
    count={5}
    size={29}
    activeColor="rgb(23, 180, 23)"
    value={movie.rating}
    edit={false}/></div>
      </div>
  )
}

export default Trailer