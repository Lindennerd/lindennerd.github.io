import Avatar from "@/components/Avatar";
import Name from "@/components/Name";
import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import ThemeSwitch from "@/components/ThemeSwitch";
import { client } from "@/graphql";
import {
  GithubUserDataDocument,
  GithubUserDataQuery,
} from "@/graphql/graphql-operations";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { BsGithub } from "react-icons/bs";
import {
  HiOutlineOfficeBuilding,
  HiOutlineLocationMarker,
  HiOutlineMail,
} from "react-icons/hi";
import Link from "next/link";
import AboutMeLinks from "@/components/AboutMeLinks";
import { AboutMe } from "@/components/AboutMe";
import { SubNav } from "@/components/SubNav";

const Home = ({ user }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <main>
        <Navbar>
          <Name name={user?.name} bio={user?.bio} />
          <ThemeSwitch />
        </Navbar>
        <div className="flex mt-16 p-1 flex-col md:flex-row">
          <div className="md:w-[30%]">
            <Card>
              <div className="flex flex-row">
                <div className="flex items-center flex-row justify-center">
                  <Avatar avatarUrl={user?.avatarUrl} alt="profile image" />
                </div>
                <div className="py-4 px-2">
                  <AboutMeLinks
                    login={user?.login}
                    company={user?.company}
                    location={user?.location}
                    email={user?.email}
                  />
                </div>
              </div>
              <div className="flex-row mt-2 p-2">
                <AboutMe />
              </div>
            </Card>
          </div>
          <div className="flex-1">
            <SubNav>
              <div>Projetos</div>
            </SubNav>
          </div>
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
