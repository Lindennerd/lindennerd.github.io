import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { client } from "../graphql";
import { gql } from "@apollo/client";

const Home: NextPage = ({ name }) => {
  return <div>{name}</div>;
};

export async function getStaticProps() {
  const data = await client.query({
    query: gql`
      query {
        user(login: "lindennerd") {
          name
        }
      }
    `,
  });

  return {
    props: {
      name: data.data.user.name,
    },
  };
}

export default Home;
