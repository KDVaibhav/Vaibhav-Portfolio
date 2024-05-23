import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import RecentProject from "@/components/RecentProject";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <h1>
          <FloatingNav
            navItems={navItems}/>
          <Hero />
          <Grid />
          <RecentProject />
          <Clients />
          <Experience />
          <Approach />
          <Footer/>
        </h1>
      </div>
    </main>
  );
}
