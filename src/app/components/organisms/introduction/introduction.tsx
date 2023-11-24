import Image from "next/image";
import Link from "next/link";
import styles from "./introduction.module.css";

const Introduction = () => {
    return (
        <section className={styles.introduction}>
            <div className={styles.profile}>
                <Image
                    src="/profile-image-pink.png"
                    alt="My Profile Picture"
                    width={700}
                    height={600}
                />
            </div>
            <h1>
                Hi, I'm Júlia, a <mark>FullStack developer</mark>!
            </h1>
            <p>
                I have over 5 years of specialization in building robust
                interfaces using React and Typescript. My professional journey
                extends beyond Frontend development into Backend and Data
                Science. I am currently doing a postgraduate degree in Data
                Science at USP with a focus on Artificial Intelligence. I really
                enjoy challenges within this tech stack, Clean Code, teamwork,
                and continuous learning. In addition to that, I have contributed
                to the Data Science community through the publication of papers,
                with a focus on game mining and climate change prediction.
            </p>
            <div>
                Graduating - Data Science (2023-Present) |{" "}
                <Link href={"https://www5.usp.br/"}>USP</Link>
            </div>
            <div>
                Graduate - Information Systems (2017-2022) |{" "}
                <Link href={"https://www.ufsm.br/"}> UFSM</Link>
            </div>
            <div></div>
        </section>
    );
};

export default Introduction;
