"use client";

import Flex from "@/components/atoms/flex";
import { useScreenResolution } from "@/components/atoms/useScreenResolution";
import Head from "next/head";
import LeftSide from "./components/leftSide";
import RightSide from "./components/rightSide";

const Portfolio = () => {
  const { isMobile } = useScreenResolution();

  return (
    <>
      <Head>
        <title>Pelumi Adeyemi Profile</title>
        <meta name="description" content="" />
        <link rel="icon" href="../public/img/favicon.png" />
      </Head>

      <Flex
        align="center"
        justify="flex-start"
        gap={isMobile ? "5rem" : "0"}
        direction={isMobile ? "column" : "row"}
        styles={{}}
      >
        <LeftSide />
        <RightSide />
      </Flex>
    </>
  );
};

export default Portfolio;
