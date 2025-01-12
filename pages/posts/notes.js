import Link from "next/link";
import styles from "../../styles/Home.module.css";

const notesData = [
  {
    id: 1,
    href: "../notes/notes4",
    title: "Model trained on dataset : y = sin(x)",
    description:
      "Trained a model on y = sin(x) using torch",
    tags: ["numpy", "torch", "ML", "DL"],
  },
  {
    id: 2,
    href: "../notes/notes3",
    title: "Model trained on dataset : y = x^2",
    description:
      "Trained a model on y = x^2, after training it takes an input and predicts the squared term",
    tags: ["numpy", "ML", "DL"],
  },
  {
    id: 3,
    href: "../notes/notes2",
    title: "Machine Learning",
    description:
      "A 2D array with infinite spiral entries, find the number in row y and column x",
    tags: ["Array", "Maths", "Observe"],
  },
  {
    id: 4,
    href: "../notes/notes1",
    title: "Heap Data Structure",
    description:
      "Learn what is heap and how it is used, how to implement the code and everything.",
    tags: ["Heap", "datastructure", "cp"],
  },
];

export default function Problemsc() {
  return (
    <>
      <br />
      <h1 className={styles.notessecheading}>NOTES</h1>
      <br />
      {notesData.map((notes) => (
        <section key={notes.id} className={styles[`part${notes.id}`]}>
          <span className={styles.problemsno}>{notes.id}. </span>
          <Link href={notes.href} className={styles.notespagehead}>
            {notes.title}
          </Link>
          <div className={styles.homepagepartsdiv}>
            <p className={styles.quesintro}>{notes.description}</p>
            <div className={styles.notestags}>
              {notes.tags.map((tag, index) => (
                <p key={index} className={styles.notestag}>
                  {tag}
                </p>
              ))}
            </div>
          </div>
          <hr />
        </section>
      ))}
    </>
  );
}
