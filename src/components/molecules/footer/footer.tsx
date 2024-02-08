import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInfo}>
        <p className={styles.mainFooterText}>
          Developed by Júlia Gabriela Santi Acosta
        </p>
      </div>
    </footer>
  );
};

export default Footer;
