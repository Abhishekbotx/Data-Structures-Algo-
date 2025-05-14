const nums1=[1,3,4,5,6]
const nums2=[2,3,5,5,6,6,8]

const nums3 = [];
let i = 0, j = 0;

while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
        if (nums3[nums3.length - 1] !== nums1[i]) {
            nums3.push(nums1[i]);
        }
        i++;
    } else if (nums1[i] > nums2[j]) {
        if (nums3[nums3.length - 1] !== nums2[j]) {
            nums3.push(nums2[j]);
        }
        j++;
    } else {
        if (nums3[nums3.length - 1] !== nums1[i]) {
            nums3.push(nums1[i]);
        }
        i++;
        j++;
    }
}

while (i < nums1.length) {
    if (nums3[nums3.length - 1] !== nums1[i]) {
        nums3.push(nums1[i]);
    }
    i++;
}

while (j < nums2.length) {
    if (nums3[nums3.length - 1] !== nums2[j]) {
        nums3.push(nums2[j]);
    }
    j++;
}

console.log('union -->', nums3);

return nums3;