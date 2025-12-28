import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import FirstVideo from "./sections/FirstVideo";
import Jason from "./sections/Jason";
import SecondVideo from "./sections/SecondVideo";
import Lucia from "./sections/Lucia";
import PostCard from "./sections/PostCard";
import Final from "./sections/Final";
import Outro from "./sections/Outro";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

function App() {
  useGSAP(() => {
    gsap.fromTo(
      ".developer-link",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.1,
        repeat: 6,
        yoyo: true,
        ease: "power1.inOut",
        delay: 1,
      }
    );
  });
  return (
    <main>
      <NavBar />
      <Hero />
      <FirstVideo />
      <Jason />
      <SecondVideo />
      <Lucia />
      <PostCard />
      <Final />
      <Outro />
      <footer className="w-full py-10">
        <p className="flex justify-center items-center text-white group">
          <a
            href="https://www.vasanthrs.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="developer-link relative font-bold text-xs md:text-sm tracking-widest uppercase italic transition-all duration-300 hover:text-pink-500"
          >
            <span className="text-pink-500 mr-2 drop-shadow-[0_0_5px_#ec4899]">
              ⚡
            </span>
            Project by VasanthRS
            <span className="opacity-40 group-hover:opacity-100 ml-2 text-[10px] transition-opacity">
              // LEONIDA STATE
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-500 group-hover:w-full"></span>
          </a>
        </p>
      </footer>
    </main>
  );
}

export default App;
