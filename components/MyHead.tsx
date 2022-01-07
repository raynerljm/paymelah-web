import { FC } from "react";
import Head from "next/head";

type Props = {};

const MyHead: FC<Props> = () => {
  return (
    <Head>
      <title>PayMeLah - A bill splitting web app</title>
      <meta name="description" content="PayMeLah - A bill splitting web app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
export default MyHead;
