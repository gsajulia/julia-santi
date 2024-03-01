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
      <div style={{ position: "relative" }}>
        <About />
        <Canvas
          className={styles.backgroundAnimation}
          camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense>
            <Sky isRotating={true} />
          </Suspense>
        </Canvas>
      </div>
    </main>
  );
}
