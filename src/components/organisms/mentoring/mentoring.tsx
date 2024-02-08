import styles from "./mentoring.module.css";
import Link from "next/link";
import graduationIcon from "../../../../public/graduating.svg";
import fishIcon from "../../../../public/fish.svg";
import butterflyIcon from "../../../../public/butterfly.svg";
import Image from "next/image";

const Mentoring = () => {
  return (
    <section className={styles.mentoringContainer}>
      <div className={styles.mentoringContent}>
        <h2 className={styles.mentoringTitle}>Mentees</h2>
        <p>
          Passionate about mentoring, I provided guidance on career development,
          upskilling the technologies, and mock interviews. Below are some
          highlights from their feedback:
        </p>
        <div className={styles.reviewContainer}>
          <div className={styles.reviewInfo}>
            <Image width={40} src={fishIcon} alt="Label image" />
            <p>
              She is super smart and gives you practical tips in every step of
              your career that your are. But! Julia has a practical approach in
              guiding you to achieve your career goal based on your previous
              experiences and can easily find holes in your mindset and fill it
              in a fearless way. I was led by her to find positions which
              I&apos;m quite fit with and mentored me on how I can find more
              opportunities by improving my resume. I don&apos;t have enough
              words to describe her, don&apos;t hesitate for a session.
            </p>
          </div>
          <strong>
            Technically competent • Great communicator • Amazing problem solver
            • Very motivational
          </strong>
        </div>

        <div className={styles.reviewContainer}>
          <div className={styles.reviewInfo}>
            <Image width={40} src={butterflyIcon} alt="Label image" />
            <p>
              Julia was amazing, she made me feel comfortable so I could address
              my concerns during the session. In addition, I was impressed with
              her ability to answer my questions clearly and in detail,
              providing valuable insights and feedback. Her experience and
              knowledge are evident, I highly recommend her sessions.
            </p>
          </div>
          <strong>
            Technically competent • Great communicator • Amazing problem solver
            • Very motivational
          </strong>
        </div>

        <div>
          <a
            href="https://adplist.org/mentors/julia-gabriela-santi-acosta"
            className={styles.reviewButton}
          >
            See more reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default Mentoring;
