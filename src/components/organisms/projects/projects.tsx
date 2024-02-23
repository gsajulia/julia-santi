import styles from "./projects.module.css";
import backendImage from "../../../../public/code-backend.png";
import frontendImage from "../../../../public/weatherDashboard.gif";
import datasScienceImage from "../../../../public/code-datascience.png";
import starIcon from "../../../../public/star.svg";
import Image from "next/image";
import { TProjectsSection } from "./projects.types";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Structure from "@/models/structure";
import RandomProjectInfo from "@/components/molecules/random-project-info/random-project-info";
import { getAllGithubRepos, getRepoFiles } from "@/services/github";
import { TGithubRepository } from "@/types/base";

const MAX_PER_PAGE = 100;

const defaultFrontendProject = {
  title: "Climate dashboard",
  description:
    "A weather dashboard is the #10 boracodar challenge. This dashboard provides real-time climate data for São Paulo, leveraging the open-source API provided by Open Meteo",
  tags: ["React ", "Javascript", "CSS", "HTML"],
  githubGif: frontendImage,
};

const Projects = ({
  activeSection,
  projectInfoRandomized,
}: TProjectsSection) => {
  console.log(projectInfoRandomized);
  const [isRotating, setIsRotating] = useState(false);
  const [ball, setBall] = useState(false);
  const [infoAboutProject, setInfoAboutProject] =
    useState<TProjectsSection["projectInfoRandomized"]>(null);

  const handleAnimationEnd = async () => {
    setBall(false);
    setInfoAboutProject(
      projectInfoRandomized?.githubGif
        ? projectInfoRandomized
        : defaultFrontendProject
    );
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.projectsContent}>
        {activeSection === "frontend" && (
          <>
            <h2 className={styles.projectsTitle}>Frontend</h2>
            <div className={styles.descriptionContainer}>
              {/*<button onClick={() => setBall(true)}>ball</button>
              <div
                style={{
                  width: "100%", // Correspondente a w-full do Tailwind
                  height: "50vh", // Correspondente a h-screen do Tailwind
                  backgroundColor: "transparent", // Correspondente a bg-transparent do Tailwind
                  //cursor: isRotating ? "grabbing" : "grab",
                }}
              >
              <Canvas camera={{ near: 0.1, far: 1000 }}>
                  {" "}
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
              </div>*/}
              <div className={styles.descriptionContent}>
                {!infoAboutProject ? (
                  <>
                    <p className={styles.description}>
                      I have completed over 40 projects, mainly using React,
                      TypeScript, JavaScript, and Next.js. A significant portion
                      of these were part of an intensive 30-week coding
                      challenge.You can explore my portfolio of work on both my
                      GitHub and LinkedIn profiles, where I&apos;ve detailed my
                      contributions and the technologies used in each project.
                    </p>
                    <div>
                      <strong>Highlights</strong>
                      <p className={styles.highlightProjects}>
                        <Image
                          width={16}
                          src={starIcon}
                          alt="Highlight project"
                        />
                        <a href="https://kanban-boracodar.vercel.app/">
                          Kanban
                        </a>
                        <Image
                          width={16}
                          src={starIcon}
                          alt="Highlight project"
                        />
                        <a href="https://carnaval-searcher.vercel.app/">
                          Carnival
                        </a>
                        <Image
                          width={16}
                          src={starIcon}
                          alt="Highlight project"
                        />
                        <a href="https://weather-dashboard-eosin.vercel.app/">
                          Climate dashboard
                        </a>
                      </p>
                    </div>
                    <strong>
                      React • Typescript • Javascript • Next • HTML • CSS
                    </strong>
                  </>
                ) : (
                  <RandomProjectInfo project={infoAboutProject} />
                )}
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

const fetchGifUrlFromRepo = async (
  repo: string,
  dirs = ["public", "assets"]
) => {
  for (const dir of dirs) {
    try {
      const data = await getRepoFiles(repo, dir);
      if (Array.isArray(data)) {
        const gifFile = data.find((file) => file.name.endsWith(".gif"));
        if (gifFile) {
          return gifFile.download_url;
        }
      }
    } catch (error) {
      console.error(
        `Erro ao buscar arquivos no diretório ${dir} do repositório ${repo}:`,
        error
      );
    }
  }
  return null;
};

export async function getStaticProps() {
  const getAllPagesGithubInfo = async () => {
    try {
      let allRepositories: TGithubRepository[] = [];
      let page = 1;
      let hasMorePages = true;

      while (hasMorePages) {
        const response = await getAllGithubRepos(
          `page=${page}&per_page=${MAX_PER_PAGE}`
        );
        allRepositories = [...allRepositories, ...response];

        if (response.length === 0 || response.length < MAX_PER_PAGE) {
          hasMorePages = false;
        } else {
          page++;
        }
      }

      const portfolioRepositories = allRepositories.filter(
        ({ description }) => description && description.includes("Portfolio -")
      );

      console.log("hello", portfolioRepositories);

      const randomIndex = Math.floor(
        Math.random() * portfolioRepositories.length
      );
      const selectedProject = portfolioRepositories[randomIndex];

      const githubGif = await fetchGifUrlFromRepo(selectedProject.name);

      const infoAboutProject = {
        ...selectedProject,
        githubGif: githubGif ?? null,
      };

      return {
        projectInfoRandomized: infoAboutProject,
      };
    } catch (e) {
      console.log(e);
      return { projectInfoRandomized: null };
    }
  };

  const response = await getAllPagesGithubInfo();

  return {
    props: response.projectInfoRandomized,
    revalidate: 86400,
  };
}

export default Projects;
