// var sortColors = function(arr) {
//     const nums=[];

//     let red=0;
//     let white=0 ;
//     let blue = 0;

//     for(let i=0;i<arr.length;i++){
//         if(arr[i]===0){
//             red++;
//         }else if(arr[i]===1){
//             white++;
//         }else{
//             blue++;
//         }
//     }


//     for(let i=0;i<arr.length;i++){
//         if(red>0){
//             nums.push(0)
//             red--;
//         }else if(white>0){
//             nums.push(1)
//             white--;
//         }else{
//             nums.push(2)
//             blue--;
//         }
//     }
//     return nums
// };

// const array=[2,0,2,1,1,0]
// const answer=sortColors(array);
// console.log('answer-->',answer)


/*
    Dutch National Flag Algorithm Explanation:

    - We are using three pointers:
        low: marking the boundary for 0s (start of the array)
        mid: current element being checked
        high: marking the boundary for 2s (end of the array)

    - Initialize low = 0, mid = 0, and high = nums.length - 1.

    - Iterating while mid <= high:
        - If nums[mid] === 0:
            swapping nums[low] and nums[mid], then increment both low and mid.

        - If nums[mid] === 2:
            swapping nums[mid] and nums[high], then decrement high only coz 2 is highest.
            (not increment mid, as the swapped element needs to be checked ...its what 0,1 or 2)

        - If nums[mid] === 1: 
            Just increment mid.


*/
var sortColors=(nums)=>{
let low = 0, mid = 0, high = nums.length - 1;
    while(mid <= high) {
        if(nums[mid] === 0) {
            swap(nums, low, mid);
            low++;
            mid++;
        } else if(nums[mid] === 2) {
            swap(nums, mid, high);
            high--;
        } else {
            mid++;
        }
    }
}   

const swap = (arr, a, b) => [arr[a], arr[b]] = [arr[b], arr[a]];

const array=[2,0,2,1,1,0]
sortColors(array);
console.log('answer-->', array)