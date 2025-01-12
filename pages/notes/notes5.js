import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function Notesc() {
  return (
    <>
        <h4>
          <Link href="/posts/notes">Back to Notes</Link>
        </h4>
        <h1 className={styles.notesmainheading}>Machine Learning</h1>
    </>
  );
}
