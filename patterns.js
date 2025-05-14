let n=5;
// for(let i=0;i<5;i++){
//     for(let j=0;j<n;j++){
//         process.stdout.write(String(j + 1))
//     }
//     process.stdout.write("\n");
//     n--;
// }
// console.log('optimised approach ');
// for(let i=0;i<n;i++){
//     let row=""
//     for(let j=0;j<n-i;j++){
//         row+=`${j+1}`;
//     }
//     console.log(row)
// }

let k=1;
for(let i=0;i<n;i++){
    for(let j=0;j<i+1;j++){
        process.stdout.write(String(k)+' ')
        k++;
    }
    process.stdout.write('\n')
}

for(let i=0;i<7;i++){
    for(let j=0;j<7;j++){

    }
}

// {3,9,6,5,4} --->3,4,5,6.9

let arr=[3,9,6,5,4]

// for (let i = 0; i < arr.length; i++) {
//     let ks = arr.length - 1;
//     for (let j = i; j < ks; j++) {
//         let maxval = arr[j];
//         if (arr[j] < arr[ks]) {
//             maxval = arr[j];
//             ks--;
//         } else {
//             maxval = arr[ks];
//             let temp = arr[j];
//             arr[j] = arr[ks];
//             arr[ks] = temp;
//             ks--;
//         }
//     }
// }
// console.log("arr -->", arr);


for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
        //swapping without extra variables;
    //   [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    // [arr[i],arr[minIndex]]=[arr[i],arr[minIndex]]
    let temp=arr[i]
    arr[i]=arr[minIndex]
    arr[minIndex]=temp
    }
  }
  
  console.log("arr2-->", arr);

  /*
  Insertion sort 
  let arr = [5, 3, 8, 4, 2];

  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];  // shift right
      j--;
    }

    arr[j + 1] = current;  // insert current value
  }
  console.log("Insertion Sort →", arr);
  */