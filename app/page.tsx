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
          <strong>Esports highlights</strong>
          <ul>
            <li>Clash Royale - Personal best: 7,200 trophies (2025 season)</li>
            <li>VALORANT - Peak rank: Ascendant 2, mained Controller</li>
            <li>Counter-Strike - Faceit Level 7, entry rifler</li>
            <li>Apex Legends - Diamond in Season 18</li>
            <li>Overwatch 2 - Masters support</li>
          </ul>
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
