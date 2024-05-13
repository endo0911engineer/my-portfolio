import Link from "next/link";
import styles from "../page.module.css";

function MyWorks() {
    return (
        <div className={styles.myworks}>
            <h2>私の作品</h2>
            <div className={styles.works}>
                <div>
                    <h3>学生時代に行っていた研究</h3>
                    <Link href="https://github.com/endo0911engineer/Drone-communication-Wooden-structure-">
                        githubのコード
                    </Link>
                </div>
                
                <div>
                    <h3>独学で作成したWebアプリ</h3>
                    <Link href="https://github.com/endo0911engineer/react-matplotlib">
                        githubのコード
                    </Link>
                    <br /><br />
                    <Link href="https://react-matplotlib-ge9wl3g1l-shins-projects-57cbb163.vercel.app/">
                        プロジェクトのリンク
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default MyWorks;