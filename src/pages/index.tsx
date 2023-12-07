import Experience from "@/components/organisms/experience/experience";
import Introduction from "@/components/organisms/introduction/introduction";
import styles from "./page.module.css";
import { inter } from "@/ui/fonts";
import { getAllGithubRepos } from "@/services/github";

export default function Home({ portfolioRepositories }: any) {
    //TODO fix this type
    return (
        <main className={`${inter.className} antialiased ${styles.main}`}>
            <Introduction />
            <Experience portfolioRepositories={portfolioRepositories} />
        </main>
    );
}

export async function getStaticProps() {
    const getGithubInfo = async () => {
        try {
            const responseFirstPage = await getAllGithubRepos("page=1");
            const responseSecondPage = await getAllGithubRepos("page=2");

            const repositories = [...responseFirstPage, ...responseSecondPage];

            const portfolioRepositories = repositories.filter(
                ({ description }) =>
                    description && description.includes("Portfolio -")
            );
            return portfolioRepositories;
        } catch (e) {
            console.log(e);
            return [];
        }
    };

    const portfolioRepositories = await getGithubInfo();

    return {
        props: {
            portfolioRepositories,
        },
        revalidate: 86400, // Regenerate once per day
    };
}
