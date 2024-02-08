import styles from "./about.module.css";
import Link from "next/link";
import graduationIcon from "../../../../public/graduating.svg";
import downloadIcon from "../../../../public/download.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const handleDownloadPdf = async () => {
    const response = await fetch("julia_acosta_english_v3.pdf");

    if (response.status !== 200) {
      console.error(response.status, response.statusText);
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "julia_santi_resume.pdf";
    link.click();
  };

  return (
    <section className={styles.aboutContainer}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
        transition={{ duration: 1 }}
        className={styles.aboutContent}
      >
        <h2 className={styles.aboutTitle}>Who is Júlia?</h2>
        <div className={styles.aboutMe}>
          <Image
            src={"/me.svg"}
            alt="My Profile Image"
            width={300}
            height={300}
            className={styles.profileImage}
          />
          <div className={styles.personDescription}>
            <p>
              I have over 5 years of specialization in building robust
              interfaces using React and Typescript. My professional journey
              extends beyond Frontend development into Backend and Data Science.
              I am currently doing a postgraduate degree in Data Science at USP
              with a focus on Artificial Intelligence. I really enjoy challenges
              within this tech stack, Clean Code, teamwork, and continuous
              learning. In addition to that, I have contributed to the Data
              Science community through the publication of papers, with a focus
              on game mining and climate change prediction.
            </p>
            <button
              onClick={handleDownloadPdf}
              className={styles.downloadCvButton}
            >
              Download Resume{" "}
              <Image width={35} src={downloadIcon} alt="Download resume" />
            </button>
          </div>
        </div>

        <div className={styles.graduationSection}>
          <h4>Graduation</h4>
          <div className={styles.educationText}>
            <Image width={40} src={graduationIcon} alt="Graduation icon" />
            <Link href={"https://www5.usp.br/"}>
              <strong>USP • </strong>
            </Link>
            Postgraduation - Data Science{" "}
            <span className={styles.smallText}>(2023-Current)</span>
          </div>
          <div className={styles.educationText}>
            <Image width={40} src={graduationIcon} alt="Graduation icon" />
            <Link href={"https://www.ufsm.br/"}>
              <strong>UFSM • </strong>
            </Link>
            Bachelor - Information Systems{" "}
            <span className={styles.smallText}>(2017-2022)</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
