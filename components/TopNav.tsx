import Link from "next/link";
import styles from "../styles/Nav.module.css";

const links = [
  { label: "home", href: "/" },
  { label: "projects", href: "/projects" },
  { label: "about", href: "/about" },
  { label: "collections", href: "/collections" },
];

export default function TopNav() {
  return (
    <div className={styles.layout}>
      <nav className={styles.navbar}>
        <div className={styles.navLinks}>
          {links.map((link) => (
            <Link key={link.label} className={styles.navLink} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
