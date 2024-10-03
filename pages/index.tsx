import { LandingPage } from "@/components/landing-page";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>IRHS AI Club</title>
        <meta name="description" content="Description of your site" />
      </Head>
      <LandingPage />
    </>
  );
}
