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

for(let i=0;i<arr.length;i++){
    arr[i]==num
    maxm++;

}

isMajorityElement=maxm>(arr.length/2);



console.log('isMajorityElement',isMajorityElement,num)