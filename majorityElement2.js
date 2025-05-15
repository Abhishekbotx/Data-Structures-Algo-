const arr=[6,5,5,5,6,4]

// const map=new Map();
const sArr=[]

const hmap=new Map();
// // time complexity O(N)
 for(let i=0;i<arr.length;i++){
    const exist=hmap.has(arr[i])

    if(!exist){
        hmap.set(arr[i],1)
    }else{
        hmap.set(arr[i], hmap.get(arr[i]) + 1)
    }
 }

// // time complexity O(N.logN)
 for (const [key, value] of hmap.entries()) {
    if (value > arr.length/3) {
        sArr.push(key)
    }
 }