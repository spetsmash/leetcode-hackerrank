// https://leetcode.com/problems/valid-parentheses/
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
//     An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    var obj = {'(': ')', '{': '}', '[': ']'};
    var closing = [')', '}', ']'];
    while (s.length) {
        var temp = s[0];
        if (stack.length === 0) {
            if (closing.indexOf(temp) >= 0) return false;
            stack.push(temp);
        } else if(closing.indexOf(temp) >= 0 && obj[stack[stack.length-1]] !== temp) {
            return false;
        } else if(obj[stack[stack.length-1]] === temp) {
            stack.pop();
        } else {
            stack.push(temp);
        }
        s = s.substr(1);


    }
    return !stack.length;
};
