import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Homec() {
  const [typeEffect] = useTypewriter({
    words: [
      "Codeforces",
      "Do Machine Learning",
      "Read or write blogs",
      "Read or write notes",
      "Read books attached below",
      "Read web dev interview questions",
    ],
    loop: {},
    typeSpeed: 40,
    deleteSpeed: 20,
  });
  return (
    <>
      <section className={styles.part1home}>
        <h1 className={styles.mainheading}>START READING AND PRACTICING</h1>
        <h1 className={styles.typing}><span className={styles.repeatafterme}>You can do: </span><br></br>{typeEffect}</h1>
      </section>
      <hr />
      <section className={styles.part4}>
        <h2 className={styles.homepagepartsh}>
          What would you like to read today? - Reading is good
        </h2>
        <div className={styles.homepagepartsdiv}>
          <p><span>1.</span>
            <Link href="https://drive.google.com/file/d/1Ah7LNxa5bs8H4dSK_bA4ablgt17XAVrb/view?usp=sharing" target="_blank">
              Hands on Machine Learning with Scikit Learn, Keras & Tensorflow 
            </Link>
          </p>
          <p><span>2.</span>
            <Link href="https://developers.google.com/machine-learning/crash-course" target="_blank">
              Complete the Google Crash Course on ML and Deep Learning
            </Link>
          </p>
          <p><span>3.</span>
            <Link href="http://neuralnetworksanddeeplearning.com/chap1.html" target="_blank">
              Read neural network and deep learning e-book
            </Link>
          </p>
          {/* <p><span>4.</span>
            <Link href="https://www.kaggle.com/learn" target="_blank">
              Complete the Kaggle course on ML and Deep Learning
            </Link>
          </p> */}
        </div>
      </section>
      <hr />
      <section className={styles.part2}>
        <h2 className={styles.homepagepartsh}>What would you like to do today?</h2>
        <div className={styles.homepagepartsdiv}>
          <p>
            <span>1.</span>Write blogs: Share your experience for future
          </p>
          <p>
            <span>2.</span>Read ML/DL books and papers to deepen your understanding and stay updated
          </p>
          <p>
            <span>3.</span>Write notes for quick recap
          </p>
        </div>
      </section>
      {/* <hr />
      <section className={styles.part3}>
        <h2 className={styles.homepagepartsh}>
          See these 5 problems, will you solve it?
        </h2>
        <div className={styles.homepagepartsdiv}>
          <p><span>1.</span>
            <Link href="/problems/problem4">
              Open Problem 4
            </Link>
          </p>
          <p><span>2.</span>
            <Link href="/problems/problem2">
              Open Problem 2
            </Link>
          </p>
          <p><span>3.</span>
            <Link href="/problems/problem1">
              Open Problem 1
            </Link>
          </p>
          <p><span>4.</span>
            <Link href="/problems/problem3">
              Open Problem 3
            </Link>
          </p>
          <p><span>5.</span>
            <Link href="/problems/problem5">
              Open Problem 5
            </Link>
          </p>
        </div>
      </section> */}
      <hr />
      <section className={styles.part5}>
        <h2 className={styles.homepagepartsh}>
          Want to learn something new today?
        </h2>
        <div className={styles.homepagepartsdiv}>
          <p><span>1.</span>
            <Link href="https://drive.google.com/file/d/1VsSBQj7vT1r1Wbdl46SUVD7yj7DJyCY9/view?usp=sharing">
              PDF - Babbar OS short notes
            </Link>
          </p>
          <p><span>2.</span>
            <Link href="https://drive.google.com/file/d/1POLxhE7GQjR9HnWi9MQ_yCvDMmVHTeaK/view?usp=drive_link">
              Book - Competitive Programming book
            </Link>
          </p>
          <p><span>3.</span>
            <Link href="https://drive.google.com/file/d/1aFpoonHdwjDrGdZCDK_Zl-sIqwaKUHdD/view?usp=sharing">
              Book - Operating System Design The Xinu Approach
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}