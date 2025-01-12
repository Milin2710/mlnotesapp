import Link from "next/link";
import styles from "../../styles/Home.module.css";
//BLOG DONE

const blogData = [
    {
      id: 1,
      href: "../blogs/blog1",
      title: "Intro to Data Science",
      description: "Get a brief intro to Data Science ML AI",
      tags: ["DS", "AI", "ML"]
    },
    {
      id: 2,
      href: "../blogs/blog2",
      title: "Data Structure - Dynamic Arrays",
      description: "Learn about functions like declaration, push, pop, count, etc. in Data Structures.",
      tags: ["vector", "set", "map", "bitset", "deque", "stack", "queue"]
    },
    {
      id: 3,
      href: "../blogs/blog3",
      title: "Number Spiral 3",
      description: "A 2D array with infinite spiral entries, find the number in row y and column x",
      tags: ["Array", "Maths", "Observe"]
    },
    {
      id: 4,
      href: "../blogs/blog4",
      title: "Number Spiral 4",
      description: "A 2D array with infinite spiral entries, find the number in row y and column x",
      tags: ["Array", "Maths", "Observe"]
    },
    {
      id: 5,
      href: "../blogs/blog5",
      title: "Number Spiral 5",
      description: "A 2D array with infinite spiral entries, find the number in row y and column x",
      tags: ["Array", "Maths", "Observe"]
    }
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
                <p key={index} className={styles.blogtag}>{tag}</p>
              ))}
            </div>
          </div>
          <hr />
        </section>
      ))}
    </>
  );
}
