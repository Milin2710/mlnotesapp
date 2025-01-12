import Link from "next/link";
import styles from "../../styles/Home.module.css";

const problemsData = [
    {
      id: 1,
      href: "../problems/problem1",
      title: "Spiral Matrix",
      description: "Print a matrix in spiral way.",
      tags: ["matrix", "cp", "brute"]
    },
    {
      id: 2,
      href: "../problems/problem2",
      title: "Number Spiral 2",
      description: "A 2D array with infinite spiral entries, find the number in row y and column x",
      tags: ["Array", "Maths", "Observe"]
    },
    {
      id: 3,
      href: "../problems/problem3",
      title: "Number Spiral 3",
      description: "A 2D array with infinite spiral entries, find the number in row y and column x",
      tags: ["Array", "Maths", "Observe"]
    },
    {
      id: 4,
      href: "../problems/problem4",
      title: "Number Spiral 4",
      description: "A 2D array with infinite spiral entries, find the number in row y and column x",
      tags: ["Array", "Maths", "Observe"]
    },
    {
      id: 5,
      href: "../problems/problem5",
      title: "Number Spiral 5",
      description: "A 2D array with infinite spiral entries, find the number in row y and column x",
      tags: ["Array", "Maths", "Observe"]
    }
  ];
  

export default function Problemsc() {
  return (
    <>
      <br />
      <h1 className={styles.problemsecheading}>PROBLEMS</h1>
      <br />
      {problemsData.map((problem) => (
        <section key={problem.id} className={styles[`part${problem.id}`]}>
          <span className={styles.problemsno}>{problem.id}. </span>
          <Link href={problem.href} className={styles.problempagehead}>
            {problem.title}
          </Link>
          <div className={styles.homepagepartsdiv}>
            <p className={styles.quesintro}>{problem.description}</p>
            <div className={styles.problemtags}>
              {problem.tags.map((tag, index) => (
                <p key={index} className={styles.problemtag}>{tag}</p>
              ))}
            </div>
          </div>
          <hr />
        </section>
      ))}
    </>
  );
}
