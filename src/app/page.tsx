import Experience from "./components/organisms/experience/experience";
import Introduction from "./components/organisms/introduction/introduction";
import styles from "./page.module.css";
import { inter } from "@/app/ui/fonts";

export default function Home() {
    return (
        <main className={`${inter.className} antialiased ${styles.main}`}>
            <Introduction />
            <Experience />
        </main>
    );
}
