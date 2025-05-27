/*
Leetcode Q:34. Find First and Last Position of Element in Sorted Array
Link:https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

Intution:
    - Do binary search to find the target if you are able to find the index then,
    - Then run a loop to mark low and high index,
*/
var searchRange = function(arr, target) {
    let nums=[];
    let n=arr.length;
    let low=0;
    let high=n-1;

    const elementIndex=BinarySearch(arr,target);
    console.log('index::',elementIndex)
    if(elementIndex==-1){
        return [-1,-1]
    }
    if(arr.length===1 && elementIndex>=0){
        return [elementIndex,elementIndex]
    }
    const element=arr[elementIndex];

    let count=0;



    for(let i=0; i<n; i++){
        console.log('iteration:',i)
        if(arr[i]===element && count==0){
            low=i
            high=i
            nums[0]=low
            nums[1]=high
            count ++;
        }else if(arr[i]===element && count>0){
            high=i;
            nums[1]=high
            count++
        }
        console.log('low,',low,'high:',high)
        // nums.push(low);
        // nums.push(high); 
    }
    console.log('num>>',nums)
    return nums
    // return arr[low,high]
};

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
const arr=[2,2]

const answer=searchRange(arr,2)
console.log('answer:first and last index',answer)