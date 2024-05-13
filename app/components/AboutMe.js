import styles from "../page.module.css";

function AboutMe() {
    return (
        <div className={styles.aboutme}>
            <h2>自己紹介</h2>
            <p>福島県の高校を卒業後、新潟大学工学部情報電子学科に入学。在学中にコンピュータサイエンスや情報工学に魅了されエンジニアを志す。
                大学を卒業後、地元のIT企業に就職。しかし、体調不良によりわずか3ヶ月で休職。それでもエンジニアになる夢をあきらめきれずに
                転職活動を行っている。
            </p>
        </div>
    )

}

export default AboutMe;