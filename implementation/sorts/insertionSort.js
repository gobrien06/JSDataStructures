const insertionSort = (arr) => {
  console.log("array", arr);
  let sorted = [];
  for (let i = 0; i < arr.length; i++) {
    //Use any element from array to insert into sorted
    let input = arr.pop();
    sorted.push(input);
    
    //If the previous element in sorted (the largest element) is larger than the new input, we need to move input
    if (sorted[i - 1] > sorted[i]) {
      //move back through the sorted array
      for (let j = sorted.length - 1; j >= 0; j--) {
        //if the current input is still smaller than the previous, keep swapping elements until we move input all the way left
        if (sorted[j - 1] > sorted[j])
          [sorted[j - 1], sorted[j]] = [sorted[j], sorted[j - 1]];
      }
    }
  }

  return sorted;
};

const arr = [2, 3, 4, 10, 5, 20, 1, 88, 890, 1000];

console.log("sorted arr", insertionSort(arr));
