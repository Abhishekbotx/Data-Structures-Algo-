//The intuition is something, if we have seen a value before means the element subarrray sum will be zero in between

const longestSubarrayZeroSum=(arr)=>{
    let hmap=new Map();// Map to store prefixSum -> firstIndex
    let sum=0;        // Running prefix sum
    let max= 0;         // Max length of subarray with sum 0

    
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
        if(sum===0){
            max=i+1;
        //if the sum is 0 means the max count will be till this index (means +1 for the 0th index)    
        }
        else{
            if(hmap.has(sum)){
                max=Math.max(max,i-hmap.get(sum)) 
        // calculating the max count , by substarcting the index at which the same ekleent was found from the current index
            }else{
                hmap.set(sum,i)
        //if we havent seen that sum then add it in the hashmap;        
            }
        }
    }
    return max;
}

// let array=[9,-3,3,-1,6-5]
let array=[6, -2, 2, -8, 1, 7, 4, -10]
console.log('answer of longest subarraay',longestSubarrayZeroSum(array))