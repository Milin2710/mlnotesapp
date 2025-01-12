import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function Notesc() {
  return (
    <>
      <section>
        <h4>
          <Link href="/posts/notes">Back to Notes</Link>
        </h4>
        <h1 className={styles.notesmainheading}>
          Model trained on dataset : y = x^2
        </h1>
        <br />
        <br />
        <div className={styles.para1notes}>
          Here we are going to train a simple model with only one neuron - with
          2 weights and 1 bias
          <br />
          <br />
          <b>Dataset will be :</b>
          <pre>y = x^2, {" {0<=x<=10}"}</pre>
          X = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80,
          85, 90, 95, 100]
          <br />Y = [0, 25, 100, 225, 400, 625, 900, 1225, 1600, 2025, 2500,
          3025, 3600, 4225, 4900, 5625, 6400, 7225, 8100, 9025, 10000]
          <br />
          <br />
          <b>Initialize Parameters:</b>
          <pre>w1, w2, b = 0.0, 0.0, 0.0</pre>
          <b>Equation for the neuron:</b>
          <pre>Y_pred = w2 * (X**2) + w1 * X + b</pre>
          <b>Initialize Hyperparameters:</b>
          <pre>
            learning_rate = 0.00000001
            <br />
            iterations = 10000
          </pre>
          <b>Gradient:</b>
          <br />
          This helps in updating the parameters to reduce cost function.
          <br />
          gradient_w is the gradient of mean squared error wrt weight w
          <br />
          ∂/∂w ∑(w.xi - yi)^2 /n  --  for one weight with no bias
          <pre>gradient_w = 2 * np.mean(error * X)</pre>
          Here coefficient of X is w
          <br /><br />
          <b>Complete code</b>
          <br />
          <code className={styles.notes3codeheapify}>
            <pre>
              {`
import numpy as np

# Data
X = np.array(
    [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
)
Y = np.array(
    [0, 25, 100, 225, 400, 625, 900, 1225, 1600, 2025, 2500, 3025, 3600, 4225, 4900, 5625, 6400, 7225, 8100, 9025, 10000]
)

# Initialize parameters
w1, w2, b = 0.0, 0.0, 0.0

# Hyperparameters
learning_rate = 0.00000001
iterations = 10000

for i in range(iterations):
    # Forward pass
    Y_pred = w1 * X + w2 * (X**2) + b

    # Compute gradients
    error = Y_pred - Y

    gradient_w1 = 2 * np.mean(error * X)
    gradient_w2 = 2 * np.mean(error * (X**2))
    gradient_b = 2 * np.mean(error)

    # Update parameters
    w1 -= learning_rate * gradient_w1
    w2 -= learning_rate * gradient_w2
    b -= learning_rate * gradient_b

print("Final Results:")
print(f"MSE: {np.mean((Y_pred - Y) ** 2):.6f}")
print(f"w1: {w1:.6f}")
print(f"w2: {w2:.6f}")
print(f"b: {b:.6f}")

newvalue = int(input("input: "))
outputvalue = w1 * newvalue + w2 * newvalue**2 + b
print(f"output: {(outputvalue)}")
print(f"prediction: {round(outputvalue)}")
                `}
            </pre>
          </code>
        </div>
      </section>
    </>
  );
}
