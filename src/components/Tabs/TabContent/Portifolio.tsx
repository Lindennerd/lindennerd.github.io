import Card from "@/components/Card";
import { Repository } from "@/graphql/graphql-operations";
import Link from "next/link";
import { RiGitRepositoryCommitsLine } from "react-icons/ri";
import { BsLink45Deg } from "react-icons/bs";
import { MdOutlineUpdate } from "react-icons/md";
import useDateFormatter from "@/hooks/useDateFormatter";

export function Portifolio({ repositories }: { repositories: Repository[] }) {
  const dateFormatter = useDateFormatter();

  return (
    <div className="flex justify-between flex-wrap">
      {repositories.map((repository) => {
        return (
          <div className="mt-2 mr-2 mb-2 w-full md:w-[30%]" key={repository.id}>
            <Card>
              <div
                className="flex items-center px-2 rounded-md bg-purple-600 shadow-md dark:bg-gray-800 
              text-white hover:bg-purple-700 dark:hover:bg-gray-700 transition-all"
              >
                <RiGitRepositoryCommitsLine />
                <div className="p-1"></div>
                <Link href={repository.url ?? ""} target="_blank">
                  <a target="_blank">{repository.name}</a>
                </Link>
              </div>
              <div className="px-2 mt-2 border-l-2 dark:text-white">
                {repository.description}
              </div>
              <div className="flex  justify-between items-center  mt-8">
                <div className="flex items-center">
                  <MdOutlineUpdate className="text-xl" />
                  <span className="ml-2">
                    {dateFormatter(repository.updatedAt)}
                  </span>
                </div>
                {repository.homepageUrl && (
                  <Link href={repository.homepageUrl ?? ""} target="_blank">
                    <a
                      target="_blank"
                      className="p-1 rounded-full bg-purple-600 
                  shadow-md dark:bg-gray-800 text-white hover:bg-purple-700 dark:hover:bg-gray-700 transition-all"
                    >
                      <BsLink45Deg className="text-xl" />
                    </a>
                  </Link>
                )}
              </div>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
