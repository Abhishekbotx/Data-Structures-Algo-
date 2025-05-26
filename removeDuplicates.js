/*Leetcode Q-26 Link:https://leetcode.com/problems/remove-duplicates-from-sorted-array/
Time complexity :O(N)
Intuition:if your current element is not eqal to prev element push this number in the array and count ++
*/
var removeDuplicates = function(arr) {
    let count=1;
    // let j=0;
    if(arr.length==1){
        return 1;
    }

    for(let i=1;i<arr.length;i++){
        if(arr[i]!==arr[i-1]){
            arr[count]=arr[i]
            count++
        }
    }
    return {count,arr};
};
// const arr=[1,1,2]
const arr=[0,0,1,1,1,2,2,3,3,4]
const answer=removeDuplicates(arr)
console.log('answer:',answer)