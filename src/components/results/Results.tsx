import { MoviesT } from "movieTypes";

type ResultsProps = {
  results: MoviesT[];
};

export const Results = ({ results }: ResultsProps) => {
  return (
    <div>
      {results.map((result: MoviesT) => {
        return <div key={result.id}>{result?.original_title}</div>;
      })}
    </div>
  );
};
