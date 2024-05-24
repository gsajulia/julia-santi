"use client";
import Experience from "@/components/organisms/experience/experience";
import Introduction from "@/components/organisms/introduction/introduction";
import styles from "./page.module.css";
import { inter } from "@/ui/fonts";
import About from "@/components/organisms/about/about";
import Mentoring from "@/components/organisms/mentoring/mentoring";
import Projects from "@/components/organisms/projects/projects";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import { Sky } from "@/models/sky";
import Structure from "@/models/structure";
import { Html } from "@react-three/drei";

export default function Home() {
  const [activeSection, setActiveSection] = useState("frontend");
  const [catRotating, setCatRotating] = useState(false);
  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };
  const cenarioOptions = ["stars.glb", "sky.glb"];
  // const [choosenScenario, setChoosenScenario] = useState<string>(
  // );
  const randomIndex = Math.floor(Math.random() * cenarioOptions.length);
  const adjustStructureForScreenSize = () => {
    let screenScale, screenPosition;

    // if (window.innerWidth < 768) {
    //   screenScale = [0.9, 0.9, 0.9];
    //   screenPosition = [0, -6.5, -43.4];
    // } else {
    //   screenScale = [1, 1, 1];
    //   screenPosition = [0, -6.5, -43.4];
    // }

    return [screenScale, screenPosition];
  };
  const [structureScale, structurePosition] = adjustStructureForScreenSize();

  // useEffect(() => {
  //   const randomIndex = Math.floor(Math.random() * cenarioOptions.length);
  //   setChoosenScenario(cenarioOptions[randomIndex]);
  // }, []);

  return (
    <main className={`${inter.className} antialiased ${styles.main}`}>
      <Introduction
        activeSection={activeSection}
        handleSectionClick={handleSectionClick}
      />
      <Projects activeSection={activeSection} />
      <Experience />
      <Mentoring />{" "}
      {/*
      #TODO creative idea about the 3d structure
      <Canvas
        id="cat-suspenser"
        className={`w-full h-screen bg-transparent ${
          catRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        // camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Structure
            isRotating={catRotating}
            setIsRotating={setCatRotating}
            // rotation={[0.1, 4.7077, 0]}
            position={structurePosition}
            scale={structureScale}
          />
        </Suspense>
      </Canvas> */}
      <div style={{ position: "relative" }}>
        <About />
        <Canvas
          id="sky-rotating"
          className={styles.backgroundAnimation}
          camera={{ near: 0.1, far: 1000 }}
        >
          <Suspense
            fallback={
              <Html>
                <div style={{ background: "#151316", width: "100%" }} />
              </Html>
            }
          >
            <Sky
              isRotating={true}
              cenarioOption={cenarioOptions[randomIndex]}
            />
          </Suspense>
        </Canvas>
      </div>
    </main>
  );
}
