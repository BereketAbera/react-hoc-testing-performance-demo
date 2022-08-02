import React from "react";

export default function Movie({
  movie: { poster, rating, release_year, movie_name, genre, description, id },
}) {
  return (
    <div className="flex gap-2 p-2">
      <img
        src={`https://picsum.photos/200/300?random=${id}`}
        className="w-30"
        alt={movie_name}
      />
      <div className="flex flex-col gap-1">
        <h4 className="text-2xl font-bold self-start text-gray-800">
          {movie_name}
        </h4>
        <p className="text-gray-600">{description}</p>
        <div className="flex justify-between flex-1 pt-6">
          <div>Release Year: {release_year}</div>
          <div>Genre: {genre}</div>
          <div>Rating: {rating}</div>
        </div>
      </div>
    </div>
  );
}
