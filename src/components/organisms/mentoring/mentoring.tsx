import styles from "./mentoring.module.css";
import fishIcon from "../../../../public/fish.svg";
import butterflyIcon from "../../../../public/butterfly.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

const Mentoring = () => {
  const chooseRandomReview = Math.random();
  const [selectedText, setSelectedText] = useState({
    firstReview: "",
    secondReview: "",
  });

  useEffect(() => {
    const review1 =
      "She is super smart and gives you practical tips in every step of your career that your are. But! Julia has a practical approach in guiding you to achieve your career goal based on your previous experiences and can easily find holes in your mindset and fill it in a fearless way. I was led by her to find positions which I'm quite fit with and mentored me on how I can find more opportunities by improving my resume. I don't have enough words to describe her, don't hesitate for a session.";
    const review2 =
      "Julia Gabriela is amazing. Her boundless energy and genuine excitement for guiding me were evident in every interaction we had. She always encouraged me to explore new ideas, take risks, and embrace challenges with an optimistic mindset. Her unwavering positivity created an uplifting and motivating atmosphere that inspired me to push beyond my limits and strive for excellence in my journey into the tech field. Thank you so much!🤩";
    const review3 =
      "Julia was amazing, she made me feel comfortable so I could address my concerns during the session. In addition, I was impressed with her ability to answer my questions clearly and in detail, providing valuable insights and feedback. Her experience and knowledge are evident, I highly recommend her sessions.";
    const review4 =
      "Julia was an excellent mentor, she was very prepared for our call and gave me plenty of space to ask questions and we had a really cool exchange about career and technology.";

    const numeroAleatorio = Math.random();

    setSelectedText((previousText) => ({
      firstReview: chooseRandomReview < 0.5 ? review1 : review2,
      secondReview: chooseRandomReview < 0.5 ? review3 : review4,
    }));
  }, []);

  return (
    <section className={styles.mentoringContainer}>
      <div className={styles.mentoringContent}>
        <h2 className={styles.mentoringTitle}>Mentees</h2>
        <div className={styles.mentoringOverview}>
          <p>
            Passionate about mentoring, I provided guidance on career
            development, upskilling the technologies, and mock interviews. Below
            are some highlights from their feedback:
          </p>
          <span>
            <h2>{" 1000+ "}</h2>
            minutes of mentoring
          </span>
        </div>
        <div className={styles.reviewContainer}>
          <div className={styles.reviewInfo}>
            <Image width={40} src={fishIcon} alt="Label image" />
            <p>{selectedText.firstReview}</p>
          </div>
          <strong>
            Technically competent • Great communicator • Amazing problem solver
            • Very motivational
          </strong>
        </div>

        <div className={styles.reviewContainer}>
          <div className={styles.reviewInfo}>
            <Image width={40} src={butterflyIcon} alt="Label image" />
            <p>{selectedText.secondReview}</p>
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
