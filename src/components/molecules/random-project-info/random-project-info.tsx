import React from "react";
import styles from "./random-project-info.module.css";
import Image from "next/image";
import { TProjectInfo } from "@/types/base";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const RandomProjectInfo = ({ project }: { project: TProjectInfo }) => {
  const { title, description, tags, githubGif } = project;
  const isGifImg = typeof githubGif === "string";
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
      transition={{ duration: 1 }}
      className={styles.projectInfo}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      {isGifImg && (
        <img
          width={500}
          height={300}
          className={styles.challengeImage}
          src={githubGif}
          alt={title}
        />
      )}

      {!isGifImg && githubGif && (
        <Image
          src={githubGif}
          alt="Descrição da Imagem"
          width={500}
          height={300}
        />
      )}

      <div className={styles.tags}>
        {tags?.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default RandomProjectInfo;
