import TopNav from "../../components/TopNav";
import shellStyles from "../../styles/PageShell.module.css";
import styles from "../../styles/Collections.module.css";

const achievements = [
  {
    game: "Valorant",
    title: "Peak rank",
    detail: "Immortal 2",
  },
  {
    game: "Counter-Strike",
    title: "Premier rating",
    detail: "29,999",
  },
  {
    game: "Clash Royale",
    title: "Personal Best",
    detail: "3,170 Ultimate Champion medals, #388 global, #10 in Canada",
  },
];

const profiles = [
  {
    game: "Valorant",
    label: "Riot ID",
    value: "iota#addy",
    href: "#",
  },
  {
    game: "Counter-Strike",
    label: "Steam",
    value: "steamcommunity.com/id/iotq",
    href: "#",
  },
  {
    game: "Clash Royale",
    label: "Supercell ID",
    value: "#RCPYPLULV",
    href: "#",
  },
];

const clips = [
  {
    title: "Valorant ace on Ascent",
    game: "Valorant",
    note: "Vandal 1v4",
    href: "#",
  },
  {
    title: "Counter-Strike clutch",
    game: "Counter-Strike",
    note: "Nuke 1v3",
    href: "#",
  },
  {
    title: "Clash Royale cycle",
    game: "Clash Royale",
    note: "2.6 hog quick win",
    href: "#",
  },
];

export default function CollectionsPage() {
  return (
    <main className={`${shellStyles.pageShell} ${styles.page}`}>
      <TopNav />
      <div className={styles.content}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Collections</p>
          <h1 className={styles.title}>Gaming highlights</h1>
          <p className={styles.subtitle}>
            A snapshot of the games I play, the milestones I chase, and the clips
            I keep on repeat.
          </p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Achievements</h2>
          <div className={styles.cardGrid}>
            {achievements.map((item) => (
              <article key={item.game} className={styles.card}>
                <h3 className={styles.cardTitle}>{item.game}</h3>
                <p className={styles.cardText}>{item.title}</p>
                <p className={styles.cardText}>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Profiles</h2>
          <div className={styles.linkList}>
            {profiles.map((profile) => (
              <a
                key={`${profile.game}-${profile.label}`}
                className={styles.linkItem}
                href={profile.href}
              >
                <span>{profile.game}</span>
                <span className={styles.linkMeta}>
                  {profile.label}: {profile.value}
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Clips</h2>
          <div className={styles.clipGrid}>
            {clips.map((clip) => (
              <a key={clip.title} className={styles.clipCard} href={clip.href}>
                <div className={styles.clipThumb}>clip</div>
                <div className={styles.clipBody}>
                  <div className={styles.clipTitle}>{clip.title}</div>
                  <div className={styles.clipMeta}>
                    {clip.game} • {clip.note}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
