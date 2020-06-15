// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

const isUnique = (word="testing") =>{
    let holdAll = [""];
    for(let i=0;i<word.length;i++){
        if(holdAll[i] === word[i])
            return false;
        holdAll.push(word[i]);
        //console.log('holdall ' + holdAll + ' word: ' + word);
    }
    return true;
}

console.log(isUnique("hello"));