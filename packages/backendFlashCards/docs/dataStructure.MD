# Complexibily in time and memory

# Big Notation

## O(1)

```js
function returnFirstElement(array[]) {
    return array[0]
}
```

It is a constants the input will do always the same number of operations

## O(log n)

`binary search`: in this we need to have a ordered list we always eliminate half of the list comparying with the number we are trying to found.

```js
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // Calculate the middle index. Using Math.floor to handle odd/even array lengths.
    const mid = Math.floor((left + right) / 2);

    // Check if the middle element is the target.
    if (arr[mid] === target) {
      return mid; // Target found, return its index.
    }
    // If the target is greater than the middle element, search the right half.
    else if (arr[mid] < target) {
      left = mid + 1;
    }
    // If the target is less than the middle element, search the left half.
    else {
      right = mid - 1;
    }
  }

  // If the loop finishes without finding the target, it means the target is not in the array.
  return -1;
}
```

## O(n)

`linear search: `:

```js
function linearSearch(arr, target) {
  // Loop through each element of the array
  for (let i = 0; i < arr.length; i++) {
    // If the current element matches the target, return its index
    if (arr[i] === target) {
      return i;
    }
  }
  // If the target is not found after checking all elements, return -1
  return -1;
}
```

## o(n2) complexity quarratica

`bubbleSort`is a good example

```js
function bubbleSort(arr) {
  const n = arr.length;
  let swapped;

  for (let i = 0; i < n - 1; i++) {
    swapped = false; // Flag to check if any swaps occurred in this pass

    // Inner loop for comparisons and swaps
    // The last 'i' elements are already in place after 'i' passes
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements using array destructuring (ES6)
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true; // Set flag to true if a swap occurred
      }
    }

    // If no two elements were swapped in the inner loop, the array is sorted
    if (!swapped) {
      break;
    }
  }
  return arr;
}
```
