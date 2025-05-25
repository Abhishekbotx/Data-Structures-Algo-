/**
* Intuition:
 • The main idea is to keep track of the maximum and minimum product at every index.
 • Why minimum? Because multiplying two negative numbers can lead to a maximum product.
 • At every step we are calculating:
 •    currentMax = max(current element, currMax * current element, currMin * current element)
 •    currentMin = min(current element, currMax * current element, currMin * current element)
 • This way, we can handle negative numbers and zeros correctly.
 • We update the result with the maximum value seen so far.
 */

var maxProduct = function(arr) {
    let currMax = arr[0];
    let currMin = arr[0];
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        const tempMax = Math.max(arr[i], arr[i] * currMax, arr[i] * currMin);
        const tempMin = Math.min(arr[i], arr[i] * currMax, arr[i] * currMin);
        currMax = tempMax;
        currMin = tempMin;
        result = Math.max(result, currMax);
    }

    return result;
};
// const array=[-1,-3,-10,0,60]
// const array=[-2, -3, 0, -2, -40]
// const array=[2,3,-2,4]
// const array=[5, -3, 5]
// const array=[-2, 3, -4]
const array=[-2, -3, 7]
const answer=maxProduct(array);
console.log('answer of maxArray',answer)