
/*
    Example 2:
    Input Format: N = 6, arr[] = {3,5,8,9,15,19}, x = 9
    Result: 4
    Explanation: Index 4 is the smallest index such that arr[4] > x.
    fnd smallest index greater than target

    Intuition:
    - define:low,high,probable answer as ans, find mid,
    - case 1: if you get to know if arr[mid]> target then assume that that mid can be your ans
              && you are forgetting your right half and trying to find if is there any probable answer in the left half so🐾 high=mid-1

    - case 2: if you get to  to arr[mid]<target then we are tring to find it in right side and forgetting left side,
              so🐾 low=mid+1  

*/

    const upperBound=(arr,target)=>{
    let n=arr.length
    let low=0;
    let high=n-1
    let ans=n

    while(low<=high){
        let mid=Math.floor((low+high)/2);
        if(arr[mid]>target){
            ans=mid;
            high=mid-1
        }else{
            low=mid+1
        }

    }
    return ans
}

// const arr=[3,5,8,9,12,19]
const arr=[5,8,9,12,19,20]
const answer=upperBound(arr,18);
console.log('answer>>upper bound:',answer);
