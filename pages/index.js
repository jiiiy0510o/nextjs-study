import Link from "next/link";
import { useRouter } from "next/router";
import Seo from "../components/Seo";

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        <div onClick={() => onClick(movie.id, movie.title)} className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h3>
            <Link href={`/movies/${movie.title}/${movie.id}`}>
              <a>{movie.title}</a>
            </Link>
          </h3>
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
        .movie img {
          width: 100%;
          border-radius: 20px;
          margin: 0 auto;
          margin-bottom: 8px;
          cursor: pointer;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
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
