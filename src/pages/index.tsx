import { AboutMe, AboutMeLinks } from "@/components/About";
import Avatar from "@/components/Avatar";
import Card from "@/components/Card";
import Name from "@/components/Name";
import Navbar from "@/components/Navbar";
import { LanguageSwitch, ThemeSwitch } from "@/components/Switches";
import { TabList } from "@/components/Tabs";
import {
  Languages,
  Portifolio,
  Tecnologies,
  WorkExperience,
} from "@/components/Tabs/TabContent";
import { useInternationalization } from "@/context/InternationalizationContext";
import { client } from "@/graphql";
import {
  GithubUserDataDocument,
  GithubUserDataQuery,
} from "@/graphql/graphql-operations";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import { FaConnectdevelop } from "react-icons/fa";
import { MdLanguage, MdOutlineWorkOutline } from "react-icons/md";
import { VscProject } from "react-icons/vsc";

const Home = ({
  githubData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const githubUser = githubData.user;
  const internationalization = useInternationalization();

  function getIcon(icon: string) {
    // TODO improve this
    switch (icon) {
      case "FaConnectdevelop":
        return <FaConnectdevelop className="text-xl" />;
      case "VscProject":
        return <VscProject className="text-xl" />;
      case "MdOutlineWorkOutline":
        return <MdOutlineWorkOutline className="text-xl" />;

      case "MdLanguage":
        return <MdLanguage className="text-xl" />;
      default:
        return <></>;
    }
  }

  return (
    <>
      <main>
        <Navbar>
          <Name name={githubUser?.name} bio={githubUser?.bio} />
          <div className="flex justify-end items-center">
            <ThemeSwitch />
            <div className="p-2"></div>
            <LanguageSwitch />
          </div>
        </Navbar>
        <div className="flex mt-16 p-1 flex-col md:flex-row">
          <div className="md:w-[30%] w-full">
            <Card>
              <div className="flex flex-row p-2 rounded-lg bg-purple-700 dark:bg-gray-800 shadow-lg ">
                <div className="flex items-center justify-center w-[50%]">
                  <Avatar
                    avatarUrl={githubUser?.avatarUrl}
                    alt="profile image"
                  />
                </div>
                <div className="py-4 px-2 text-white">
                  <AboutMeLinks
                    login={githubUser?.login}
                    company={githubUser?.company}
                    location={githubUser?.location}
                    email={githubUser?.email}
                  />
                </div>
              </div>
              <div className="flex-row mt-2 p-2">
                <AboutMe />
              </div>
            </Card>
          </div>
          <div className="flex-1 mt-2 px-0 md:px-2 md:mt-0 ">
            <TabList
              tabs={internationalization?.appData?.tabs.map((tab) => {
                return {
                  id: tab.id,
                  title: tab.title,
                  icon: getIcon(tab.icon),
                };
              })}
              tabsContent={[
                {
                  id: "portifolio",
                  component: (
                    <Portifolio
                      // TODO check why does codegen generate incorrect types for this
                      // @ts-ignore
                      repositories={githubData.user?.pinnedItems?.edges.map(
                        // @ts-ignore
                        (item) => item.node
                      )}
                    />
                  ),
                },
                {
                  id: "tecnologies",
                  component: (
                    <Tecnologies
                      items={internationalization.appData?.tecnologies!}
                    />
                  ),
                },
                {
                  id: "languages",
                  component: (
                    <Languages
                      languages={internationalization.appData?.languages}
                    />
                  ),
                },
                {
                  id: "experience",
                  component: (
                    <WorkExperience
                      experiences={internationalization.appData?.experience}
                    />
                  ),
                },
              ]}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps<{
  githubData: GithubUserDataQuery;
}> = async () => {
  const { data } = await client.query<GithubUserDataQuery>({
    query: GithubUserDataDocument,
  });

  return {
    props: {
      githubData: data,
    },
  };
};

export default Home;
