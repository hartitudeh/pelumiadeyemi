import Portfolio from "@/components/molecules/homepage";
import Head from "next/head";




export default function Home() {

  return (
    <>
    <Head>
        <title>Pelumi Adeyemi Profile</title>
        <meta name="description" content="" />
        <link rel="icon" href="../public/img/favicon.png" />
      </Head>

    <>
      <Portfolio />
    </>
    </>
  );
}
