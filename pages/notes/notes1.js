import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function Notesc() {
  return (
    <>
      <section>
        <h4>
          <Link href="/posts/notes">Back to Notes</Link>
        </h4>
        <h1 className={styles.notesmainheading}>Heap Data Structure</h1>
        <br />
        <div className={styles.para1notes}>
          <b>What is Heap?: </b>
          <br /> A heap is a binary tree-based data structure that satisfies the
          heap property i.e., the value of each node is greater than or equal to
          the value of its children. This property makes sure that the root node
          contains the maximum or minimum value (depending on the type of heap),
          and the values decrease or increase as you move down the tree.
          <br />
          <b className={styles.egnotes}>Eg: </b>
          <span>
            Two friends who meet regularly and share personal stories and
            provide emotional support.
          </span>
          <br />
          <br />
          <div className={styles.notesimgcontainer}>
            <img
              className={styles.notesimg}
              src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20221220165711/MinHeapAndMaxHeap1.png"
              alt=""
            />
            <div className={styles.textimgcontainer}>
              <p>
                <b>Max Heap:</b> The root node contains the maximum value, and
                the values decrease as you move down the tree.
                <br />
                <br />
                <b>Min Heap:</b> The root node contains the minimum value, and
                the values increase as you move down the tree.
              </p>
            </div>
          </div>
          <br />
          <hr />
          <br />
          <blockquote>
            <h1>Max Heap from an array</h1>
            <br />
            <p dir="ltr">
              <span>
                <pre>{`Array = {1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17}`}</pre>
              </span>
              <span>Corresponding Complete Binary Tree is:</span>
            </p>
            <p>
              <span>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1
              </span>
              <br />
              <span>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; / &nbsp; &nbsp;
                \
              </span>
              <br />
              <span>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;3 &nbsp; &nbsp; &nbsp;
                &nbsp; 5
              </span>
              <br />
              <span>
                &nbsp; &nbsp; &nbsp; &nbsp; / &nbsp; &nbsp;\ &nbsp; &nbsp; /
                &nbsp;\
              </span>
              <br />
              <span>
                &nbsp; &nbsp; &nbsp; 4 &nbsp; &nbsp; &nbsp;6 &nbsp; 13 &nbsp;10
              </span>
              <br />
              <span>&nbsp; &nbsp; &nbsp;/ \ &nbsp; &nbsp;/ \</span>
              <br />
              <span>&nbsp; &nbsp;9 &nbsp; 8 &nbsp;15 17</span>
            </p>
            <p dir="ltr">
              <b>
                <strong>The task to build a Max-Heap from above array</strong>
              </b>
              <span>.</span>
            </p>
            <p dir="ltr">
              <span>Total Nodes = 11.</span>
              <br />
              <span>Last Non-leaf node index = (11/2) – 1 = 4.</span>
              <br />
              <span>Therefore, last non-leaf node = 6.</span>
            </p>
            <p dir="ltr">
              <span>
                To build the heap, heapify only the nodes: [1, 3, 5, 4, 6] in
                reverse order.
              </span>
            </p>
            <p dir="ltr">
              <b>
                <strong>Heapify 6</strong>
              </b>
              <span>: Swap 6 and 17.</span>
            </p>
            <p>
              <span>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1
              </span>
              <br />
              <span>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; / &nbsp; &nbsp;
                \
              </span>
              <br />
              <span>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;3 &nbsp; &nbsp; &nbsp;
                &nbsp; 5
              </span>
              <br />
              <span>
                &nbsp; &nbsp; &nbsp; &nbsp; / &nbsp; &nbsp;\ &nbsp; &nbsp;
                &nbsp;/ &nbsp;\
              </span>
              <br />
              <span>
                &nbsp; &nbsp; &nbsp;4 &nbsp; &nbsp; &nbsp;17 &nbsp; 13 &nbsp;10
              </span>
              <br />
              <span>&nbsp; &nbsp; / \ &nbsp; &nbsp;/ &nbsp;\</span>
              <br />
              <span>&nbsp; 9 &nbsp; 8 &nbsp;15 &nbsp; 6</span>
            </p>
            <p dir="ltr">
              <b>
                <strong>Heapify 4</strong>
              </b>
              <span>: Swap 4 and 9.</span>
            </p>
            <div></div>
            <p>
              <span>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1
              </span>
              <br />
              <span>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; / &nbsp; &nbsp;
                \
              </span>
              <br />
              <span>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;3 &nbsp; &nbsp; &nbsp;
                &nbsp; 5
              </span>
              <br />
              <span>
                &nbsp; &nbsp; &nbsp; &nbsp; / &nbsp; &nbsp;\ &nbsp; &nbsp;
                &nbsp;/ &nbsp;\
              </span>
              <br />
              <span>
                &nbsp; &nbsp; &nbsp;9 &nbsp; &nbsp; &nbsp;17 &nbsp; 13 &nbsp;10
              </span>
              <br />
              <span>&nbsp; &nbsp; / \ &nbsp; &nbsp;/ &nbsp;\</span>
              <br />
              <span>&nbsp; 4 &nbsp; 8 &nbsp;15 &nbsp; 6</span>
            </p>
            <p dir="ltr">
              <b>
                <strong>Heapify 5</strong>
              </b>
              <span>: Swap 13 and 5.</span>
            </p>
            <p>
              <span>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1
              </span>
              <br />
              <span>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; / &nbsp; &nbsp;
                \
              </span>
              <br />
              <span>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;3 &nbsp; &nbsp; &nbsp;
                &nbsp; 13
              </span>
              <br />
              <span>
                &nbsp; &nbsp; &nbsp; &nbsp; / &nbsp; &nbsp;\ &nbsp; &nbsp;
                &nbsp;/ &nbsp;\
              </span>
              <br />
              <span>
                &nbsp; &nbsp; &nbsp;9 &nbsp; &nbsp; &nbsp;17 &nbsp; 5 &nbsp; 10
              </span>
              <br />
              <span>&nbsp; &nbsp; / \ &nbsp; &nbsp;/ &nbsp;\</span>
              <br />
              <span>&nbsp;4 &nbsp; 8 &nbsp;15 &nbsp; 6</span>
            </p>
            <p dir="ltr">
              <b>
                <strong>Heapify 3</strong>
              </b>
              <span>: First Swap 3 and 17, again swap 3 and 15.</span>
            </p>
            <p>
              <span>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1
              </span>
              <br />
              <span>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;/ &nbsp; &nbsp;
                \
              </span>
              <br />
              <span>
                &nbsp; &nbsp; &nbsp; &nbsp; 17 &nbsp; &nbsp; &nbsp; &nbsp; 13
              </span>
              <br />
              <span>
                &nbsp; &nbsp; &nbsp; &nbsp;/ &nbsp; &nbsp;\ &nbsp; &nbsp;
                &nbsp;/ &nbsp;\
              </span>
              <br />
              <span>
                &nbsp; &nbsp; 9 &nbsp; &nbsp; &nbsp;15 &nbsp; 5 &nbsp; 10
              </span>
              <br />
              <span>&nbsp; &nbsp;/ \ &nbsp; &nbsp;/ &nbsp;\</span>
              <br />
              <span>&nbsp;4 &nbsp; 8 &nbsp;3 &nbsp; 6</span>
            </p>
            <p dir="ltr">
              <b>
                <strong>Heapify 1</strong>
              </b>
              <span>
                : First Swap 1 and 17, again swap 1 and 15, finally swap 1 and
                6.
              </span>
            </p>
            <p>
              <span>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;17
              </span>
              <br />
              <span>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; / &nbsp; &nbsp;
                &nbsp;\
              </span>
              <br />
              <span>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 15 &nbsp; &nbsp; &nbsp;
                &nbsp; 13
              </span>
              <br />
              <span>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;/ &nbsp; &nbsp;\ &nbsp; &nbsp;
                &nbsp;/ &nbsp;\
              </span>
              <br />
              <span>
                &nbsp; &nbsp; &nbsp; &nbsp;9 &nbsp; &nbsp; &nbsp;6 &nbsp;
                &nbsp;5 &nbsp; 10
              </span>
              <br />
              <span>&nbsp; &nbsp; &nbsp; / \ &nbsp; &nbsp;/ &nbsp;\</span>
              <br />
              <span>&nbsp; &nbsp; 4 &nbsp; 8 &nbsp;3 &nbsp; &nbsp;1</span>
            </p>
          </blockquote>
          <br />
          <br />
          <b>C++ Code to heapify: </b>
          <br />
          <code className={styles.notes3codeheapify}>
            <pre>{`
// C++ program for building Heap from Array
#include <bits/stdc++.h>
using namespace std;

// To heapify a subtree rooted with node i which is
// an index in arr[]. N is size of heap
void heapify(int arr[], int N, int i)
{
	int largest = i; // Initialize largest as root
	int l = 2 * i + 1; // left = 2*i + 1
	int r = 2 * i + 2; // right = 2*i + 2

	// If left child is larger than root
	if (l < N && arr[l] > arr[largest])
		largest = l;

	// If right child is larger than largest so far
	if (r < N && arr[r] > arr[largest])
		largest = r;

	// If largest is not root
	if (largest != i) {
		swap(arr[i], arr[largest]);

		// Recursively heapify the affected sub-tree
		heapify(arr, N, largest);
	}
}

// Function to build a Max-Heap from the given array
void buildHeap(int arr[], int N)
{
	// Index of last non-leaf node
	int startIdx = (N / 2) - 1;

	// Perform reverse level order traversal
	// from last non-leaf node and heapify
	// each node
	for (int i = startIdx; i >= 0; i--) {
		heapify(arr, N, i);
	}
}

// A utility function to print the array
// representation of Heap
void printHeap(int arr[], int N)
{
	cout << "Array representation of Heap is:\n";

	for (int i = 0; i < N; ++i)
		cout << arr[i] << " ";
	cout << "\n";
}

// Driver Code
int main()
{
	int arr[] = {1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17};

	int N = sizeof(arr) / sizeof(arr[0]);

	// Function call
	buildHeap(arr, N);
	printHeap(arr, N);

	return 0;
}`}</pre>
          </code>
          <p>
            <p>This function takes three parameters:</p>
            <ul>
              <li>
                <code>arr[]</code>: The array representing the heap.
              </li>
              <li>
                <code>N</code>: The size of the heap.
              </li>
              <li>
                <code>i</code>: The index of the current node being heapified.
              </li>
            </ul>
            <p>
              The function starts by initializing <code>largest</code> as the
              current node (<code>i</code>) and finding the indices of its left
              and right children (<code>l</code> and <code>r</code>,
              respectively).
            </p>
            <p>
              It then checks if the left child exists (<code>l &lt; N</code>)
              and if it is greater than the current node (
              <code>arr[l] &gt; arr[largest]</code>). If so, it updates{" "}
              <code>largest</code> to be the left child.
            </p>
            <p>
              Similarly, it checks if the right child exists (
              <code>r &lt; N</code>) and if it is greater than{" "}
              <code>largest</code>. If so, it updates <code>largest</code> to be
              the right child.
            </p>
            <p>
              After determining the largest among the current node and its
              children, it checks if <code>largest</code> is not equal to{" "}
              <code>i</code>. If so, it swaps the current node with the largest
              child and recursively calls <code>heapify</code> on the affected
              subtree rooted at <code>largest</code>.
            </p>
            <p>
              This process continues until the current node is greater than both
              its children or until it becomes a leaf node.
            </p>
          </p>
          <br />
          <hr />
          <br />
          <div className={styles.notesimgcontainer}>
            <img
              className={styles.notesimg}
              src="https://media.geeksforgeeks.org/wp-content/uploads/20220730030128/Screenshot20220730at30104AM-660x431.png"
              alt=""
            />
            <div className={styles.textimgcontainer}>
              <p>
                <b>Inorder Traversal:</b> 10 20 30 100 150 200 300
                <br />
                <br />
                <b>Preorder Traversal:</b> 100 20 10 30 200 150 300
                <br />
                <br />
                <b>Postorder Traversal:</b> 10 30 20 150 300 200 100
              </p>
            </div>
          </div>
          <br />
          <br />
        </div>
      </section>
    </>
  );
}
