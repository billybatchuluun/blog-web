import Image from "next/image";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Data } from "@/components/Data";
import { AllBlogPost } from "@/components/AllBlogPost";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => {
        setArticles(data);
      });
  }, []);
  console.log("articles", articles);

  return (
    <main className="flex flex-col gap-[100px]">
      <section>
        <Navbar />
        <Hero />
      </section>
      <section>
        <Data />
      </section>
      <AllBlogPost />
    </main>
  );
}
