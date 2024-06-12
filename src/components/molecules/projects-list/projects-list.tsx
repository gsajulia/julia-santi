import projects from "@/lib/projects";
import styles from "./project-list.module.css";
import { useState } from "react";
import Image from "next/image";
import { TProjectInfo } from "@/types/base";

interface Props {
  typeId: number;
  sectionChanged: boolean;
}
const ProjectsList = ({ typeId, sectionChanged }: Props) => {
  const [activeProjecImg, setActiveProjectImg] = useState<string>(
    projects[0].img
  );
  const [onMouseHoverInIndex, setOnMouseHoverInIndex] = useState<number>();
  return (
    <div>
      {activeProjecImg && sectionChanged ? (
        <>
          <span className={styles.easterEggText}>You found an easter egg!</span>

          <div className={styles.imgContainer}>
            <Image
              src={activeProjecImg}
              alt="project image"
              width={500}
              height={300}
            />
            <div className={styles.overlay} />
          </div>
        </>
      ) : (
        <div
          onMouseLeave={() => setOnMouseHoverInIndex(undefined)}
          className={styles.projectCardContainer}
        >
          {projects
            .filter(({ mainCategoryId }) => mainCategoryId === typeId)
            .map((project, index) =>
              onMouseHoverInIndex !== index ? (
                <div
                  key={project.id}
                  onClick={() =>
                    window.open(project?.url, "_blank", "noopener,noreferrer")
                  }
                  onMouseEnter={() => {
                    setOnMouseHoverInIndex(index);
                    setActiveProjectImg(project.img);
                  }}
                  className={styles.projectCard}
                >
                  <p className={styles.projectCardTitle}>{project.title}</p>
                  <p className={styles.projectCardBody}>
                    {project.description}
                  </p>
                </div>
              ) : (
                <div
                  key={project.id}
                  className={`${styles.projectCard} ${styles.projectCardCentered}`}
                >
                  <div className={styles.tags}>
                    {project.tags.map((tag, index) => (
                      <strong key={index} className={styles.tag}>
                        {tag.label} {index !== project.tags.length - 1 && " • "}
                      </strong>
                    ))}
                  </div>
                </div>
              )
            )}
        </div>
      )}
    </div>
  );
};

export default ProjectsList;
