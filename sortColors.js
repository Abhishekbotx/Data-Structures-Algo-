var sortColors = function(arr) {
    const nums=[];

    let red=0;
    let white=0 ;
    let blue = 0;

    for(let i=0;i<arr.length;i++){
        if(arr[i]===0){
            red++;
        }else if(arr[i]===1){
            white++;
        }else{
            blue++;
        }
    }


    for(let i=0;i<arr.length;i++){
        if(red>0){
            nums.push(0)
            red--;
        }else if(white>0){
            nums.push(1)
            white--;
        }else{
            nums.push(2)
            blue--;
        }
    }
    return nums
};

const array=[2,0,2,1,1,0]
const answer=sortColors(array);
console.log('answer-->',answer)