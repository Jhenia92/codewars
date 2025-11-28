/* I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too. */

function arrayPlusArray(arr1, arr2) {
    let sumArr = [];
    let length = 0;
    let result = 0;
    if (arr1.length > arr2.length) {
        length = arr1.length;
    } else length = arr2.length;
    for (let i = 0; i < length; i++) {
        sumArr.push(arr1[i]);
        sumArr.push(arr2[i]);
    }
    for (let i = 0; i < sumArr.length; i++) {
        result += sumArr[i];
    }
    return result;
};

