"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import TabNav from "../components/TabNav";
import AboutIcons from "../components/AboutIcons";
import ProjectCards from "../components/ProjectCards";
import Experience from "../components/Experience";
import styles from "../styles/Page.module.css";

const tabs = ["Summary", "Projects", "Experience", "Esports"];

export default function Home() {
  const [activeTab, setActiveTab] = useState("Summary");
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
  }, [isDark]);

  const renderSection = () => {
    if (activeTab === "Projects") {
      return <ProjectCards />;
    }

    if (activeTab === "Experience") {
      return <Experience />;
    }

    if (activeTab === "Esports") {
      return (
        <div className={styles.morePanel}>
          <div className={styles.esportsList}>
            <p className={styles.esportsItem}>
              Clash Royale - Personal best: #388 Global, #10 Canada, 3170 Ultimate Champion Medals
            </p>
            <p className={styles.esportsItem}>VALORANT - Peak rank: Immortal 2, 98RR</p>
            <p className={styles.esportsItem}>Counter-Strike - 26,031 Premier ELO, 95 Aim Rating</p>
            <p className={styles.esportsItem}>BTD6 - Top 1 Global Finish in Boss Event</p>
            <p className={styles.esportsItem}>Kovaak's - Top 100 Aim Tracking</p>
          </div>
        </div>
      );
    }

    return <AboutIcons />;
  };

  return (
    <main className={styles.page}>
      <Header isDark={isDark} onToggleTheme={() => setIsDark(!isDark)} />
      <TabNav
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <section className={styles.section}>
        <h2 className={styles.sectionHeader}>{activeTab}</h2>
        {renderSection()}
      </section>
    </main>
  );
}
