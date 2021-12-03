// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//
//     You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
//     You can return the answer in any order.
//
//
//
//     Example 1:
//
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].
//     Example 2:
//
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
//
// Input: nums = [3,3], target = 6
// Output: [0,1]



var twoSum = function(nums, target) {

    var hashTable = {};

    for (let i = 0; i < nums.length; i++) {
        var neededPair = 0;

        neededPair = target - nums[i];

        if (hashTable[nums[i]] === undefined) {
            hashTable[neededPair] = i;
        } else {
            return [hashTable[nums[i]], i]
        }
    }

};

// console.log(twoSum([2,7,11,15], 9))
// console.log(twoSum([-2,7,11,15], 9))
// console.log(twoSum([-3,4,3,90], 0))
// console.log(twoSum([-1,-2,-3,-4,-5], -8))
// console.log(twoSum([-10,7,19,15], 9))
//
// console.log(twoSum([0,3,-3,4,-1], -1))