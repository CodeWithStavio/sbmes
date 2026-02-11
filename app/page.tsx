import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const About = dynamic(() => import("@/components/About"));
const Services = dynamic(() => import("@/components/Services"));
const BoardMembers = dynamic(() => import("@/components/BoardMembers"));
const Membership = dynamic(() => import("@/components/Membership"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <BoardMembers />
        <Services />
        <Membership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
