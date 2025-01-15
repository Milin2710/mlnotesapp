import Link from "next/link";
import styles from "../../styles/Home.module.css";
import blogintrotods from "../../public/images/blogintrotods.png";

export default function Problemsc() {
  return (
    <>
      <section>
        <h4>
          <Link href="/posts/blogs">Back to Blogs</Link>
        </h4>
        <h2>Introduction to Data Science</h2>
        <p>Data Science is vast!</p>
        <p>
          Data Science involves extracting insights and knowledge from
          structured and unstructured data using various techniques.
          <br />
          <br />
          It involves: <br />
        </p>
        <p className={styles.blogquicknote}>
          Data Collection &lt; Data Cleaning and Preprocessing &lt; &nbsp;
          <span className={styles.hoverit}>
            EDA
            <div className={styles.hovercontent}>
              Understanding the data through visualization and statistical
              summaries to identify patterns.
            </div>
          </span>{" "}
          &lt; &nbsp;
          <span className={styles.hoverit}>
            Statistical Analysis and Modeling
            <div className={styles.hovercontent}>
              Applying statistics and ML algorithms to build models that can
              identify patterns and make predictions.
            </div>
          </span>{" "}
          &lt; &nbsp;
          <span className={styles.hoverit}>
            ML
            <div className={styles.hovercontent}>
              A subset of AI that focuses on development of algorithms which
              allow computers to learn from data.
            </div>
          </span>{" "}
          &lt; &nbsp;
          <span className={styles.hoverit}>
            Data Visualization
            <div className={styles.hovercontent}>
              Presenting data visually through graphs, charts and other
              graphicall meas to show insights effectively.
            </div>
          </span>
        </p>
        <br />
        <p>
          <b>
            <u>DS, ML and AI</u>
          </b>
        </p>
        <p>
          Machine Learning is a subset of both AI and Data Science.
          <img src={blogintrotods} alt="Venn Diagram of AI, ML and DS" />
        </p>
        <p>
          <b>Artificial Intelligence - </b>
          <br />
          AI aims to create systems or machine capable of performing taskks that
          typically require human intellligence.
          <br />
          These tasks includes NLP, decision making, etc.
        </p>
        <p>
          <b>Machine Learning - </b>
          <br />
          ML enable computers to make predictions or decisions from data without
          being{" "}
          <span className={styles.hoverit}>
            explicitly programmed
            <div className={styles.hovercontent}>
              Explicitly programmed means telling the computer exactly what to
              do. <br />
              Example: in developing a chatbot you have to write out all the
              rules for how it should respond but with ML you can train the
              chatbot on lot of examples and it learn on its own.
            </div>
          </span>
          .
          <br />
          These tasks includes NLP, decision making, etc.
        </p>
        <p>
          <b>Data Science - </b>
          <br />
          Data Science is an interdisciplinary field that involves extracting
          insights and knowledge from structured and unstructured data using
          various scientific methods, algorithms, and systems.
        </p>
      </section>
    </>
  );
}
