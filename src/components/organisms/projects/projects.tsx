import styles from "./projects.module.css";
import backendImage from "../../../../public/code-backend.png";
import frontendImage from "../../../../public/code-frontend.png";
import datasScienceImage from "../../../../public/code-datascience.png";
import starIcon from "../../../../public/star.svg";
import Image from "next/image";
import { TProjectsSection } from "./projects.types";

const Projects = ({ activeSection }: TProjectsSection) => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.projectsContent}>
        {activeSection === "frontend" && (
          <>
            <h2 className={styles.projectsTitle}>Frontend</h2>
            <div className={styles.descriptionContainer}>
              <Image
                sizes="(min-width: 768px) 100px"
                width={500}
                src={frontendImage}
                alt="Frontend code challenge example"
              />
              <div className={styles.descriptionContent}>
                <p className={styles.description}>
                  I have completed over 40 projects, mainly using React,
                  TypeScript, JavaScript, and Next.js. A significant portion of
                  these were part of an intensive 35-week coding challenge.You
                  can explore my portfolio of work on both my GitHub and
                  LinkedIn profiles, where I've detailed my contributions and
                  the technologies used in each project.
                </p>
                <div>
                  <strong>Highlights</strong>
                  <p className={styles.highlightProjects}>
                    <Image width={16} src={starIcon} alt="Highlight project" />
                    <a href="https://kanban-boracodar.vercel.app/">Kanban</a>
                    <Image width={16} src={starIcon} alt="Highlight project" />
                    <a href="https://carnaval-searcher.vercel.app/">Carnival</a>
                    <Image width={16} src={starIcon} alt="Highlight project" />
                    <a href="https://weather-dashboard-eosin.vercel.app/">
                      Climate dashboard
                    </a>
                  </p>
                </div>
                <strong>
                  React • Typescript • Javascript • Next • HTML • CSS
                </strong>
              </div>
            </div>
          </>
        )}

        {activeSection === "datascience" && (
          <div>
            <h2 className={styles.projectsTitle}>Data Science</h2>
            <div className={styles.descriptionContainer}>
              <Image
                sizes="(min-width: 768px) 100px"
                width={500}
                src={datasScienceImage}
                alt="Data Science code challenge example"
              />
              <div className={styles.descriptionContent}>
                <p className={styles.description}>
                  I have made contributions to the field of data science through
                  the publication of 2 research articles, the majority of which
                  were developed in R. Additionally, I did my thesis project, 'A
                  Neural Network System for Estimating Paleotemperatures Based
                  on Foraminifera Associations,' on this same field.
                </p>
                <div>
                  <strong>Highlights</strong>
                  <p className={styles.highlightProjects}>
                    <Image width={16} src={starIcon} alt="Highlight project" />
                    <a href="https://www.sbgames.org/sbgames2019/files/papers/ComputacaoShort/196631.pdf">
                      Data mining 7 Wonders
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
                sizes="(min-width: 768px) 100px"
                width={500}
                src={backendImage}
                alt="Backend code challenge example"
              />
              <div className={styles.descriptionContent}>
                <p className={styles.description}>
                  This project is a System that Allows Parents to Limit Their
                  Children’s Access and Playing Time to Steam Games. This
                  multidisciplinary project involved developing a web interface
                  and backend to control children's gaming activities.
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
