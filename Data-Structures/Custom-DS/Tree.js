/*
# Tree

A tree is a hierarchical data structure that consists of nodes connected by edges.

A tree is a non-linear data structure, compared to arrays, linked lists, stacks and queues which are linear data structures.

In linear data structures, the time required to search is proportional to the size of the data set.

Trees, however, owing to the nonlinear nature, allow quicker and easier access to the data.

A tree will not contain any loops or cycles.

Tree Usage
File systems for directory structure
A family tree
An organisation tree
DOM
Chat bots
Abstract syntax trees

## Summary

| Terminology    | Definition                                       |
| -------------- | ------------------------------------------------ |
| Node           | Basic element that stores data                   |
| Edge           | Connection between two nodes                     |
| Root           | Topmost node with no parent                      |
| Parent         | Node that has children                           |
| Child          | Node directly below a parent                     |
| Sibling        | Nodes with the same parent                       |
| Leaf Node      | Node with no children                            |
| Internal Node  | Node with at least one child                     |
| Ancestor       | Any node above a given node                      |
| Descendant     | Any node below a given node                      |
| Path           | Sequence of connected nodes                      |
| Distance       | Number of edges in the shortest path             |
| Degree of Node | Number of children of a node                     |
| Degree of Tree | Maximum node degree in the tree                  |
| Depth          | Number of edges from the root                    |
| Height of Node | Longest path from the node to a leaf             |
| Height of Tree | Height of the root node                          |
| Subtree        | A node and all of its descendants                |
| Level          | Position of a node in the tree (often Depth + 1) |

*/

/*
# Binary Tree

A binary tree is a tree data structure in which each node has at most two children.

They are referred to as **left child** and **right child**.

---

# Binary Search Tree (BST)

The value of each **left node** must be **smaller** than the parent node.

The value of each **right node** must be **greater** than the parent node.

Each node has at most **two children**.

---

# Binary Search Tree Operations

* **Insertion** – To add a node to the tree.
* **Search** – To find a node given its value.
* **DFS & BFS** – To visit all nodes in the tree.
* **Deletion** – To remove a node given its value.

---

# Binary Search Tree Usage

* Searching
* Sorting
* To implement abstract data types such as **lookup tables** and **priority queues**.

## Tree Traversal

* Visiting every node in the tree.
* A hierarchical data structure like a tree can be traversed in different ways:

  1. Depth First Search (DFS)
  2. Breadth First Search (BFS)

---

## Depth First Search (DFS)

The DFS algorithm starts at the root node and explores as far as possible along each branch before backtracking.

* Visit the root node.
* Visit all the nodes in the left subtree.
* Visit all the nodes in the right subtree.

Depending on the order in which we do this, there are three types of DFS traversals:

1. Preorder
2. Inorder
3. Postorder

---

## Preorder Traversal

1. Read the data of the node.
2. Visit the left subtree.
3. Visit the right subtree.

### Inorder Traversal
1. Visit the left subtree.
2. Read the data of the node.
3. Visit the right subtree.

### Postorder Traversal

1. Visit the left subtree.
2. Visit the right subtree.
3. Read the data of the node.


## Breadth First Search (BFS)

Explore all nodes at the present depth prior to moving on to the nodes at the next depth level.

---

## BFS Traversal Approach

1. Create a queue.
2. Enqueue the root node.
3. As long as a node exists in the queue:

   * Dequeue the node from the front.
   * Read the node's value.
   * Enqueue the node's left child if it exists.
   * Enqueue the node's right child if it exists.


*/

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  isEmpty() {
    return this.root === null
  }

  insert(value) {
    const newNode = new Node(value)
    if (this.isEmpty()) {
      this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode
      } else {
        this.insertNode(root.left, newNode)
      }
    } else {
      if (root.right === null) {
        root.right = newNode
      } else {
        this.insertNode(root.right, newNode)
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false
    } else {
      if (root.value === value) {
        return true
      } else if (value < root.value) {
        return this.search(root.left, value)
      } else {
        return this.search(root.right, value)
      }
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value)
      this.preOrder(root.left)
      this.preOrder(root.right)
    }
  }

  inOrder(root) {
    if (root) {
      this.inOrder(root.left)
      console.log(root.value)
      this.inOrder(root.right)
    }
  }

  postOrder(root) {
    if (root) {
      this.postOrder(root.left)
      this.postOrder(root.right)
      console.log(root.value)
    }
  }

  levelOrder() {
    // Use the optimised queue implementation
    const queue = []
    queue.push(this.root)

    while (queue.length) {
      let curr = queue.shift()
      console.log(curr.value)

      if (curr.left) {
        queue.push(curr.left)
      }

      if (curr.right) {
        queue.push(curr.right)
      }
    }

  }

  min(root) {
    if (!root.left) {
      return root.value
    } else {
      return this.min(root.left)
    }
  }

  max(root) {
    if (!root.right) {
      return root.value
    } else {
      return this.max(root.right)
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value)
  }

  deleteNode(root, value) {
    if (root === null) {
      return root
    }

    if (value < root.value) {
      root.left = this.deleteNode(root.left, value)
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value)
    } else {
      if (!root.left && !root.right) {
        return null
      }

      if (!root.left) {
        return root.right
      } else if (!root.right) {
        return root.left
      }

      root.value = this.min(root.right)
      root.right = this.deleteNode(root.right, root.value)
    }

    return root
  }


}

const bst = new BinarySearchTree()
console.log('Tree is empty?', bst.isEmpty())

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
// bst.insert(7)

// console.log(bst.search(bst.root, 10))
// console.log(bst.search(bst.root, 15))
// console.log(bst.search(bst.root, 20))

// console.log(bst.preOrder(bst.root))
// console.log(bst.inOrder(bst.root))
// console.log(bst.postOrder(bst.root))

// console.log(bst.levelOrder())

// console.log(bst.min(bst.root))
// console.log(bst.max(bst.root))

bst.levelOrder()

bst.delete(3)
bst.delete(10)
bst.delete(15)
bst.levelOrder()

