import Link from "next/link";
import styles from "../../styles/Home.module.css";

const blogData = [
  {
    href: "../blogs/blog4",
    title: "Backpropagation",
    description: "",
    tags: ["ML", "backpropagation", "gradient descent"],
  },
  {
    href: "../blogs/blog3",
    title: "ReLU - Activation function in PyTorch",
    description: "",
    tags: ["ML", "pytorch"],
  },
  {
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
      {blogData.map((blogs, index) => (
        <section key={index + 1} className={styles[`part${index + 1}`]}>
          <span className={styles.problemsno}>{index + 1}. </span>
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
