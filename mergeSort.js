// Merge sort function

function mergeSort(unsortedArray) {
  // 1- Base case

  if (unsortedArray.length < 2) {
    return unsortedArray;
  }
  // 2- Recurssive case

  // Split the unsortedArray into two parts
  let arrayA = unsortedArray.slice(0, Math.round(unsortedArray.length / 2));
  let arrayB = unsortedArray.slice(
    Math.round(unsortedArray.length / 2),
    unsortedArray.length
  );

  // Sort left side and right side, then merge the two sorted arrays
  return merge(mergeSort(arrayA), mergeSort(arrayB));
}

function merge(arrayA, arrayB) {
  let mergeSortedArray = [];
  let i = 0;
  let j = 0;

  while (i < arrayA.length && j < arrayB.length) {
    if (arrayA[i] < arrayB[j]) {
      mergeSortedArray.push(arrayA[i]);
      i++;
    } else {
      mergeSortedArray.push(arrayB[j]);
      j++;
    }
  }

  if (i == arrayA.length) {
    while (j < arrayB.length) {
      mergeSortedArray.push(arrayB[j]);
      j++;
    }
  }

  if (j == arrayB.length) {
    while (i < arrayA.length) {
      mergeSortedArray.push(arrayA[i]);
      i++;
    }
  }
  return mergeSortedArray;
}
