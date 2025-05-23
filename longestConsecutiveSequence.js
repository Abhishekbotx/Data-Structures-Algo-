/*Longest Subarray Problem */
const arr = [100, 200, 1, 3, 2, 4];
const longestConsecutiveSequence = (arr) => {
    const n = arr.length;
    arr.sort((a, b) => a - b); 
    console.log('sorted array', arr);

    let maxLength = 1;
    let currentLength = 1;

    for (let i = 0; i < n - 1; i++) { 
        if (arr[i + 1] - arr[i] === 1) {
            currentLength += 1;
            maxLength = Math.max(maxLength, currentLength);
        } else {
            currentLength = 1;
        }
    }

    return maxLength;
};

const ans = longestConsecutiveSequence(arr);
console.log('answer>>', ans);