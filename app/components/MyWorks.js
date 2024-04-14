import Link from "next/link";
import styles from "../page.module.css";

function MyWorks() {
    return (
        <div className={styles.myworks}>
            <h2>私の作品</h2>
            <p>いずれもWeb系の勉強を始めてから約3ヶ月時点の作品になります。</p>
            <div className={styles.works}>
                <div>
                    <h3>アウトプット用ブログ</h3>
                    <Link href="https://github.com/endo0911engineer/blog-with-microcms">
                        githubのコード
                    </Link>
                    <Link href="https://blog-with-microcms-deploy.vercel.app/">
                        プロジェクトのリンク
                    </Link>
                </div>
                
                <div>
                    <h3>男磨き日記</h3>
                    <Link href="https://github.com/endo0911engineer/otokomigaki-app">
                        githubのコード
                    </Link>
                    <Link href="https://otokomigaki-app.vercel.app/">
                        プロジェクトのリンク
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default MyWorks;