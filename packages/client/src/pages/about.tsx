import Head from "next/head";
import React from "react";

const About: React.FC = () => {
  // eslint-disable-next-line no-console
  console.log("About page");
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About us page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>About page</h1>
        <p>This page is SSRd at build time (SSG!)</p>
      </main>
    </>
  );
};

export default About;
