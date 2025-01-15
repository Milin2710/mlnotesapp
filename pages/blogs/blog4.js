import Link from "next/link";
import Image from "next/image";
import "../../public/images/backpropagationblog4.png";

export default function Problemsc() {
  return (
    <section>
      <h4>
        <Link href="/posts/blogs">Back to Blogs</Link>
      </h4>
      <h2>Backpropagation</h2>
      <p>
        Backpropagation is a key algorithm used for training neural networks.
        <br />
        It is a method for converging the weights of neural network to minimize
        the error.
      </p>
      <p>The weight is updated as: </p>
      <pre>W = W - η.(∂C/∂W)</pre>
      <p>
        Here, ∂C/∂W is the gradient of the loss function with respect to the
        weight
        <br />η is the learning rate
      </p>
      <p>
        In notes{" "}
        <Link href="/notes/notes3">Model trained on dataset : y = x^2</Link> I
        used the formula for gradient_w -
      </p>
      <pre>gradient_w = 2 * np.mean(error * X)</pre>
      <div className="image">
        <Image
          src="/images/backpropagationblog4.png"
          layout="responsive"
          width={16}
          height={9}
        />
      </div>
      <p>'2' came from the derivative of Loss function, C = (a - y)^2
      </p>
    </section>
  );
}
