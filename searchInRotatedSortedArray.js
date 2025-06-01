/*
Leetcode:Q->33, Search In Rotated Sorted Array
Link:https://leetcode.com/problems/search-in-rotated-sorted-array/description/

Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

*/

const searchInRotateSortedArray=(arr,target)=>{
    let n=arr.length;
    let low=0;
    let high=n-1;

    while(low<=high){
        let mid=Math.floor((low+high)/2);
        console.log('mid',mid)

        if(arr[mid]===target) {
            return mid;
        }

        else if(arr[low]<=arr[mid]){
            if(arr[low]<=target && target<=arr[mid]){
                high=mid-1
            }else{
                low=mid+1
            }
        }else{
            if(arr[mid]<=target && target<=arr[high]){
                low=mid+1
            }else{
                high=mid-1
            }
        }
    }
    return -1
}

// const array=[4,5,6,7,1,2,3]
// const array=[3,1]
const array=[3,5,6,1]

const answer=searchInRotateSortedArray(array,1);
console.log('answer::',answer)