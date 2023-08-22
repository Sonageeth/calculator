//display number in text box
function displayNum(num){
    result.value+=num

}


//clear text box
function clearNum(){
    result.value=''
}


//evaluate expression
function evaluateNum(){
    //exp = result.value //1+2
    //output=eval(exp) //3
    //result.value=output

    result.value=eval(result.value)
}
//remove last item from 
function clearOne(){
    result.value=result.value.slice(0,-1)
}

function squareRoot(){
    result.value=eval(result.value)
}