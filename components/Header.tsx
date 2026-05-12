// @ts-nocheck
import styles from "../styles/Header.module.css";

export default function Header({ isDark, onToggleTheme }) {
  return (
    <header className={styles.header}>
      <div className={styles.identity}>
        <div className={styles.nameRow}>
          <h1 className={styles.name}>Kevin Xu</h1>
          <div className={styles.avatarRow}>
            <div className={styles.avatar}>
              <img
                className={styles.avatarImage}
                src="/archer.png"
                alt="Archer"
              />
            </div>
            <div className={styles.avatar}>
              <img
                className={styles.avatarImage}
                src="/xiaojie.jpg"
                alt="Xiaojie"
              />
            </div>
          </div>
        </div>
        <p className={styles.subtitle}>CS & AI @ Purdue University</p>
        <p className={styles.bio}>
          Hello explore me
        </p>
        <div className={styles.videoCta}>
          <div className={styles.thumbnail} />
          <div className={styles.videoText}>
            <span className={styles.videoEyebrow}>CLICK TO WATCH</span>
            <span className={styles.videoTitle}>About Me</span>
            <span className={styles.videoMeta}>Updated May 2026</span>
          </div>
        </div>
      </div>
      <div className={styles.side}>
        <button className={styles.toggle} onClick={onToggleTheme}>
          {isDark ? "Dark" : "Light"} mode
        </button>
        <nav className={styles.links}>
          <a className={styles.link} href="https://www.linkedin.com/in/qiyuan-xu/">
            LinkedIn
          </a>
          <a className={styles.link} href="https://github.com/Kevinfied">
            GitHub
          </a>
          <a className={styles.link} href="#">
            YouTube
          </a>
          <a className={styles.link} href="#">
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
