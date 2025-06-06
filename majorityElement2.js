const arr=[6,5,5,5,6,4]

// const map=new Map();
const sArr=[]

const hmap=new Map();
 // time complexity O(N)
 for(let i=0;i<arr.length;i++){
    const exist=hmap.has(arr[i])

    if(!exist){
        hmap.set(arr[i],1)
    }else{
        hmap.set(arr[i], hmap.get(arr[i]) + 1)
    }
 }

 // time complexity O(N.logN)
 for (const [key, value] of hmap.entries()) {
    if (value > arr.length/3) {
        sArr.push(key)
    }
 }


 //Optimal Approach using O(N) time complexity
//  const numArr=[0,0,1,3,1,1,4]
 const numArr=[0,0,1,3,1,1]

const majorityElementNby3 = (array) => {
    let count1 = 0;
    let count2 = 0;
    let num1 = Math.min(); 
    let num2 = Math.min();
    let array2 = [];

    /*
      The idea is similar to the Boyer-Moore Voting Algorithm, but since we want elements appearing more than n/3 times,
      there can be at most 2 such elements. So we keep track of two candidates.
    */
    for (let i = 0; i < array.length; i++) {
        if (array[i] != num2 && count1 == 0) {
            num1 = array[i];
            count1 = 1;
        }
        else if (array[i] != num1 && count2 == 0) {
            num2 = array[i];
            count2 = 1;
        }

        else if (array[i] == num1) {
            count1++;
        }
        else if (array[i] == num2) {
            count2++;
        }
        // If current element is not equal to num1 or num2, decrement both counts
        else {
            count1--;
            count2--;
        }
    }

    // checking manually if  if num1 and num2 actually appear more than n/3 times
    count1 = 0;
    count2 = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === num1) count1++;
        if (array[i] === num2) count2++;
    }

    let condition = Math.floor(array.length / 3);
    if (count1 > condition) array2.push(num1);
    if (count2 > condition && num2 !== num1) array2.push(num2); //checking if both the num1 and num2 doesnt have duplicate value

    return array2;
}

const answer=majorityElementNby3(numArr)
console.log('answerr::',answer)