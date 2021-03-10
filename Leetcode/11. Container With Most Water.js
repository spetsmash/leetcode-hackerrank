// https://leetcode.com/problems/container-with-most-water/
//
// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines
// are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the
//     x-axis forms a container, such that the container contains the most water.
//
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var max = 0;
    var left = 0;
    var right = height.length-1;

    while (right - left > 0) {
        var area = Math.min(height[left], height[right]) * (right - left);
        max = Math.max(max, area)
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max;
};

maxArea([1,8,6,2,5,4,8,3,7])
