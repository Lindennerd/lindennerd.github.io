import { Repository } from "@/graphql/graphql-operations";

export function Portifolio({ repositories }: { repositories: Repository[] }) {
  return (
    <div>
      {repositories.map((repository) => {
        return <div>{repository.description}</div>;
      })}
    </div>
  );
}
