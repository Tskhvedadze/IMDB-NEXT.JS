import { Card } from "./components/Card";
import { MoviesT } from "movieTypes";

type ResultsProps = {
  results: MoviesT[];
};

export const Results = ({ results }: ResultsProps) => {
  return (
    <div className=" sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {results?.map((result: MoviesT) => {
        return <Card key={result.id} {...result} />;
      })}
    </div>
  );
};
