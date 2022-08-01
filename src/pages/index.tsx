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
import AboutMeLinks from "@/components/AboutMeLinks";
import { AboutMe } from "@/components/AboutMe";
import TabList from "@/components/TabList";
import { useState } from "react";
import Tab from "@/components/Tab";
import { VscProject } from "react-icons/vsc";
import { FaConnectdevelop } from "react-icons/fa";
import {
  MdLanguage,
  MdOutlineSchool,
  MdOutlineWorkOutline,
} from "react-icons/md";

const Home = ({ user }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [activeTab, setActiveTab] = useState("portfolio");

  return (
    <>
      <main>
        <Navbar>
          <Name name={user?.name} bio={user?.bio} />
          <ThemeSwitch />
        </Navbar>
        <div className="flex mt-16 p-1 flex-col md:flex-row">
          <div className="md:w-[30%] w-full">
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
          <div className="flex-1 mt-2 px-0 md:px-2 md:mt-0 ">
            <TabList
              tabs={[
                <Tab
                  key={"portfolio"}
                  id="portifolio"
                  active={activeTab === "portfolio"}
                  title="Portifólio"
                  icon={<VscProject />}
                  toggleTab={setActiveTab}
                />,
                <Tab
                  id="tecnologies"
                  active={activeTab === "tecnologies"}
                  title="Tecnologias"
                  icon={<FaConnectdevelop />}
                  toggleTab={setActiveTab}
                />,
                <Tab
                  id="languages"
                  active={activeTab === "languages"}
                  title="Idiomas"
                  icon={<MdLanguage />}
                  toggleTab={setActiveTab}
                />,
                <Tab
                  id="experience"
                  active={activeTab === "experience"}
                  title="Experiência"
                  icon={<MdOutlineWorkOutline />}
                  toggleTab={setActiveTab}
                />,
                <Tab
                  id="schooling"
                  active={activeTab === "schooling"}
                  title="Escolaridade"
                  icon={<MdOutlineSchool />}
                  toggleTab={setActiveTab}
                />,
              ]}
            />

            {/* {activeTab === 0 && <div>Portifolio</div>}
            {activeTab === 1 && <div>Tecnologias</div>}
            {activeTab === 2 && <div>Idiomas</div>}
            {activeTab === 3 && <div>Experiência</div>}
            {activeTab === 4 && <div>Formação</div>} */}
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
