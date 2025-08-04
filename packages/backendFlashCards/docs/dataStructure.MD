# Data Structures and Algorithms in TypeScript

This guide provides an overview of common data structures and algorithms (DSA) with practical examples in **TypeScript**. It’s designed for developers preparing for interviews or looking to strengthen their understanding of core computer science concepts.

---

## 📘 Table of Contents

1. [Arrays](#arrays)
2. [Linked Lists](#linked-lists)
3. [Stacks](#stacks)
4. [Queues](#queues)
5. [Hash Tables (Maps)](#hash-tables-maps)
6. [Trees](#trees)
7. [Graphs](#graphs)
8. [Sorting Algorithms](#sorting-algorithms)
9. [Searching Algorithms](#searching-algorithms)
10. [Recursion](#recursion)
11. [Big-O Notation](#big-o-notation)

---

## 📦 Arrays

Arrays are linear data structures for storing elements at contiguous memory locations.

```ts
const nums: number[] = [1, 2, 3, 4, 5];

// Access
console.log(nums[0]); // 1

// Insertion
nums.push(6); // [1, 2, 3, 4, 5, 6]

// Deletion
nums.pop(); // [1, 2, 3, 4, 5]
```

---

## 🔗 Linked Lists

A linear data structure where elements are stored in nodes and each node points to the next.

```ts
class Node {
  value: number;
  next: Node | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

class LinkedList {
  head: Node | null = null;

  append(value: number) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  print() {
    let current = this.head;
    const result: number[] = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(' -> '));
  }
}

// Usage
const list = new LinkedList();
list.append(1);
list.append(2);
list.print(); // 1 -> 2
```

---

## 🗂️ Stacks (LIFO)

Last-In-First-Out structure.

```ts
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

// Usage
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2
```

---

## 📬 Queues (FIFO)

First-In-First-Out structure.

```ts
class Queue<T> {
  private items: T[] = [];

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }

  peek(): T | undefined {
    return this.items[0];
  }
}

// Usage
const queue = new Queue<string>();
queue.enqueue('A');
queue.enqueue('B');
console.log(queue.dequeue()); // A
```

---

## 🔐 Hash Tables (Maps)

Key-value pairs for fast access.

```ts
const map = new Map<string, number>();
map.set('apple', 3);
map.set('banana', 2);

console.log(map.get('apple')); // 3
```

---

## 🌲 Trees

Hierarchical data structure where each node has a value and children.

```ts
class TreeNode {
  value: number;
  left: TreeNode | null = null;
  right: TreeNode | null = null;

  constructor(value: number) {
    this.value = value;
  }
}

// Binary Tree traversal example
function inOrderTraversal(root: TreeNode | null): void {
  if (!root) return;
  inOrderTraversal(root.left);
  console.log(root.value);
  inOrderTraversal(root.right);
}
```

---

## 🌐 Graphs

Non-linear structure with nodes and edges.

```ts
class Graph {
  private adjList = new Map<string, string[]>();

  addVertex(vertex: string) {
    if (!this.adjList.has(vertex)) {
      this.adjList.set(vertex, []);
    }
  }

  addEdge(src: string, dest: string) {
    this.adjList.get(src)?.push(dest);
    this.adjList.get(dest)?.push(src); // undirected
  }

  printGraph() {
    for (let [vertex, edges] of this.adjList.entries()) {
      console.log(`${vertex} -> ${edges.join(', ')}`);
    }
  }
}
```

---

## 📊 Sorting Algorithms

### Bubble Sort

```ts
function bubbleSort(arr: number[]): number[] {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
```

### Quick Sort

```ts
function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const left = arr.slice(1).filter((v) => v <= pivot);
  const right = arr.slice(1).filter((v) => v > pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}
```

---

## 🔍 Searching Algorithms

### Linear Search

```ts
function linearSearch(arr: number[], target: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}
```

### Binary Search

```ts
function binarySearch(arr: number[], target: number): number {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}
```

---

## 🔁 Recursion

A function that calls itself.

```ts
function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
```

---

## 🧠 Big-O Notation

| Complexity | Example               | Notes              |
| ---------- | --------------------- | ------------------ |
| O(1)       | Accessing array index | Constant time      |
| O(n)       | Linear Search         | Scales with input  |
| O(n²)      | Bubble Sort           | Nested loops       |
| O(log n)   | Binary Search         | Divide and conquer |
| O(n log n) | Merge/Quick Sort      | Optimal sorting    |

---

## ✅ Summary

Learning DSA is critical for building efficient software and succeeding in technical interviews. This guide provides a solid foundation in TypeScript to explore data structures and algorithms in a type-safe and modern JavaScript environment.

---

Happy coding! 🚀
