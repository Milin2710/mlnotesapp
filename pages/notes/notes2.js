import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function Notesc() {
  return (
    <>
      <section>
        <h4>
          <Link href="/posts/notes">Back to Notes</Link>
        </h4>
        <h1 className={styles.notesmainheading}>Machine Learning</h1>
        <br />
        <br />
        <div className={styles.notesimgcontainer}>
          <img
            className={styles.notesimg}
            src="https://i.ibb.co/6FZVmXG/Screenshot-2024-05-17-011740.png"
            alt=""
          />
          <div className={styles.textimgcontainer}>
            <p style={{ fontSize: "50px" }}>Machine Learning approach</p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className={styles.para1notes}>
          <b>Types of Machine Learning Systems</b>
          <br />
          <ul>
            <li>
              Supervised, Unsupervised, Semisupervised, and Reinforcement
              Learning - <br />
              Whether or not they are trained by human supervision
            </li>
            <br />
            <li>
              Online versus Batch Learning - <br />
              Whether or not the algorithm is online
            </li>
            <br />
            <li>
              Instance based versus Model-based Learning - <br />
              Whether they work by simply comparing new data points to known
              data points, or by detecting patterns in the training data and
              building a predictive model
            </li>
          </ul>
          <br />
        </div>
        <div className={styles.para1notes}>
          <b>Supervised Learning</b>
          <br />
          <br />
          In Supervised Learning, the system is trained on labelled data.
          <br />
          Here are some of the most important supervised learning algorithms
          <ul>
            <li>k-Nearest Neighbors</li>
            <li>Linear Regression</li>
            <li>Logistic Regression</li>
            <li>Support Vector Machines (SVMs)</li>
            <li>Decision Trees and Random Forests</li>
            <li>Neural networks</li>
          </ul>
          <br />
        </div>
        <div className={styles.para1notes}>
          <b>Unsupervised Learning</b>
          <br />
          <br />
          In Unsupervised Learning, the system is trained on unlabelled data.
          The system tries to learn without a teacher.
          <br />
          Here are some of the most important supervised learning algorithms
          <ul>
            <li>
              Clustering
              <br />— K-Means
              <br />— DBSCAN
              <br />— Hierarchical Cluster Analysis (HCA)
            </li>
            <li>
              Anomaly detection and novelty detection
              <br />— One-class SVM
              <br />— Isolation Forest
            </li>
            <li>
              Visualization and dimensionality reduction
              <br />— Principal Component Analysis (PCA)
              <br />— Kernel PCA
              <br />— Locally Linear Embedding (LLE)
              <br />— t-Distributed Stochastic Neighbor Embedding (t-SNE)
            </li>
            <li>
              Association rule learning
              <br />— Apriori
              <br />— Eclat
            </li>
          </ul>
          <br />
        </div>
        <div className={styles.para1notes}>
          <b>Semisupervised Learning</b>
          <br />
          <br />
          In Semisupervised Learning, the system is trained on both labelled and
          unlabelled data.
          <br />
          Most semisupervised learning algorithms are combinations of
          unsupervised and supervised algorithms. For example, deep belief
          networks (DBNs) are based on unsu‐ pervised components called
          restricted Boltzmann machines (RBMs) stacked on top of one another.
          RBMs are trained sequentially in an unsupervised manner, and then the
          whole system is fine-tuned using supervised learning techniques.
          <br />
        </div>
      </section>
    </>
  );
}
