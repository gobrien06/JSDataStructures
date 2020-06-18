// There are three types of edits that can be performed on strings: insert, remove, or replace a character.
//Write a function to check if they are 1 or 0 edits away


const oneEdit = (stringFirst, stringSec) =>{
    let lenFirst = stringFirst.length;
    let lenSec = stringSec.length;
    let largest = stringFirst;
    let smallest = stringSec;
    if(lenFirst<lenSec){
        largest = stringSec;
        smallest = stringFirst;
    }
    if (Math.abs(lenFirst-lenSec) > 1 )
        return false;
    if(lenFirst === lenSec){
        return replace(stringFirst,stringSec);
    }
    else{
        return addOrRemove(largest,smallest);
    }
}


const replace = (stringFirst, stringSec) =>{
    let count = 0;
    for(let i=0;i<stringFirst.length;i++){
        if(stringFirst[i] !== stringSec[i])
            count++;
    }
    if(count <= 1)
        return true;
    return false;
}

const addOrRemove = (largest,smallest) =>{
    for(let i=0;i<largest.length;i++){
        if(largest[i] != smallest[i]){
            if(largest[i+1] == smallest[i] || largest[i-1] === smallest[i])
                return true;
        }
    }
    return false;
}

console.log(oneEdit("pale","ple"));