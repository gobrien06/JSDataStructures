// Given two strings, write a method to decide if one is a permutation of the other.

const checkPerm = (arr1,arr2) =>{
    arr1 = arr1.split('').sort().join('');
    arr2 = arr2.split('').sort().join('');
    console.log(arr1,arr2);
    if(arr1 === arr2)
        return true;

    return false;
}

console.log(checkPerm("apple","paple"));

//node, newer browsers support localCompare() which renders this situation unlikely