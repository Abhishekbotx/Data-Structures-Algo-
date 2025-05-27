/*
    Example 1:
    Input Format: N = 4, arr[] = {1,2,4,8}, x = 7
    Result: 3

    Explanation: Index 3 is the smallest index such that arr[3] >= x.

    Intution:
    - define:low,high,probable answer as ans, find mid,
    - case 1: if you get to know if arr[mid]>=target then assume that that mid can be your ans
              && you are forgetting your right half and trying to find if is there any probable answer in the left half so🐾 high=mid-1

    - case 2: if you get to  to arr[mid]<target then we are tring to find it in right side and forgetting left side,
              so🐾 low=mid+1    
*/

const lowerBound=(arr,target)=>{
    let n=arr.length;
    let low=0;
    let high=n-1;
    let ans=n
    while(low<=high){
        console.log('function ran')
        let mid=Math.floor((low+high)/2);
        if(arr[mid]>=target){
            ans=mid
            high=mid-1
        //   return mid;  
        }
        else 
            low=mid+1
        }
    return ans;
}


const arr=[1,3,5,8,9,11]
const answer=lowerBound(arr,6)
console.log('answer lower bound:',answer)