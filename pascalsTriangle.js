/*
leetcode Q-118 ;
Link: https://leetcode.com/problems/pascals-triangle/description/
Intuition:
- Pascal's Triangle is constructed such that each number is the sum of the two numbers directly above it in the previous row.
- The first and last elements of each row are always 1.
- For each row, we use the previous row to calculate the new values.
- This approach builds the triangle row by row, using dynamic programming.
*/
var generate = function(n) {
    let answer = [];
    answer[0] = [1];//setting the first array to zero 
    console.log('answer arr', answer);
    // Computing row from 1st index to 2nd last index as 0th and last index will be 1
    for (let i = 1; i < n; i++) {
        answer[i] = []; // starting a new row
        answer[i][0] = 1; // The first element of each row is always 1
        for (let j = 1; j < i; j++) {
            // Each element is the sum of the two elements above it
            answer[i][j] = answer[i-1][j-1] + answer[i-1][j];
        }
        // The last element of each row is always 1
        answer[i][i] = 1;
    }
    return answer;
};



const answer = generate(3);
console.log('Pascals Triangle', answer);