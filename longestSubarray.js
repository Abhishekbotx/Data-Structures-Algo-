/*problem:Longest subarray of sum =k
  🍁Need improvement in this approach
*/

const array=[2,3,6,4,7,1];  
const k=12;

const findLongestSubarray=(arr,k)=>{


const nums=[];
let sum=0;
let tempSum=0;

for(let i=0;i<arr.length;i++){
 if(arr[i]+ sum <k){
    sum+=arr[i]
    nums.push(arr[i])
 }else if(arr[i] + sum ==k){
    nums.push(arr[i]);
    sum+=arr[i]
    console.log('num>>',nums)
    return nums
 }else{
    const number=nums.shift()
    // console.log(`number${i}:`,number)
    tempSum=sum;
    tempSum-=number
    tempSum+=arr[i]
    // console.log(`sum${i}:`,tempSum)

    if(tempSum==k){
          nums.push(arr[i]);
          // console.log('num>>',nums)
          return nums;
    }

    
    if (tempSum <= k) { 
      nums.length=0;
      sum=arr[i];
      nums.push(arr[i]);
    } else {
      nums.length=0;
      sum=arr[i];
      sum = 0; 
    }
 }
}
return []
}

const ans=findLongestSubarray(array,k)
console.log('answer:',ans)