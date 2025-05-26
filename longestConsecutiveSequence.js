/*Leetcode Q.128 Longest Consecutive SequenceProblem 
  Link:https://leetcode.com/problems/longest-consecutive-sequence/description/

  Intuition:
  - whenever you need to find sequence sort it first there can be probabilty you end up sending wrong length of subarray;
  - iterate through the array, and check if the last element and current element has diffrence only 1 if yes then,
    increase the maxcount length and check if current length > than the old maxlength and update
  - if the last element and current element are same do nothing    
  - else set the currentLength to 1  

*/
// const arr = [100, 200, 1, 3, 2, 4];
const arr = [2, 1,0, 1];
const longestConsecutiveSequence = (arr) => {
const n = arr.length;
    arr.sort((a, b) => a - b); 
    // console.log('sorted array', arr);

    let maxLength = 1;
    let currentLength = 1;
    if(arr.length==0){
        return 0;
    }
    for (let i = 1; i < n ; i++) { 
        if (arr[i] - arr[i-1] === 1) {
            currentLength += 1;
            maxLength = Math.max(maxLength, currentLength);
        }else if(arr[i]-arr[i-1] ==0){
            currentLength+=0;
        } else {
            currentLength = 1;
        }
    }

    return maxLength;
};

const ans = longestConsecutiveSequence(arr);
console.log('answer>>', ans);