//Replace all spaces in a string with %20
var input = "Mr John Smith";


//note: strings in javascript are immutable, can't reassign an individual character at an index
const URLify = (input) =>{
    for (var x=0; x<input.length; x++){
        if (input[x] == " "){
            input = input.substring(0,x) + "%20" + input.substring(x+1,input.length);
        }
    }
    console.log(input);
}


URLify(input);