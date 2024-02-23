"use client";
import Experience from "@/components/organisms/experience/experience";
import Introduction from "@/components/organisms/introduction/introduction";
import styles from "./page.module.css";
import { inter } from "@/ui/fonts";
import About from "@/components/organisms/about/about";
import Mentoring from "@/components/organisms/mentoring/mentoring";
import Projects from "@/components/organisms/projects/projects";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Sky } from "@/models/sky";

export default function Home() {
  const [isRotating, setIsRotating] = useState(false);
  const [activeSection, setActiveSection] = useState("frontend");
  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <main className={`${inter.className} antialiased ${styles.main}`}>
      <Introduction
        activeSection={activeSection}
        handleSectionClick={handleSectionClick}
      />
      <Projects activeSection={activeSection} />
      <Experience />
      <Mentoring />
      <div>
        <About />
      </div>
      <Canvas
        style={{
          zIndex: "-2",
          width: "100%", // Correspondente a w-full do Tailwind
          height: "100vh", // Correspondente a h-screen do Tailwind
          backgroundColor: "transparent", // Correspondente a bg-transparent do Tailwind
          cursor: isRotating ? "grabbing" : "grab",
        }}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense>
          <Sky isRotating={true} />
        </Suspense>
      </Canvas>
    </main>
  );
}
