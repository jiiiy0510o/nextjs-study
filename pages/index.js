import { useEffect, useState } from "react";
import Seo from "../components/Seo";

export default function Home({ results }) {
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h3>{movie.title}</h3>
        </div>
      ))}
      <style jsx>{`
        .container {
          width: 100%;
          background-color: white;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        }
        .movie {
          width: 50%;
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
          flex-wrap: wrap;
          padding: 10px 10px;
        }
        div img {
          width: 100%;
          border-radius: 20px;
          margin: 0 auto;
          margin-bottom: 8px;
        }
        h3 {
          display: block;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
export async function getServerSideProps() {
  const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();

  return {
    props: {
      results,
    },
  };
}
