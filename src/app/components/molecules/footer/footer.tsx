import styles from "./footer.module.css";
import starsIcon from "../../../../../public/stars.svg";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInfo}>
                <p className={styles.mainFooterText}>
                    <Image width={45} src={starsIcon} alt="Stars icon" />
                    Developed by Júlia Gabriela Santi Acosta
                </p>
                <p> julia.gs.acosta@gmail.com</p>
            </div>
            <p className={styles.extraInfo}>
                Icons made by
                <a
                    href="https://www.flaticon.com/authors/iconixar"
                    title="iconixar"
                >
                    iconixar
                </a>
                and
                <a href="https://www.freepik.com" title="Freepik">
                    Freepik
                </a>
                from
                <a href="https://www.flaticon.com/" title="Flaticon">
                    Flaticon
                </a>
            </p>
        </footer>
    );
};

export default Footer;
