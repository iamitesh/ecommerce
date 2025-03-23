'use client';

import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Experience from "@/components/Experiencs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Skills from "@/components/Skills";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 p-10">
      <Header/>
      <main className="flex flex-col items-center text-center w-full max-w-6xl">
        <Skills />
        <Experience />
        <Education />
        <Achievements />
      </main>
      <Footer />
    </div>
  );
}
