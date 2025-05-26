// const arr=[3,1,3,3,1,0,0,0,0]

// const hmap=new Map();
// // time complexity O(N)
//  for(let i=0;i<arr.length;i++){
//     const exist=hmap.has(arr[i])

//     if(!exist){
//         hmap.set(arr[i],1)
//     }else{
//         hmap.set(arr[i], hmap.get(arr[i]) + 1)
//     }
//  }
// let max=0;
// let majorityElement = 0;
// // time complexity O(N.logN)
//  for (const [key, value] of hmap.entries()) {
//     if (value > max) {
//         max = value;
//         majorityElement = key;
//     }
//  }
// console.log("Majority Element:", majorityElement);


/*Optimal Approach using O(N) + O(N) 

Intuition:The intution is clear using booye moores algorithm,
we are initially taking a number and making it the num that can be the possible max then,
then moving forward if that number again we meet then  make the count ++;

If not then -- from count and if the count is zero then make the next number as your possible
max by this approach we can have our possible max,till the end of the iteration

 Then we manually check again having a max count if we are having that num is actually greater than n/2
*/
const arr=[6,5,5]
let count=0;
let num;

for(let i=0;i<arr.length;i++){
    if(count<=0){
        num=arr[i]
        count=1
    }
    // console.log(`num:${i}>> ${num}`)
    // console.log(`count:${i}>> ${count}`)
    else {
        if (arr[i] == num) {
            count++;
        } else {
            count--;
        }
    }
}

let maxm=0
//Checking manually if the number is actually the majority
for(let i=0;i<arr.length;i++){
    arr[i]==num
    maxm++;

}

isMajorityElement=maxm>(arr.length/2);



console.log('isMajorityElement',isMajorityElement,num)