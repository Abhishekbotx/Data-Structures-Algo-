// const arr = [1, 100, 2, 3, 4, 5];
// let k=arr.length-1;
// let maxVal=-Infinity;
// for (let i = 0; i <= k; i++) {
//     if (arr[i] > maxVal) {
//       maxVal = arr[i];
//     }
//     if (arr[k] > maxVal) {
//       maxVal = arr[k];
//     }
//     k--;
//   }

// console.log('maxval-->',maxVal) 


const arr2=[10,20,30,2,4,6]
let lastMaxValIndex=-1;
let lastMaxVal=-Infinity;
 let secondStartAscendingIndex=-1
const n=arr2.length
let h;
for(let i=1;i<=n-1;i++){
    if(arr2[i]>lastMaxVal){
        lastMaxValIndex=i
        lastMaxVal=arr2[i];
    }
    if(arr2[h]>lastMaxVal){ 
        lastMaxValIndex=h
        lastMaxVal=arr2[h];
        secondStartAscendingIndex=i
    }

    ((i>=secondStartAscendingIndex) && (arr2[i]>arr2[secondStartAscendingIndex]))?true:false

    //now again check from that index, as the second startAscending index

}