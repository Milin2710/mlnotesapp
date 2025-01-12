import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function Problemsc() {
  return (
    <>
      <section>
        <h4>
          <Link href="/posts/problems">Back to Problems</Link>
        </h4>
        <h1 className={styles.notesmainheading}>Spiral Matrix</h1>
        <p className={styles.problem1inpout}>
          <div className="inputoutput">
            <b>INPUT/OUTPUT: </b>
            <br />
            <strong>Input:</strong>
            <br />
            <br />
            <code>
              {"[["}1, 2, 3, 4],
              <br /> [5, 6, 7, 8],
              <br /> [9, 10, 11, 12],
              <br /> [13, 14, 15, 16]{"]"}
            </code>
            <br />
            <br />
            <strong>Output:</strong> 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10
            <br />
          </div>
          <img className={styles.inpoutimg}
            src="https://media.geeksforgeeks.org/wp-content/uploads/20200421034622/untitled1810.png"
            alt=""
          />
        </p>
        <br />
      </section>
    </>
  );
}
