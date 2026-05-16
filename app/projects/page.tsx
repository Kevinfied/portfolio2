import Link from "next/link";
import styles from "../../styles/Projects.module.css";

const projects = [
  {
    title: "Project One",
    subtitle: "Short description goes here.",
    tags: ["Case Study", "UI"],
  },
  {
    title: "Project Two",
    subtitle: "Short description goes here.",
    tags: ["Build", "Design"],
  },
  {
    title: "Project Three",
    subtitle: "Short description goes here.",
    tags: ["Prototype"],
  },
];

export default function ProjectsPage() {
  return (
    <main className={styles.page}>
      <nav className={styles.topNav}>
        <Link className={styles.navLink} href="/">
          home
        </Link>
        <Link className={styles.navLink} href="/projects">
          projects
        </Link>
        <Link className={styles.navLink} href="/#about">
          about
        </Link>
        <Link className={styles.navLink} href="/#collections">
          collections
        </Link>
      </nav>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Projects</p>
        <h1 className={styles.title}>Selected work</h1>
        <p className={styles.subtitle}>
          A growing collection of experiments, launches, and collaborations.
        </p>
      </header>

      <section className={styles.grid}>
        {projects.map((project) => (
          <article key={project.title} className={styles.card}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>{project.title}</h2>
              <div className={styles.tagRow}>
                {project.tags.map((tag) => (
                  <span key={`${project.title}-${tag}`} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className={styles.cardSubtitle}>{project.subtitle}</p>
            <a className={styles.cardLink} href="#">
              View project
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}
