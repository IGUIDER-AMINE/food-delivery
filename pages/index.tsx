import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/Banner";
import AboutUs from "@/components/sections/AboutUs";
import Categories from "@/components/sections/Categories";
import Chief from "@/components/sections/Chief";
import Features from "@/components/sections/Features";
import Reserve from "@/components/sections/Reserve";

export default function Home() {
  return (
    <>
      <Head>
        <title>FRESH - Food Delivery</title>
      </Head>
      <Layout>
        <Banner />
        <AboutUs />
        <Categories />
        <Features />
        <Chief />
        <Reserve />
      </Layout>
    </>
  );
}
