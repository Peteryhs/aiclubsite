import { LandingPage } from "@/components/landing-page";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>IRHS AI Club</title>
        <meta name="description" content="Description of your site" />
      </Head>
      <LandingPage />
    </>
  );
}
