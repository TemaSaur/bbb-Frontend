"use client"
// import { useRouter } from "next/router";
import Header from "@/components/Header"
import Studio from "@/components/Studio"

export default function Home({ params }) {
  // const router = useRouter();
  return (
    <>
      <Header />
      <main className="container">
        <Studio id={params.slug} />
      </main>
    </>
  );
}
