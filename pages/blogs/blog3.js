import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function Problemsc() {
  return (
    <>
      <section>
        <h4>
          <Link href="/posts/blogs">Back to Blogs</Link>
        </h4>
        <h2>ReLU - Rectified Linear Unit</h2>
        <p>Explanation is very simple but imagining it is very difficult</p>
        Basic function of ReLU is:
        <br />
        <li>If x is negative then replace it with 0</li>
        <li>If x is positive or zero, keep it as it is</li>
        <br />
        <b>Why to use ReLU</b>
        <br />
        <li>
          Introduces non-linearity through a sharp bend at x=0, without which
          neural networks would just be linear transformations
        </li>
        <li>
          Computationally efficient: just max(0,x), much faster than
          sigmoid/tanh which need exponential calculations
        </li>
        <li>
          No vanishing gradient problem - gradient is either 0 or 1, unlike
          sigmoid where gradients become tiny
        </li>
        <li>
          Creates sparse activations (many zeros) which helps networks focus on
          most relevant features
        </li>
        <li>
          Despite dropping negative activations, networks can learn to
          compensate by:
          <br />
          — Adjusting weights/biases to make important signals positive
          <br />
          — Finding alternative paths through other neurons
          <br />— Redistributing representations across neurons
        </li>
        <li>
          Empirically proven to work better than sigmoid/tanh in most deep
          learning applications
        </li>
        <br />
        <b>Input:</b>
        <br />
        Original Tensor: tensor([[ -1., 0., 2., 0.],
        <br />
        [ 3., 4., -5., 0.],
        <br />
        [ 6., -9., -10., 11.],
        <br />[ 0., 13., 14., -15.]])
        <br />
        <br />
        <b>Output:</b>
        <br />
        Output Tensor: tensor([[ 0., 0., 2., 0.],
        <br />
        [ 3., 4., 0., 0.],
        <br />
        [ 6., 0., 0., 11.],
        <br />[ 0., 13., 14., 0.]])
        <code className={styles.notes3codeheapify}>
          <pre>
            {`
import torch
import torch.nn as nn

# Define a tensor
input = torch.tensor(
    [
        [-1.0, 0.0, 2.0, 0.0],
        [3.0, 4.0, -5.0, 0.0],
        [6.0, -9.0, -10.0, 11.0],
        [0.0, 13.0, 14.0, -15.0],
    ]
)

print(" Original Tensor: ", input)

# Apply Rectified Linear Unit Function
Rel = torch.relu(input)

print(" Output Tensor: ", Rel)
              `}
          </pre>
        </code>
      </section>
    </>
  );
}
