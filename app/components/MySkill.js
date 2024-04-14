import styles from "../page.module.css";

function MySkill() {
    return (
        <div className={styles.myskill}>
            <h2>私のスキル</h2>
            <h3>大学で学んだこと</h3>
            <ul>
                <li>コンピュータサイエンス全般（アルゴリズム, アーキテクチャ, OS, ネットワークなど）</li>
                <li>応用数学（統計学, 離散数学, 線形代数など）</li>
                <li>C,C++による基礎的なプログラミングの知識</li>
                <li>ドローンの移動通信をC++を用いてコンピュータでシミュレーション</li>
            </ul>
            <h3>実務経験（わずかではありますが）</h3>
            <ul>
                <li>福島県郡山市の税務システム保守・運用</li>
                <li>SQLを用いたデータ抽出</li>
                <li>VBAを用いたExcel業務自動化</li>
            </ul>
            <h3>休職後に独学で勉強したこと</h3>
            <ul>
                <li>HTML,CSS,JavaScript,PHPの基礎</li>
                <li>React,Next.jsを用いたアプリ開発</li>
            </ul>
        </div>
    )

}

export default MySkill;