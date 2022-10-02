window.onload = function(){
    var firstOne;;
    var secondOne;
    var operation;
    var tmp;
    const boxs = document.getElementById("solution");
    const curr = document.getElementById("currProblem");
    document.getElementById("one").addEventListener("click", function() {
        console.log("one");
        if (operation == null && firstOne == null){
            firstOne = 1;
            curr.innerHTML = firstOne;
        }
        else if (operation == null) {
            firstOne += 1;
            curr.innerHTML = firstOne;
        }
        else if (secondOne == null){
            secondOne = 1;
            curr.innerHTML = curr.innerHTML + secondOne;
        }
        else if (secondOne != null && operation != null){
            secondOne += 1;
            curr.innerHTML = curr.innerHTML + secondOne;
        }
    });
    document.getElementById("two").addEventListener("click", function() {
        console.log("two");
        if (operation == null && firstOne == null){
            firstOne = 2;
            curr.innerHTML = firstOne;
        }
        else if (operation == null) {
            firstOne += 2;
            curr.innerHTML = firstOne;
        }
        else if (secondOne == null){
            secondOne = 2;
            curr.innerHTML = curr.innerHTML + secondOne;
        }
        else if (secondOne != null && operation != null){
            secondOne += 2;
            curr.innerHTML = curr.innerHTML + secondOne;
        }
    });
    document.getElementById("three").addEventListener("click", function() {
        console.log("three");
        if (operation == null && firstOne == null){
            firstOne = 3;
            curr.innerHTML = firstOne;
        }
        else if (operation == null) {
            firstOne += 3;
            curr.innerHTML = firstOne;
        }
        else if (secondOne == null){
            secondOne = 3;
            curr.innerHTML = curr.innerHTML + secondOne;
            
        }
        else if (secondOne != null && operation != null){
            secondOne += 3;
            curr.innerHTML = curr.innerHTML + secondOne;
        }
    });
    document.getElementById("four").addEventListener("click", function() {
        console.log("four");
        if (operation == null && firstOne == null){
            firstOne = 4;
            curr.innerHTML = firstOne;
        }
        else if (operation == null) {
            firstOne += 4;
            curr.innerHTML = firstOne;
        }
        else if (secondOne == null){
            secondOne = 4;
            curr.innerHTML = curr.innerHTML + secondOne;
        }
        else if (secondOne != null && operation != null){
            secondOne += 4;
            curr.innerHTML = curr.innerHTML + secondOne;
        }
    });
    document.getElementById("five").addEventListener("click", function() {
        console.log("five");
        if (operation == null && firstOne == null){
            firstOne = 5;
            curr.innerHTML = firstOne;
        }
        else if (operation == null) {
            firstOne += 5;
            curr.innerHTML = firstOne;
        }
        else if (secondOne == null){
            secondOne = 5;
            curr.innerHTML = curr.innerHTML + secondOne;
        }
        else if (secondOne != null && operation != null){
            secondOne += 5;
            curr.innerHTML = curr.innerHTML + secondOne;
        }
    });
    document.getElementById("six").addEventListener("click", function() {
        console.log("six");
        if (operation == null && firstOne == null){
            firstOne = 6;
            curr.innerHTML = firstOne;
        }
        else if (operation == null) {
            firstOne += 6;
            curr.innerHTML = firstOne;
        }
        else if (secondOne == null){
            secondOne = 6;
            curr.innerHTML = curr.innerHTML + secondOne;
        }
        else if (secondOne != null && operation != null){
            secondOne += 6;
            curr.innerHTML = curr.innerHTML + secondOne;
        }
    });
    document.getElementById("seven").addEventListener("click", function() {
        console.log("seven");
        if (operation == null && firstOne == null){
            firstOne = 7;
            curr.innerHTML = firstOne;
        }
        else if (operation == null) {
            firstOne += 7;
            curr.innerHTML = firstOne;
        }
        else if (secondOne == null){
            secondOne = 7;
            curr.innerHTML = curr.innerHTML + secondOne;
        }
        else if (secondOne != null && operation != null){
            secondOne += 7;
            curr.innerHTML = curr.innerHTML + secondOne;
        }
    });
    document.getElementById("eight").addEventListener("click", function() {
        console.log("eight");
        if (operation == null && firstOne == null){
            firstOne = 8;
            curr.innerHTML = firstOne;
        }
        else if (operation == null) {
            firstOne += 8;
            curr.innerHTML = firstOne;
        }
        else if (secondOne == null){
            secondOne = 8;
            curr.innerHTML = curr.innerHTML + secondOne;
        }
        else if (secondOne != null && operation != null){
            secondOne += 8;
            curr.innerHTML = curr.innerHTML + secondOne;
        }
    });
    document.getElementById("nine").addEventListener("click", function() {
        console.log("nine");
        if (operation == null && firstOne == null){
            firstOne = 9;
            curr.innerHTML = firstOne;
        }
        else if (operation == null) {
            firstOne += 9;
            curr.innerHTML = firstOne;
        }
        else if (secondOne == null){
            secondOne = 9;
            curr.innerHTML = curr.innerHTML + secondOne;
        }
        else if (secondOne != null && operation != null){
            secondOne += 9;
            curr.innerHTML = curr.innerHTML + secondOne;
        }
    });
    document.getElementById("zero").addEventListener("click", function() {
        console.log("zero");
        if (operation == null && firstOne == null){
            firstOne = 0;
            curr.innerHTML = firstOne;
        }
        else if (operation == null) {
            firstOne += 0;
            curr.innerHTML = firstOne;
        }
        else if (secondOne == null){
            secondOne = 0;
            curr.innerHTML = curr.innerHTML + secondOne;
        }
        else if (secondOne != null && operation != null){
            secondOne += 0;
            curr.innerHTML = curr.innerHTML + secondOne;
        }
    });

    // Calculate
    document.getElementById("percent").addEventListener("click", function() {
        console.log("percent");
        if (firstOne != null){
            operation = "percent";
        }
    });
    document.getElementById("divide").addEventListener("click", function() {
        console.log("divide");
        if (firstOne != null && operation == null){
            operation = "divide";
            tmp = '/'
            curr.innerHTML = firstOne + tmp;
        }
    });
    document.getElementById("multiply").addEventListener("click", function() {
        console.log("multiply");
        if (firstOne != null){
            operation = "multiply";
            tmp = '*'
            curr.innerHTML = firstOne + tmp;
        }
    });
    document.getElementById("add").addEventListener("click", function() {
        console.log("add");
        if (firstOne != null){
            operation = "add";
            tmp = '+'
            curr.innerHTML = firstOne + tmp;
        }
    });
    document.getElementById("subtract").addEventListener("click", function() {
        console.log("subtract");
        if (firstOne != null){
            operation = "subtract";
            tmp = '-'
            curr.innerHTML = firstOne + tmp;
        }
    });
    document.getElementById("equals").addEventListener("click", function() {
        console.log("equals");
        // Check first and second number have an element
        if (firstOne != null && secondOne != null && operation != null){
            // Check first and second number are numbers
            if (parseFloat(firstOne) && parseFloat(secondOne)){
                var first = parseFloat(firstOne);
                var second = parseFloat(secondOne);
                var ans;
                if (operation == "add"){
                    ans = first + second;
                } else if (operation == "subtract"){
                    ans = first - second;
                } else if (operation == "multiply"){
                    ans = first * second;
                } else if (operation == "divide"){
                    ans = first / second;
                } else if (operation == "percent"){
                    ans = first / 100 * second;
                }
                curr.innerHTML = curr.innerHTML + " = " + ans;
            }
        }
        document.getElementById("currentOperation").innerHTML = firstOne + tmp + secondOne;
        firstOne = null;
        secondOne = null;
        operation = null;
    });

    // Remove this later
    document.getElementById("decimal").addEventListener("click", function() {
        console.log("decimal");
    });

    // Remove these two later
    document.getElementById("left-bracket").addEventListener("click", function() {
        console.log("left");
    });
    document.getElementById("right-bracket").addEventListener("click", function() {
        console.log("right");
    });
    // Maybe make function to clear all variables to null
    document.getElementById("clear").addEventListener("click", function() {
        console.log("AC");
        firstOne = null;
        secondOne = null;
        operation = null;
    });
}