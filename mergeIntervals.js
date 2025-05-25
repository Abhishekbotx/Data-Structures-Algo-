const mergeIntervals=(arr)=>{
    let intervals=[];
    arr.sort((a, b) => a[0] - b[0]);
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