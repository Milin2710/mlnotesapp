import Link from "next/link";
import styles from "../../styles/Home.module.css";

const blogData = [
  {
    id: 1,
    href: "../blogs/blog3",
    title: "ReLU - Activation function in PyTorch",
    description: "",
    tags: ["ML", "pytorch"],
  },
  {
    id: 2,
    href: "../blogs/blog1",
    title: "Intro to Data Science",
    description: "Get a brief intro to Data Science ML AI",
    tags: ["DS", "AI", "ML"],
  },
];

export default function Blogsc() {
  return (
    <>
      <br />
      <h1 className={styles.blogsecheading}>BLOGS</h1>
      <br />
      {blogData.map((blogs) => (
        <section key={blogs.id} className={styles[`part${blogs.id}`]}>
          <span className={styles.problemsno}>{blogs.id}. </span>
          <Link href={blogs.href} className={styles.blogpagehead}>
            {blogs.title}
          </Link>
          <div className={styles.homepagepartsdiv}>
            <p className={styles.quesintro}>{blogs.description}</p>
            <div className={styles.blogtags}>
              {blogs.tags.map((tag, index) => (
                <p key={index} className={styles.blogtag}>
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
