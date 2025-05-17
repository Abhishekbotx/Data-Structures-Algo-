/*
Question:

Example 1:
Input:
 arr = [4, 7, 1, 0]
Output:
 7 1 0
Explanation:
 Rightmost element is always a leader. 7 and 1 are greater than the elements in their right side.

Example 2:
Input:
 arr = [10, 22, 12, 3, 0, 6]
Output:
 22 12 6
Explanation:
 6 is a leader. In addition to that, 12 is greater than all the elements in its right side (3, 0, 6), also 22 is greater than 12, 3, 0, 6.

*/


const leadersInAnArray=(arr)=>{
    let newArr=[];
    let n=arr.length;
    let j=n-1
    for(let i=1;i<n;i++){
        if(arr[i]>arr[j]){
            newArr.push(arr[i])
        }
    }
    newArr.push(arr[j])
    return newArr;
}
// let array=[10, 22, 12, 3, 0, 6]
let array=[4, 7, 1, 0]
const answer=leadersInAnArray(array);
console.log("answer>>",answer)