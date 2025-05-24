// /*reverse pairs leetcode */
// var reversePairs = function(nums) {
//     let n=nums.length;
//     let lowestIndex=nums.length-1;
//     let lowestVal=Math.max();
//     let count=0;

//     for(let i=0;i<n;i++){
//         if(nums[i]<lowestVal){
//             lowestIndex=i;
//             lowestVal=nums[i]
//         }
//     }

//     console.log('lowest index:',lowestIndex)

//     for(let i=0;i<n;i++){
//         if(i<lowestIndex && nums[i]> 2*nums[lowestIndex]){
//             count++
//             console.log('i',i);
//         }
//     }

//     return count;
     
// };

// const nums =[5,4,3,2,1]

// const answer=reversePairs(nums)
// console.log('answer::',answer)

/*
Optimal solution using mergesort approach
*/

const merge=(arr,low,mid,high)=>{
    let left=low;
    let right=mid+1;
    const temp=[]

    while(left<=mid && right<=high){
        if(arr[left]<arr[right]){
            temp.push(arr[left]);
            left++;
        }else{
            temp.push(arr[right]);
            right++;
        }
    }

    while(left<=mid){
        temp.push(arr[left]);
        left++;
    }
    
    while(right<=high){
        temp.push(arr[right]);
        right++;
    }

    for(let i=low;i<=high;i++){
        arr[i]=temp[i-low]
    }
}

function countPairs(arr, low, mid, high) {
  let right = mid + 1;
  let cnt = 0;
  for (let i = low; i <= mid; i++) {
    while (right <= high && arr[i] > 2 * arr[right]) right++;
    cnt += right - (mid + 1);
  }
  return cnt;
}


const mergeSort=(arr,low,high)=>{
    let count=0;
    if(low>=high){
        return count;
    }

    let mid=Math.floor((low+high)/2)
    count+=mergeSort(arr,low,mid);
    count+=mergeSort(arr,mid+1,high);
    count+=countPairs(arr,low,mid,high)
    merge(arr,low,mid,high)
    return count;
}
let arr=[5,4,3,2,1];
const answer=mergeSort(arr,0,arr.length-1);

console.log('sorted arr:',arr)
console.log('reverse pairs count: ',answer)

/*
 Visualization & Intuition for Counting Reverse Pairs:

We're counting the number of (i, j) pairs such that:
- i < j
- arr[i] > 2 * arr[j]

To do this efficiently, we use a modified Merge Sort.

At each level of merge sort:
1. We recursively sort and count reverse pairs in the **left half**.
2. We do the same for the **right half**.
3. Then, we count **cross pairs** — where `i` is in the left half and `j` is in the right half.

 Analogy:
Think of the array being split like a knockout tournament bracket.

Example:
   Original: [4, 1, 6, 2, 9]
     ↓ split
   Left: [4, 1, 6]   Right: [2, 9]
     ↓
   Check for reverse pairs across [4,1,6] and [2,9]

💡 Why we add all three counts:
- Left side might have valid (i, j)
- Right side might have valid (i, j)
- Most importantly, some (i, j) might exist where i is in left and j is in right — this is the tricky part we count manually before merging.

After counting, we merge to maintain sorted order — essential for higher-level comparisons.
*/
