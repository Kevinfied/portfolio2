import { FaGithub, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import shellStyles from "../styles/PageShell.module.css";
import TopNav from "../components/TopNav";
import styles from "../styles/Page.module.css";

export default function Home() {
  return (
    <main className={`${shellStyles.pageShell} ${styles.page}`}>
      <TopNav />

      <section className={styles.hero} id="about">
        {/* <div className={styles.nameBadge}>
          <span className={styles.nameText}>Kevin Xu</span>
          <span className={styles.nameDot} aria-hidden="true" />
        </div> */}
        <h1 className={styles.title}>herro! I&apos;m Kevin</h1>
        <div className={styles.detailList}>
          <p className={styles.detailItem}>computer science @ Purdue University</p>
          <p className={styles.detailItem}>software developer</p>
        </div>
        <div className={styles.ctaRow}>
          <a className={`${styles.cta} ${styles.ctaPrimary}`} href="#connect">
            let&apos;s connect!
          </a>
          <a className={`${styles.cta} ${styles.ctaGhost}`} href="#message">
            leave a message
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <span className={styles.footerText}>thanks for stopping by</span>
        <div className={styles.socialRow}>
          <a
            className={styles.social}
            href="https://www.linkedin.com/in/qiyuan-xu/"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            className={styles.social}
            href="https://github.com/Kevinfied"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a className={styles.social} href="#" aria-label="X">
            <FaXTwitter />
          </a>
          <a className={styles.social} href="#" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>
      </footer>
      <img
        className={styles.cornerGif}
        src="/mudkipgif.gif"
        alt="Mudkip"
      />
    </main>
  );
}
