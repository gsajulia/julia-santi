import Experience from "@/components/organisms/experience/experience";
import Introduction from "@/components/organisms/introduction/introduction";
import styles from "./page.module.css";
import { inter } from "@/ui/fonts";
import { getAllGithubRepos } from "@/services/github";
import { TGithubRepository } from "@/models/base";
import About from "@/components/organisms/about/about";
import Mentoring from "@/components/organisms/mentoring/mentoring";

interface TTechnologyProjectsMap {
  [key: string]: string[];
}

interface THome {
  portfolioRepositories: TGithubRepository[];
  technologyToProjects: TTechnologyProjectsMap;
}

const MAX_PER_PAGE = 100;
//portfolioRepositories={portfolioRepositories}

export default function Home({
  portfolioRepositories,
  technologyToProjects,
}: THome) {
  console.log(portfolioRepositories);
  console.log(technologyToProjects);
  return (
    <main className={`${inter.className} antialiased ${styles.main}`}>
      <Introduction />
      <Experience />
      <About />
      <Mentoring />
    </main>
  );
}

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

      const technologyToProjects: TTechnologyProjectsMap = {};

      portfolioRepositories.forEach((repo) => {
        repo.topics.forEach((topic) => {
          if (!technologyToProjects[topic]) {
            technologyToProjects[topic] = [];
          }
          technologyToProjects[topic].push(repo.name);
        });
      });

      return {
        portfolioRepositories,
        technologyToProjects,
      };
    } catch (e) {
      console.log(e);
      return [];
    }
  };

  const response = await getAllPagesGithubInfo();

  return {
    props: response,
    revalidate: 86400, // Regenerar uma vez por dia
  };
}
