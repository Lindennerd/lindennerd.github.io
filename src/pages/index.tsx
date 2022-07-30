import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";

import { client } from "@/graphql";
import Navbar from "@/components/Navbar";
import {
  GithubUserDataDocument,
  GithubUserDataQuery,
} from "@/graphql/graphql-operations";

const Home = ({ user }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <main>
        <Navbar>
          <div>{user?.name}</div>
        </Navbar>
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
