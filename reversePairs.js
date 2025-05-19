var reversePairs = function(nums) {
    let n=nums.length;
    let lowestIndex=nums.length-1;
    let lowestVal=Math.max();
    let count=0;

    for(let i=0;i<n;i++){
        if(nums[i]<lowestVal){
            lowestIndex=i;
            lowestVal=nums[i]
        }
    }

    console.log('lowest index:',lowestIndex)

    for(let i=0;i<n;i++){
        if(i<lowestIndex && nums[i]> 2*nums[lowestIndex]){
            count++
            console.log('i',i)
        }
    }

    return count;
    
};

const nums =[5,4,3,2,1]

const answer=reversePairs(nums)
console.log('answer::',answer)