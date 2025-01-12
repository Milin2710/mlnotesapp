import Link from "next/link";
import styles from "../../styles/Home.module.css";
// import { img1 } from "../../public/images/neuralnetworknotes4.jpg";

export default function Notesc() {
  return (
    <>
      <section>
        <h4>
          <Link href="/posts/notes">Back to Notes</Link>
        </h4>
        <h1 className={styles.notesmainheading}>
          Model trained on dataset : y = sin(x)
        </h1>
        <br />
        <br />
        <div className={styles.para1notes}>
          Here we will use only predefined functions of torch.
          <br />
          Though i tried replicating the same idea without using torch but the
          result was not correct and also it took too much more time than torch
          this is because these built in functions are optimized to very low
          level.
          <br />
          <br />
          <b>Import Libraries: </b>
          <pre>
            import numpy as np
            <br />
            import matplotlib.pyplot as plt
            <br />
            import torch
            <br />
            import torch.nn as nn
            <br />
            import torch.optim as optim
          </pre>
          <span className={styles.highlight}>numpy</span> - is used for
          numerical operations, especially for creating and manipulating arrays
          <br />
          <span className={styles.highlight}>matplotlib.pyplot</span> - is used
          for plotting data (in this case, visualizing the training data and the
          predictions)
          <br />
          <span className={styles.highlight}>torch</span> - is the main library
          for deep learning operations in PyTorch
          <br />
          <span className={styles.highlight}>torch.nn</span> - provides tools to
          define neural networks and the layers used within them
          <br />
          <span className={styles.highlight}>torch.optim</span> - is used to
          optimize the model during training (by adjusting its weights)
          <br />
          <br />
          <br />
          <b>Initialize Dataset:</b>
          <pre>
            x = np.linspace(-4 * np.pi, 4 * np.pi, 10000)
            <br />y = np.sin(x) + 0.2 * np.random.randn(len(x))
          </pre>
          X = A linearly spaced array from -4π to 4π (with 10,000 points)
          <br />Y = sine value of corresponding X, with small gaussian noise{" "}
          <span className={styles.code}> 0.2 * np.random.randn(len(x))</span>
          <br />
          <br />
          <b>
            Transforming the input and output arrays to{" "}
            <span className={styles.hoverit}>
              tensor
              <div className={styles.hovercontent}>
                Tensor is a data structure particularly used in machine learning
                optimised for fast numerical computations.
                <br />
                Libraries like PyTorch and TensorFlow are efficient with tensors
                <br />
                Tensor is defined as:
                <span className={styles.code}>
                  x = torch.tensor([1, 2, 3, 4, 5, 6])
                </span>
              </div>
            </span>
          </b>
          <pre>
            x_tensor = torch.from_numpy(x).float().view(-1, 1)
            <br />
            y_tensor = torch.from_numpy(y).float().view(-1, 1)
          </pre>
          <span className={styles.code}>torch.from_numpy(x)</span> this converts
          the array to tensor
          <br />
          <span className={styles.code}>.float()</span> converts the elements to
          float
          <br />
          <span className={styles.code}>.view(-1, 1)</span> converts the tensor
          to 1 column and 'n' number of rows
          <br />
          <br />
          <b>Definition of all torch functions used:</b>
          <pre>
            self.hidden = nn.Linear(1, 128)
            <br />
            self.hidden2 = nn.Linear(128, 256)
            <br />
            self.hidden3 = nn.Linear(256, 128)
            <br />
            self.output = nn.Linear(128, 1)
          </pre>
          self.hidden - fully connected linear layer that takes 1 input and
          gives 128 outputs
          <br />
          self.hidden2 - second fully connected layer that takes 128 inputs and
          give 256 outputs
          <br />
          self.hidden3 - third fully connected layer that takes 256 inputs and
          gives 128 outputs
          <br />
          self.output - the final output layer which takes 128 inputs and gives
          1 output (the predicted value of y)
          <br />
          <br />
          <pre>
            x = torch.relu(self.hidden(x))
            <br />
            x = torch.relu(self.hidden2(x))
            <br />
            x = torch.relu(self.hidden3(x))
            <br />x = self.output(x)
          </pre>
          The ReLU (Rectified Linear Unit)&nbsp;
          <Link className={styles.inlinelink} href="../blogs/blog3">
            activation function
          </Link>
          &nbsp;after each hidden layer
          <br />
          This introduces non-linearity to the model, allowing it to learn
          complex relationships between x and y
          <br />
          <br />
          <pre>criterion = nn.MSELoss()</pre>
          Specifies the loss function, which in this case is Mean Squared Error
          <br />
          <br />
          <pre>optimizer = optim.Adam(model.parameters(), lr=0.001)</pre>
          The Adam optimizer is used to minimize the loss function by adjusting
          the model's parameters (weights)
          <br />
          The learning rate (lr) controls how large a step the optimizer takes
          during each update
          <br />
          <br />
          <pre>loss = criterion(outputs, y_tensor)</pre>
          Calculates the loss by comparing the predicted values (outputs) to the
          actual values (y_tensor)
          <br />
          <br />
          <pre>outputs = model(x_tensor)</pre>
          Performs a forward pass through the model to get the predicted y
          values
          <br />
          <br />
          <pre>optimizer.zero_grad()</pre>
          Clears the gradients of all optimized tensors (this is necessary
          because PyTorch accumulates gradients by default)
          <br />
          <br />
          <pre>loss.backward()</pre>
          Computes the gradient of the loss with respect to the model's
          parameters
          <br />
          <br />
          <pre>optimizer.step()</pre>
          Updates the model parameters using the computed gradients
          <br />
          <br />
          <b>Complete code: </b>
          <br />
          <code className={styles.notes3codeheapify}>
            <pre>
              {`
import numpy as np
import matplotlib.pyplot as plt
import torch
import torch.nn as nn
import torch.optim as optim

# generating and visualizing dataset
x = np.linspace(-4 * np.pi, 4 * np.pi, 10000)
y = np.sin(x) + 0.2 * np.random.randn(len(x))

# transforming the input and output arrays to tensors
x_tensor = torch.from_numpy(x).float().view(-1, 1)
y_tensor = torch.from_numpy(y).float().view(-1, 1)


# implementing the model
class Net(nn.Module):
    def __init__(self):
        super(Net, self).__init__()
        self.hidden = nn.Linear(1, 128)
        self.hidden2 = nn.Linear(128, 256)
        self.hidden3 = nn.Linear(256, 128)
        self.output = nn.Linear(128, 1)

    def forward(self, x):
        x = torch.relu(self.hidden(x))
        x = torch.relu(self.hidden2(x))
        x = torch.relu(self.hidden3(x))
        x = self.output(x)
        return x


# instantiating the model, criterion (loss function), and optimizer
model = Net()
criterion = nn.MSELoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)

# training loop
num_epochs = 10000
for epoch in range(num_epochs):
    # forward pass
    outputs = model(x_tensor)
    loss = criterion(outputs, y_tensor)
    optimizer.zero_grad()
    loss.backward()
    optimizer.step()

    if (epoch + 1) % 100 == 0:
        print(f"Epoch [{epoch+1}/{num_epochs}], Loss: {loss.item():.4f}")

# inference and visualization

# Test the trained model
with torch.no_grad():
    predicted = model(x_tensor)

# Plot the original function and the learned function
plt.figure(figsize=(10, 6))
plt.scatter(x, y, color="blue", label="Original Function")
plt.plot(x, predicted.numpy(), color="red", label="Learned Function")
plt.title("Original Function vs. Learned Function")
plt.xlabel("x")
plt.ylabel("y")
plt.legend()
plt.grid(True)
plt.show()

              `}
            </pre>
          </code>
        </div>
      </section>
    </>
  );
}
