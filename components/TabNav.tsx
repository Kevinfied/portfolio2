// @ts-nocheck
import styles from "../styles/TabNav.module.css";

export default function TabNav({ tabs, activeTab, onTabChange }) {
  return (
    <div className={styles.tabNav}>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ""}`}
          onClick={() => onTabChange(tab)}
          aria-pressed={activeTab === tab}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
