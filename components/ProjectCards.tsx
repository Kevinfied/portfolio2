import styles from "../styles/ProjectCards.module.css";

const projects = [
  {
    title: "Signal Trace",
    subtitle: "Realtime log explorer for distributed teams.",
    meta: "Observability",
  },
  {
    title: "Orbit UI",
    subtitle: "Component library for fast product prototyping.",
    meta: "Design Systems",
  },
  {
    title: "Midnight Cache",
    subtitle: "Edge-first caching layer with smart invalidation.",
    meta: "Infrastructure",
  },
  {
    title: "Ridgeway",
    subtitle: "Analytics dashboard for energy marketplaces.",
    meta: "Data Products",
  },
  {
    title: "Studio Halo",
    subtitle: "Creator portfolio builder with live previews.",
    meta: "SaaS",
  },
  {
    title: "Vector Mail",
    subtitle: "AI-assisted triage for technical inboxes.",
    meta: "Automation",
  },
];

export default function ProjectCards() {
  return (
    <div className={styles.grid}>
      {projects.map((project) => (
        <article key={project.title} className={styles.card}>
          <span className={styles.meta}>{project.meta}</span>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.subtitle}>{project.subtitle}</p>
        </article>
      ))}
    </div>
  );
}
