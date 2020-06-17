// Given a string, write a function to check if it is a permutation of a palindrome.

//Palindrome - a word/phrase that is the same forwards or backwards

//Permutation - rearrangement of letters

const palindromePermutation = (input) =>{
    let oddCount = 0;
    let permMap = {};
    for ( let x of input){
        permMap[x.charCodeAt(0)] += x;
    }


    for (var key in permMap){
        if((permMap[key].replace('undefined','').length ) %2 != 0)
            oddCount ++;
    }
    
    console.log(oddCount);
    if (oddCount > 1 )
        return false;
    return true;
}

console.log(palindromePermutation('racecareeeo'));