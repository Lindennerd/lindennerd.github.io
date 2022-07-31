import Avatar from "@/components/Avatar";
import Name from "@/components/Name";
import Navbar from "@/components/Navbar";
import PresentationCard from "@/components/PresentationCard";
import ThemeSwitch from "@/components/ThemeSwitch";
import { client } from "@/graphql";
import {
  GithubUserDataDocument,
  GithubUserDataQuery,
} from "@/graphql/graphql-operations";
import type { GetStaticProps, InferGetStaticPropsType } from "next";

const Home = ({ user }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <main>
        <Navbar>
          <div>Desenvolvedor FullStack Node & .Net</div>
          <ThemeSwitch />
        </Navbar>
        <div className="flex mt-16 p-1 flex-col md:flex-row">
          <div className="md:w-[30%]">
            <PresentationCard>
              <div className="flex items-center flex-row md:flex-col justify-center">
                <Avatar avatarUrl={user?.avatarUrl} alt="profile image" />
                <Name name={user?.name} nickname={user?.login} />
              </div>
            </PresentationCard>
          </div>
          <div className="flex-1"></div>
        </div>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps<GithubUserDataQuery> = async () => {
  const { data } = await client.query<GithubUserDataQuery>({
    query: GithubUserDataDocument,
  });

  return {
    props: { user: data.user },
  };
};

export default Home;
