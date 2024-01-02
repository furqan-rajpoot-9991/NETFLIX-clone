import React, { useEffect, useState } from "react";
import requests from "../request";
import axios from "axios";

function Main2() {
  const [movie, setMovie] = useState([]);
  const movies = movie[Math.floor(Math.random() * movie.length)];

  useEffect(() => {
    axios
      .get(requests.requestPopular)
      .then((response) => setMovie(response.data.results));
  }, []);
  console.log(movie);

  const truncateString = (str,num)=>{
    if(str?.length>num) {
     return str.slice(0, num)+ '...'; 
    }else{
      return str;
    }
  }

  return (
    <div
      className="w-full h-[550px] text-white
    "
    >
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`}
          alt={movies?.title}
        />

        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl">{movie?.title}</h1>
          <div className="">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5 ">
              Play
            </button>
            <button className="border text-white border-gray-300 py-2 px-5 ">
              Watch leter
            </button>
            <p className='text-gray-400 text-sm'>
            Released: {movie?.release_date}
          </p>
          <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
            {truncateString(movie?.overview, 150)}
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main2;
