import React, { useState, useEffect } from "react";
import "./Home.scss";
import MovieApi from "../../api/MovieApi";
import { APIKey } from "../../api/MovieApiKey";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../../store/Reducer";
import { Button, TextField } from "@mui/material";

function Home() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { movies } = useSelector((state: any) => state.movies);
  const fetchMovies = async () => {
    const searchKey = search ? search : "Thor";

    const res = await MovieApi.get(
      `?apikey=${APIKey}&s=${searchKey}&type=movie`
    );
    console.log(res.data.Search);
    console.log(`?apikey=${APIKey}&s=${searchKey}&type=movie`);

    setTimeout(() => {
      dispatch(addMovie(res.data.Search));
    }, 500);
  };

  //Effect Hook คล้ายๆกับ Vue Lifecycle
  useEffect(() => {
    fetchMovies();
  }, []);
  
  return (
    <div>
      <h1>Home</h1>
      <div className="search-bar">
        <TextField
          id="search-movie"
          label="Search Movie"
          variant="standard"
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
            console.log(e.target.value);
          }}
        />
        <Button
          variant="contained"
          onClick={(e) => {
            e ? fetchMovies() : "";
          }}
        >
          search
        </Button>
      </div>

      <div className="list-movie">
        {movies &&
          movies.map((movie: any) => (
            <div className="card" key={movie.imdbID}>
              <div>
                <img className="img-poster" src={movie.Poster} alt="" />
              </div>
              <div> {movie.Title}</div>
              <div> {movie.Year}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
