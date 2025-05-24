/* 
Merge Sort Algorithm (Divide and Conquer)

Intuition:
  Merge Sort is on divide and  conquer algorithm.
- It divides the array into smaller subarrays until each subarray has one element.
- Then it merges those subarrays back together in sorted order.

Time Complexity: O(n log n)
Space Complexity: O(n) for the temporary array used during merge
*/

// Merges two sorted halves: arr[low..mid] and arr[mid+1..high]
//The main sorting and merging happens in the merge function
const merge = (arr, low, mid, high) => {
    let left = low;          // Pointer for left subarray
    let right = mid + 1;     // Pointer for right subarray
    const temp = [];         // Temporary array to store merged result

    // Merging the two sorted halves
    while (left <= mid && right <= high) {
        if (arr[left] < arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            right++;
        }
    }

    // Adding remaining elements from the left subarray (coz the right subarray is exhausted)
    while (left <= mid) {
        temp.push(arr[left]);
        left++;
    }

    // Adding remaining elements from the right subarray (coz the left subarray is exhausted)
    while (right <= high) {
        temp.push(arr[right]);
        right++;
    }

    // Now push all them right back in the original array
    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low];  // Offset by low to map correctly
    }
}

/*
arr=[4,1,6,2,9]
Why i-low,
for example you were sorting from 2nd index to 4th index,
after sorting your temp is now = [2,6,9]
now you need to know where you are putting you item in array,
arr[2]=temp[2-2]=2
arr[3]=temp[3-2]=6
arr[4]=temp[4-2]=9
*/

// Recursively splits the array and calls merge to sort it
const mergeSort = (arr, low, high) => {
    // Base case: if subarray has 0 or 1 element, it's already sorted
    if (low >= high) {
        return;
    }

    // Step 1: Finding the middle index
    let mid = Math.floor((low + high) / 2);

    // Step 2: Recursively sorting the left half
    mergeSort(arr, low, mid);

    // Step 3: Recursively sorting the right half
    mergeSort(arr, mid + 1, high);

    // Step 4: Merging the two sorted halves
    merge(arr, low, mid, high);
}


let arr = [4, 1, 6, 2, 9];
mergeSort(arr, 0, arr.length - 1);
console.log('sorted arr:', arr);
