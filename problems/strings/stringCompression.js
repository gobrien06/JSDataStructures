// Implement a method to perform basic string compression using the counts of repeated characters.

const stringCompression = (input) =>{
    let count = 0;
    let newArr = '';
    for (let x=0;x<input.length;x++){
        count++;
        if(input[x]!==input[x+1]){
            newArr += input[x]+count;
            count=0;
        }
    }
    return newArr;
}


console.log(stringCompression('aabcccccaaa'));