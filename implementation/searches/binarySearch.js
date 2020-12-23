// SOURCE - https://en.m.wikipedia.org/wiki/Binary_search_algorithm

const binarySearch = (arr, len, target) => {
  let left = 0;
  let right = len - 1;

  while (left <= right) {
    //taking the ceiling might change the result if the target appears more than once in array
    let mid = Math.floor((left + right) / 2);

    //if middle element is less than target, set left after middle
    if (arr[mid] < target) left = mid + 1;
    //if middle element is greater than target, set right before middle
    else if (arr[mid] > target) right = mid - 1;
    /* CHECK FOR MIDDLE = TARGET EVERY ITERATION */
    //element at middle is target, return middle
    else return mid;
  }

  return false;
};

//doesn't compare middle to target every iteration, but requires one more iteration
const altBinarySearch = (arr, len, target) => {
  let left = 0;
  let right = len - 1;

  while (left != right) {
    //taking the ceiling might change the result if the target appears more than once in array
    let mid = Math.ceil((left + right) / 2);

    if (arr[mid] > target) right = mid - 1;
    else left = mid;
    /* DON'T CHECK FOR MIDDLE = TARGET EVERY ITERATION */
  }

  if (arr[left] === target) return left;

  return false;
};

// DUPLICATE LEFTMOST AND RIGHTMOST SEARCHES

const rightMostBinSearch = (arr, len, tar) => {
  let left = 0;
  let right = len;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] > tar) right = mid;
    else left = mid + 1;
  }

  return right - 1;
};

const leftMostBinSearch = (arr, len, tar) => {
  let left = 0;
  let right = len;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] < tar) left = mid + 1;
    else right = mid;
  }

  return left;
};

let arr = [2, 3, 6, 7, 8, 9, 1, 4, 11, 22, 11, 6, 3355, 339485, 55865, 3834092];
arr = arr.sort((a, b) => a - b);

console.log("has 11?", binarySearch(arr, arr.length, 11));
console.log("has 11 with alt binsearch?", altBinarySearch(arr, arr.length, 11));
console.log("has 11 left-most?", leftMostBinSearch(arr, arr.length, 11));
console.log("has 11 right-most?", rightMostBinSearch(arr, arr.length, 11));
