var input = "Mr John Smith";

const URLify = (input) =>{
    for (x in input){
        if (x == " "){
            x = '%';
            xIndex = input.indexOf(x);
            input = input.slice(0,xIndex) + "20" + input.slice(xIndex,input.length-1);
        }
    }
    console.log(input);
}

URLify(input);