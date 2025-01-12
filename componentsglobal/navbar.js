import Link from "next/link";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  return (
    <>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <ul className={styles.ulnavbar}>
            <Link className={styles.title} href="/">
              HOME
            </Link>
            <Link className={styles.title} href="/posts/problems">
              PROBLEMS
            </Link>
            <Link className={styles.title} href="/posts/notes">
              NOTES
            </Link>
            <Link className={styles.title} href="/posts/blogs">
              BLOGS
            </Link>
            <Link className={styles.title} href="/posts/readinfo">
              INFO
            </Link>
          </ul>
        </nav>

        <style jsx>{`
          Link {
            text-decoration: none;
            color: black;
          }
        `}</style>

        <style jsx global>{`
          h1 {
            text-decoration: none;
            color: black;
          }
        `}</style>
      </div>
    </>
  );
};

export default Navbar;
