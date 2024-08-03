import { useCallback, useEffect } from "react";

import { API_OPTIONS } from "../utils/constants";
import { addUpComingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = useCallback(async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpComingMovies(json.results));
  }, [dispatch]);

  useEffect(() => {
    getUpcomingMovies();
  }, [getUpcomingMovies]);
};

export default useUpcomingMovies;
