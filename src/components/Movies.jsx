import React from "react";
import Movie from "./Movie";

export default function Movies({ values = [], requestStatus }) {
  const renderMovies = () => {
    return (
      <div className="flex flex-col gap-2">
        <h1 className="text-center text-3xl">List Of Movies</h1>
        {values.map((movie) => {
          return <Movie key={movie.id} movie={movie}></Movie>;
        })}
      </div>
    );
  };

  return <div>{requestStatus !== "loading" && renderMovies()}</div>;
}
