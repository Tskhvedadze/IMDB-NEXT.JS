import { Results } from "@/components";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }: any) {
  const genre = searchParams.genre || "fetchTrending";
  const URL = `https://api.themoviedb.org/3/${
    genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
  }?api_key=${API_KEY}&language=en-US&page=1`;

  const response = await fetch(URL, { next: { revalidate: 10000 } });
  const data = await response.json();
  const result = data?.results;

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return (
    <div>
      <Results results={result} />
    </div>
  );
}
