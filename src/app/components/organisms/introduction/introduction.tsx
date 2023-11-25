import Image from "next/image";
import Link from "next/link";
import styles from "./introduction.module.css";
import graduationIcon from "../../../../../public/graduating.svg";
import chatIcon from "../../../../../public/message.png";

const Introduction = () => {
    return (
        <section className={styles.introduction}>
            <div className={styles.profile}>
                <Image
                    src="/profile-image-pink.png"
                    alt="My Profile Picture"
                    width={700}
                    height={600}
                    quality={100}
                />
            </div>
            <h1>
                Hi, I'm Júlia, a{" "}
                <mark className={styles.mark}>FullStack developer</mark>!
            </h1>
            <p className={styles.description}>
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
            <div className={styles.educationText}>
                <Image width={50} src={graduationIcon} alt="Graduation" />
                Postgraduation - Data Science{" "}
                <span className={styles.smallText}>(2023-Present)</span> |{"  "}
                <Link href={"https://www5.usp.br/"}> USP</Link>
            </div>
            <div className={styles.educationText}>
                <Image width={50} src={graduationIcon} alt="Graduation icon" />
                Bachelor - Information Systems{" "}
                <span className={styles.smallText}>(2017-2022)</span> |{"  "}
                <Link href={"https://www.ufsm.br/"}> UFSM</Link>
            </div>
            <div className={styles.educationText}>
                <Image width={45} src={chatIcon} alt="Chat icon" /> Fluent with{" "}
                <mark className={styles.markLanguage}>English</mark> and{" "}
                <mark className={styles.markLanguage}>Portuguese</mark>
            </div>
        </section>
    );
};

export default Introduction;
