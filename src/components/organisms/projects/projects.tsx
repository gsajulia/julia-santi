import styles from "./projects.module.css";
import backendImage from "../../../../public/code-backend.png";
import datasScienceImage from "../../../../public/code-datascience.png";
import starIcon from "../../../../public/star.svg";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import Structure from "@/models/structure";
import ProjectsList from "@/components/molecules/projects-list/projects-list";
import { frontendTag } from "@/lib/tags";

export interface Props {
  activeSection: string;
}

const Projects = ({ activeSection }: Props) => {
  const [isRotating, setIsRotating] = useState(false);
  const [ball, setBall] = useState(false);
  const [sectionChanged, setSectionChanged] = useState(false);

  const handleAnimationEnd = async () => {
    setBall(false);
    setSectionChanged(false);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let ballTimer: NodeJS.Timeout;
    if (isRotating && !ball) {
      setBall(true);
      setSectionChanged(true);

      const timer = setTimeout(() => {
        setIsRotating(false);
      }, 4000);
      const ballTimer = setTimeout(() => {
        setBall(false);
      }, 100000);
    }
    return () => {
      if (timer) clearTimeout(timer);
      if (ballTimer) clearTimeout(ballTimer);
    };
  }, [isRotating]);

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.projectsContent}>
        {activeSection === "frontend" && (
          <>
            <h2 className={styles.projectsTitle}>Frontend</h2>
            <div className={styles.descriptionContainer}>
              <div
                className={styles.canvaContainer}
                style={{
                  cursor: isRotating ? "grabbing" : "grab",
                }}
              >
                <Canvas camera={{ near: 0.1, far: 1000 }}>
                  <Suspense>
                    <directionalLight position={[1, 1, 1]} intensity={4} />
                    <ambientLight intensity={0.5} />
                    <hemisphereLight groundColor={"#fff"} intensity={1} />
                    <Structure
                      isRotating={isRotating}
                      setIsRotating={setIsRotating}
                      setCurrentStage={() => {}}
                    />
                  </Suspense>
                </Canvas>
                {ball && (
                  <div
                    className={styles.ball}
                    onAnimationEnd={handleAnimationEnd}
                  ></div>
                )}
              </div>
              <div className={styles.descriptionContent}>
                <>
                  <p className={styles.description}>
                    I have contributed with over 40 projects, mainly using
                    React, TypeScript, JavaScript, and Next.js. A significant
                    portion of these were part of an intensive 30-week coding
                    challenge.You can explore my portfolio of work on both my
                    GitHub and LinkedIn profiles, where I&apos;ve detailed my
                    contributions and the technologies used in each project.
                    Mostly of the projects are listed bellow.
                  </p>
                  <ProjectsList
                    typeId={frontendTag.id}
                    sectionChanged={sectionChanged}
                  />
                </>
              </div>
            </div>
          </>
        )}

        {activeSection === "datascience" && (
          <div>
            <h2 className={styles.projectsTitle}>Data Science</h2>
            <div className={styles.descriptionContainer}>
              <Image
                quality={100}
                width={500}
                className={styles.challengeImage}
                src={datasScienceImage}
                alt="Data Science code challenge example"
              />
              <div className={styles.descriptionContent}>
                <p className={styles.description}>
                  I have made contributions to the field of data science through
                  the publication of 2 research articles, in which one of them
                  was the{" "}
                  <a href="https://www.sbgames.org/sbgames2019/en/computing/">
                    best short paper of Brazilian Symposium on Games 2019
                  </a>{" "}
                  and the majority of the research were developed using R.
                  Additionally, I did my thesis project on this field: A Neural
                  Network System for Estimating Paleotemperatures Based on
                  Foraminifera Associations.
                </p>
                <div>
                  <strong>Highlights</strong>
                  <p className={styles.highlightProjects}>
                    <Image width={16} src={starIcon} alt="Highlight project" />
                    <a href="https://www.sbgames.org/sbgames2019/files/papers/ComputacaoShort/196631.pdf">
                      Data mining 7 Wonders (Winner of SBGames 2019)
                    </a>
                    <Image width={16} src={starIcon} alt="Highlight project" />
                    <a href="https://www.sbgames.org/proceedings2020/ComputacaoShort/208553.pdf">
                      7 Wonders AI-based players
                    </a>
                    <Image width={16} src={starIcon} alt="Highlight project" />
                    <a href="http://www-usr.inf.ufsm.br/~joaquim/pdf/TG/2021%20-%20Julia%20Santi%20Acosta.pdf">
                      Foraminifera Predictor
                    </a>
                  </p>
                </div>
                <strong>R • Python • Neural Networks</strong>
              </div>
            </div>
          </div>
        )}

        {activeSection === "backend" && (
          <div>
            <h2 className={styles.projectsTitle}>Backend</h2>
            <div className={styles.descriptionContainer}>
              <Image
                quality={100}
                width={500}
                className={styles.challengeImage}
                src={backendImage}
                alt="Backend code challenge example"
              />
              <div className={styles.descriptionContent}>
                <p className={styles.description}>
                  This project is a System that Allows Parents to Limit Their
                  Children’s Access and Playing Time to Steam Games. This
                  multidisciplinary project involved developing a web interface
                  and backend to control children&apos;s gaming activities.
                </p>
                <div>
                  <strong>Highlights</strong>
                  <p className={styles.highlightProjects}>
                    <Image width={16} src={starIcon} alt="Highlight project" />
                    <a href="https://github.com/Game-Time-Control/Back-end">
                      Time Control
                    </a>
                  </p>
                </div>
                <strong>Node.js • Typescript • MongoDB</strong>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
