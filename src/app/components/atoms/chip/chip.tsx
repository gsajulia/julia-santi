import styles from "./chip.module.css";
import { TChip } from "./chip.types";

const Chip = ({ title, color }: TChip) => {
    return (
        <div>
            <span style={{ background: color }} className={styles.chip}>
                {title}
            </span>
        </div>
    );
};

export default Chip;
