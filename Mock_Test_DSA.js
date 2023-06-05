/*
Move Zeroes
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
*/
// Approach: We initialize a count var to put the non zero elemets at the first postions, then we loop
// trough the array and check if the current value is zero or not, if not zero we add the value at the count position and
// increase the count index by one, at the end of the loop all non zero elements will be in the starting postions and we have 
// the count of the non zero elemets in count var, we use this count value to start postion of a new loop
// which adds the zeroes to the end postions starting from the count position.Finally we return the modified array without copying it.

// Time Complexity: O(n)
// Space Complexity: O(1)

const moveZeroes = nums => {
    let count = 0 
    
    // check if empty array or contains single element
    if(nums.length === 0 || nums.length === 1) return nums

    // Check if contains 2 elements
    if(nums.length === 2 && nums[0] === 0){
        nums[0] = nums[1]
        nums[1] = 0
        return nums
    }

    // This loop adds the non zero elements to the start
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0){
            nums[count] = nums[i]
            count++
        }
    }
    
    // This loop adds the zero elements to the end
    for (let i = count; i < nums.length; i++) {
        nums[i] = 0
    }

    return nums
}

console.log(moveZeroes([0,1,0,3,12]))

/*
First Unique Character in a String

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
*/

// Approach 1: We use a Map() to store all the unique elemets of the array then loop trough the array to
// set key in the Map() , if a key if already there we set its value to 2 indicating repeating char or else we set the 
// key and set it to 1.
// Then we loop again to check the first non repeating element in the Map() which has value as 1.

// Time Complexity: O(n)
// Space Complexity: O(n)

const findFirstNonRepeatingApp1 = s => {
    const map = new Map()
    let unique = -1
    // check empty string
    if(s.length === 0 || s.length === 1) return unique

    // This loop set the keys in the Map()
    for (let i = 0; i < s.length; i++) {
        if(map.has(s.charAt(i))){
            map.set(s.charAt(i),2)
        }else{
            map.set(s.charAt(i),1)
        }
    }

    // This loop checks for the first key with value 1 as non repeating
    for (let j = 0; j < s.length; j++) {
        if(map.get(s.charAt(j)) === 1){
            return unique = j
        }
    }

    return unique
}

console.log(findFirstNonRepeatingApp1("aabb"))

// Approach 2: As we are working with only lowercase English letters, we can create an array charCounts[] with length of 26 repesnting 26 alphabets, we then
// loop trough the s string and find the index for the current char by substacting its ASCII value by 97 to get a value within 0 to 25,
// we then increamenting the charCounts[index] value by 1 everytime.In the end of the loop we will have 1 as non repating value and 2 to or more for repeating values.
// Finally we again loop and find the index for each of the elements and check if the current element has a value of 1, if we find it we store it in unique variable and
// end the loop by returning it. Finally we return the unique value.

// Time Complexity: O(n)
// Space Complexity: O(1)

const findFirstNonRepeatingApp2 = s => {
    const charCounts = new Array(26).fill(0)
    let unique = -1
    // check empty string
    if(s.length === 0 || s.length === 1) return unique

    // This loop set the charcounts to the charCounts[] array
    for (let i = 0; i < s.length; i++) {
        const index = s.charCodeAt(i) - 97
        charCounts[index] += 1
    }

    // This loop checks for the first element with value 1 as non repeating
    for (let j = 0; j < s.length; j++) {
        const index = s.charCodeAt(j) - 97
        if(charCounts[index] === 1){
            return unique = j
        }
    }

    return unique
}

console.log(findFirstNonRepeatingApp2("loveleetcode"))