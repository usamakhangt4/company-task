import Image from "next/image";
import {Inter} from "next/font/google";
import {Navbar} from "@/components/organisms/Navbar";
import {Sidebar} from "@/components/organisms/Sidebar";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
  return (
    <section className="h-screen flex flex-col">
      <Navbar />
      <main className="flex items-stretch h-full">
        <Sidebar />
        <section className="flex-1">main page</section>
      </main>
    </section>
  );
}
