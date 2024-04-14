import styles from "./page.module.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import MySkill from "./components/MySkill";
import MyWorks from "./components/MyWorks";

function Home() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <AboutMe />
        <MySkill />
        <MyWorks />
      </div>
    </div>
  );
}

export default Home;