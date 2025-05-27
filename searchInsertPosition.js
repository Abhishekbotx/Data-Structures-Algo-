/*
Leetcode Q.35:Search Insert Position
Link:https://leetcode.com/problems/search-insert-position/description/

Given a sorted array of distinct integers and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Intution:
    - define:low,high,probable answer as ans, find mid,
    - case 1: If arr[mid]==target then return that mid
    - case 1: if you get to know if arr[mid]> target then assume that that mid can be your ans
              && you are forgetting your right half and trying to find if is there any probable answer in the left half so🐾 high=mid-1

    - case 2: if you get to  to arr[mid]<target then we are tring to find it in right side and forgetting left side,
              so🐾 low=mid+1  

*/

var searchInsert = function(arr, target) {
    let n=arr.length
    let low=0;
    let high=n-1
    let ans=n

    while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(arr[mid]==target){
            return mid;
        }
        else if(arr[mid]>target){
            ans=mid;
            high=mid-1
        }else{
            low=mid+1
        }

    }
    return ans
};
const arr=[1,3,5,6]
// target =5
target=2
const answer=searchInsert(arr,target);
console.log('answer>>searchInsertPosition:',answer)