import styles from "../styles/Experience.module.css";

const roles = [
  {
    role: "Senior Frontend Engineer - Atlas Grid",
    period: "2024 - Present",
    description:
      "Leading UI architecture for the core platform. Built a shared \"design runtime\" and shipped a new \"workspace sync\" flow.",
    links: [
      { label: "design runtime", href: "#" },
      { label: "workspace sync", href: "#" },
    ],
  },
  {
    role: "Product Engineer - Lunar Labs",
    period: "2021 - 2024",
    description:
      "Delivered analytics tooling for fintech teams. Partnered with \"platform\" and \"research\" to standardize dashboards.",
    links: [
      { label: "platform", href: "#" },
      { label: "research", href: "#" },
    ],
  },
  {
    role: "Interface Developer - Northwind",
    period: "2019 - 2021",
    description:
      "Created the \"launch kit\" for new product rollouts and optimized \"session handoff\" flows.",
    links: [
      { label: "launch kit", href: "#" },
      { label: "session handoff", href: "#" },
    ],
  },
];

export default function Experience() {
  return (
    <div className={styles.stack}>
      {roles.map((role) => (
        <article key={role.role} className={styles.card}>
          <span className={styles.period}>{role.period}</span>
          <h3 className={styles.role}>{role.role}</h3>
          <p className={styles.description}>
            {role.description.split("\"").map((text, index) => {
              if (index % 2 === 1) {
                const link = role.links.find((item) => item.label === text);
                if (link) {
                  return (
                    <a key={`${role.role}-${text}`} href={link.href}>
                      {text}
                    </a>
                  );
                }
              }
              return <span key={`${role.role}-${index}`}>{text}</span>;
            })}
          </p>
        </article>
      ))}
    </div>
  );
}
