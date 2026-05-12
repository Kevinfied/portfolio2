import styles from "../styles/AboutIcons.module.css";

const icons = [
  0x1f4bb,
  0x1f680,
  0x1f3a8,
  0x1f3ae,
  0x1f3a5,
  0x1f3b6,
  0x1f4f8,
  0x1f9e0,
  0x26a1,
];

export default function AboutIcons() {
  return (
    <div className={styles.row}>
      {icons.map((icon, index) => (
        <div key={`${icon}-${index}`} className={styles.icon} aria-hidden="true">
          {String.fromCodePoint(icon)}
        </div>
      ))}
    </div>
  );
}
