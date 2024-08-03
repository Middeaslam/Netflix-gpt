import { IMG_CDN_URL } from "../utils/constants";
import React from "react";

const MovieCard = ({ poster_path }) => {
  return (
    <div className="w-48 pr-4">
      <img src={IMG_CDN_URL + poster_path} alt="Movie card" />
    </div>
  );
};

export default MovieCard;
