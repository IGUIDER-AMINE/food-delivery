import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/Banner";
import AboutUs from "@/components/sections/AboutUs";

export default function Home() {
  return (
    <>
      <Head>
        <title>FRESH - Food Delivery</title>
      </Head>
      <Layout>
        <Banner/>
        <AboutUs/>
        <Categor
        {/* <Banner />
        <Modern />
        <AboutUs />
        <Product />
        <Store /> */}
      </Layout>
    </>
  );
}
