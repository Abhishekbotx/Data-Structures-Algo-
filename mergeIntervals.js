/*Optimal Solution using O(n.logn),

Intution: Approach is we will 
 🌟- we will sort the arrays coz merging only works correctly if intervals are processes in order
 - push the first arr initially in the intervals that holds array of array,

 - Then we will check from 2nd index of array if the [Oth] index element is <= the last intervals array [1st] index, 
   if it does then overlapping possible, then we check both of their 1st index for their max for the 1st index

 - If not then push that array in intervals  

*/

const mergeIntervals=(arr)=>{
    let intervals=[];
    arr.sort((a, b) => a[0] - b[0]);
    console.log('arr::',arr)
    intervals.push(arr[0]);
    for(let i=1;i<arr.length;i++){
        const n=intervals.length
        //checking if the last pushed answer array [1]index is greater than > current arr [0]index
        if(intervals[n-1][1] >= arr[i][0]){
            //If yes then we are checking which among intervals [1]index and current arr [1]index is max
            intervals[n-1][1]=Math.max(intervals[n-1][1],arr[i][1]) 
        }else {
            //else push the current array into intervals array as it is
            intervals.push(arr[i]);
        }
    } 
    return intervals;
}

const intervals=[[1,3],[2,6],[8,10],[15,18]]
const answer=mergeIntervals(intervals)
console.log('merge intervals',answer)