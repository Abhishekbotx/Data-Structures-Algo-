/*
Leetcode Q.704 Binary Search
Link:https://leetcode.com/problems/binary-search/

Conditions:
 - Binary search is only applicable in a sorted search space. The sorted search space does not necessarily
   have to be a sorted array. It can be anything but the search space must be sorted.

 - In binary search, we generally divide the search space into two equal halves and then try to locate which
   half contains the target. According to that, we shrink the search space size.
*/

//Q. array = {3, 4, 6, 7, 9, 12, 16, 17} and target = 6.

const BinarySearch=(arr,target)=>{
    let n=arr.length
    let low=0;
    let high=n-1
    while(low<=high){
        let mid=Math.floor((high+low)/2)
        console.log('mid:',mid)
        if(arr[mid]==target) return mid;
        else if(target<arr[mid]){
            high=mid-1
        }else{
            low=mid+1
        }

    }
    return -1
}

const arr=[3, 4, 6, 7, 9, 12, 16, 17]
const answer=BinarySearch(arr,9)
console.log('binarysearch answer:',answer)