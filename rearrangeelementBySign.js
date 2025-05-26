 /*Difficulty-medium
 Leetcode:Q-2149. Rearrange Array Elements by Sign
 Link:https://leetcode.com/problems/rearrange-array-elements-by-sign/description/

 intution to optimal approach:
 - we will start putting positive number on even places and odd on add start post from 0th index and negative from 1st index
 - the moment we get positive value push it on that array in the new array and then +2 that index same for negative easy 

 //Bruteforce approach with time complexity o(N + N/2) and space complexity O(N/2 + N/2)
    const rearrangeElementBySign=(arr){
        n=arr.length
        let posArr=[];
        let negArr=[];

        for(let i=0;i<n;i++){
            if(arr[i]>=0){
                posArr.push(arr[i]);
            }else{
                negArr.push(arr[i]);
            }
        }

        for(let i=0;i<n/2;i++){
            arr[2*i]=posArr[i];
            arr[2*i+1]=negArr[i];
        }
        return arr;
    }

 */   

    

  // Optimal approach with time complexity O(N) and Space complexity O(N))
    const rearrangeElementBySign=(arr)=>{
    
        let newArr=new Array(n).fill(0);
        let posIdx=0;let negIdx=1;
        for(let i=0;i<n;i++){
            
            if(arr[i]>=0){
                newArr[posIdx]=arr[i];
                posIdx+=2;
            }else{
                newArr[negIdx]=arr[i];
                negIdx+=2;
            }
        }
        return newArr;
    }