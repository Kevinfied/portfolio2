import AboutIcons from "../../components/AboutIcons";
import Experience from "../../components/Experience";
import TopNav from "../../components/TopNav";
import shellStyles from "../../styles/PageShell.module.css";
import styles from "../../styles/About.module.css";

export default function AboutPage() {
  return (
    <main className={`${shellStyles.pageShell} ${styles.page}`}>
      <TopNav />

      <div className={styles.content}>
        <section className={styles.hero}>
          <div className={styles.heroCard}>
            <span className={styles.eyebrow}>About</span>
            <h1 className={styles.title}>Hey, I am Kevin.</h1>
            <p className={styles.lede}>
              I build thoughtful product experiences, translating big ideas into
              clean flows and crisp interfaces. I care about the little details
              that make a digital space feel human.
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Focus</span>
                <span className={styles.statValue}>Product design and front-end</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Based in</span>
                <span className={styles.statValue}>West Lafayette, IN</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Currently</span>
                <span className={styles.statValue}>Computer Science @ Purdue</span>
              </div>
            </div>
          </div>
          <div className={styles.sidebarCard}>
            <h2 className={styles.sectionTitle}>Life outside the screen</h2>
            <p className={styles.sectionText}>
              When I am not shipping features, I am usually sketching, collecting
              little keepsakes, or chasing new playlists. This is a space for the
              stories that inspire the work.
            </p>
            <AboutIcons />
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I do</h2>
          <div className={styles.cards}>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Design systems</h3>
              <p className={styles.cardText}>
                I like building flexible UI foundations so teams can move fast
                without losing the craft.
              </p>
            </article>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Product storytelling</h3>
              <p className={styles.cardText}>
                I help shape the narrative and visual rhythm that makes a product
                feel intuitive and memorable.
              </p>
            </article>
            <article className={styles.card}>
              <h3 className={styles.cardTitle}>Front-end engineering</h3>
              <p className={styles.cardText}>
                I build clean, accessible interfaces in React and ship with a
                focus on performance.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Experience highlights</h2>
          <p className={styles.sectionText}>
            A quick snapshot of the teams and projects that shaped how I work.
          </p>
          <Experience />
        </section>
      </div>
    </main>
  );
}
