import Image from "next/image";

type MoviePageProps = {
  params: { id: string };
};

async function getMovie(movieId: string) {
  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`;
  const res = await fetch(URL);
  return await res.json();
}

export default async function MoviePage({ params }: MoviePageProps) {
  const movie = await getMovie(params.id);

  return (
    <div className=" w-full ">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie?.backdrop_path || movie?.poster_path
          }`}
          width={500}
          height={300}
          alt="Movie poster"
          className=" rounded-lg "
          placeholder="blur"
          blurDataURL="/spinner.svg"
          style={{
            maxWidth: "100%",
            height: "100%",
          }}
        />
        <div className="p-2">
          <h2 className="text-lg font-bold mb-3">
            {movie?.title || movie?.name}
          </h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>
            {movie?.overview}
          </p>
          <p className="mb-3">
            <span className=" font-semibold mr-1">
              Date Released:{" "}
              <span>{movie?.release_date || movie?.first_air_date}</span>
            </span>
          </p>
          <p className="mb-3">
            <span className=" font-semibold mr-1">
              Rating: <span>{movie?.vote_count}</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
