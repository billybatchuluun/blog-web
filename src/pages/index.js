import Image from "next/image";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Data } from "@/components/Data";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex flex-col gap-[100px]">
      <Navbar />
      <Hero />
      <Data />
    </main>
  );
}
