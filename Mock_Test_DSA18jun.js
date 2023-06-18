/*
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well. You must not use any built-in exponent function or operator. 
*/

// TC : O(log x)
// SC: O(1)
const findSquareRoot = x => {
    if(x === 0 || x === 1){
        return x
    }

    let start = 1
    let end = Math.floor(x/2)
    let result
    while(start <= end){
        let mid = Math.floor((start + end) / 2)

        if(mid * mid === x){
            return mid
        }

        if(mid * mid < x){
            start = mid +1
            result = mid
        }else{
            end  = mid - 1
        }
    }

    return result
}

console.log(findSquareRoot(8));

/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
*/
// TC : O(n + m)
// SC: O(n)

class ListNode {
    constructor(val){
        this.val = val
        this.next = null
    }
}


const createLinkedList = (arr) => {
    let list = new ListNode(0)
    let current = list

    for (let i = 0; i < arr.length; i++) {
        current.next = new ListNode(arr[i])
        current = current.next
    }

    return list.next
}

const addTwoNumbers = (l1,l2) => {
    let list = new ListNode(0)
    let current = list
    let carry = 0

    while(l1 !== null || l2 !== null){
        let sum = carry

        if(l1 !== null){
            sum += l1.val
            l1 = l1.next
        }

        if(l2 !== null){
            sum += l2.val
            l2 = l2.next
        }

        carry = Math.floor(sum / 10)
        sum = sum % 10

        current.next = new ListNode(sum)
        current = current.next
    }

    if(carry > 10){
        current.next = new ListNode(carry)
    }

    return list.next
}

const l1 = createLinkedList([9,9,9,9,9,9,9])
const l2 = createLinkedList([9,9,9,9])

const result = addTwoNumbers(l1,l2)

console.log(result);