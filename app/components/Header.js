import styles from "../page.module.css";

function Header() {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>
              My Portfolio
            </h1>
        </div>
    );
};

export default Header;
