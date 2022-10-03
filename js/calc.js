window.onload = function(){
    var firstOne;;
    var secondOne;
    var operation;
    var tmp;
    var rootTruth;
    var rootAns;
    const boxs = document.getElementById("solution");
    const curr = document.getElementById("currProblem");
    document.getElementById("one").addEventListener("click", function() {
        console.log("one");
        if (rootTruth == true) {
            document.getElementById("currentOperation").innerHTML = rootAns;
            rootTruth = false;
        }
        if (operation == null && firstOne == null){
            firstOne = "1";
            curr.innerHTML = firstOne;
        }
        else if (operation == null) {
            console.log("what");
            firstOne += "1";
            curr.innerHTML = firstOne;
        }
        else if (secondOne == null){
            secondOne = "1";
            curr.innerHTML = curr.innerHTML + secondOne;
        }
        else if (secondOne != null && operation != null){
            secondOne += "1";
            curr.innerHTML = firstOne + tmp + secondOne;
        }
    });
    document.getElementById("two").addEventListener("click", function() {
        console.log("two");
        if (rootTruth == true) {
            document.getElementById("currentOperation").innerHTML = rootAns;
            rootTruth = false;
        }
        if (operation == null && firstOne == null){
            firstOne = "2";
            curr.innerHTML = firstOne;
        }
        else if (operation == null) {
            firstOne += "2";
            curr.innerHTML = firstOne;
        }
        else if (secondOne == null){
            secondOne = "2";
            curr.innerHTML = curr.innerHTML + secondOne;
        }
        else if (secondOne != null && operation != null){
            secondOne += "2";
            curr.innerHTML = firstOne + tmp + secondOne;
        }
    });
    document.getElementById("three").addEventListener("click", function() {
        console.log("three");
        if (rootTruth == true) {
            document.getElementById("currentOperation").innerHTML = rootAns;
            rootTruth = false;
        }
        if (operation == null && firstOne == null){
            firstOne = "3";
            curr.innerHTML = firstOne;
        }
        else if (operation == null) {
            firstOne += "3";
            curr.innerHTML = firstOne;
        }
        else if (secondOne == null){
            secondOne = "3";
            curr.innerHTML = curr.innerHTML + secondOne;
            
        }
        else if (secondOne != null && operation != null){
            secondOne += "3";
            curr.innerHTML = firstOne + tmp + secondOne;
        }
    });
    document.getElementById("four").addEventListener("click", function() {
        console.log("four");
        if (rootTruth == true) {
            document.getElementById("currentOperation").innerHTML = rootAns;
            rootTruth = false;
        }
        if (operation == null && firstOne == null){
            firstOne = "4";
            curr.innerHTML = firstOne;
        }
        else if (operation == null) {
            firstOne += "4";
            curr.innerHTML = firstOne;
        }
        else if (secondOne == null){
            secondOne = "4";
            curr.innerHTML = curr.innerHTML + secondOne;
        }
        else if (secondOne != null && operation != null){
            secondOne += "4";
            curr.innerHTML = firstOne + tmp + secondOne;
        }
    });
    document.getElementById("five").addEventListener("click", function() {
        console.log("five");
        if (rootTruth == true) {
            document.getElementById("currentOperation").innerHTML = rootAns;
            rootTruth = false;
        }
        if (operation == null && firstOne == null){
            firstOne = "5";
            curr.innerHTML = firstOne;
        }
        else if (operation == null) {
            firstOne += "5";
            curr.innerHTML = firstOne;
        }
        else if (secondOne == null){
            secondOne = "5";
            curr.innerHTML = curr.innerHTML + secondOne;
        }
        else if (secondOne != null && operation != null){
            secondOne += "5";
            curr.innerHTML = firstOne + tmp + secondOne;
        }
    });
    document.getElementById("six").addEventListener("click", function() {
        console.log("six");
        if (rootTruth == true) {
            document.getElementById("currentOperation").innerHTML = rootAns;
            rootTruth = false;
        }
        if (operation == null && firstOne == null){
            firstOne = "6";
            curr.innerHTML = firstOne;
        }
        else if (operation == null) {
            firstOne += "6";
            curr.innerHTML = firstOne;
        }
        else if (secondOne == null){
            secondOne = "6";
            curr.innerHTML = curr.innerHTML + secondOne;
        }
        else if (secondOne != null && operation != null){
            secondOne += "6";
            curr.innerHTML = firstOne + tmp + secondOne;
        }
    });
    document.getElementById("seven").addEventListener("click", function() {
        console.log("seven");
        if (rootTruth == true) {
            document.getElementById("currentOperation").innerHTML = rootAns;
            rootTruth = false;
        }
        if (operation == null && firstOne == null){
            firstOne = "7";
            curr.innerHTML = firstOne;
        }
        else if (operation == null) {
            firstOne += "7";
            curr.innerHTML = firstOne;
        }
        else if (secondOne == null){
            secondOne = "7";
            curr.innerHTML = curr.innerHTML + secondOne;
        }
        else if (secondOne != null && operation != null){
            secondOne += "7";
            curr.innerHTML = firstOne + tmp + secondOne;
        }
    });
    document.getElementById("eight").addEventListener("click", function() {
        console.log("eight");
        if (rootTruth == true) {
            document.getElementById("currentOperation").innerHTML = rootAns;
            rootTruth = false;
        }
        if (operation == null && firstOne == null){
            firstOne = "8";
            curr.innerHTML = firstOne;
        }
        else if (operation == null) {
            firstOne += "8";
            curr.innerHTML = firstOne;
        }
        else if (secondOne == null){
            secondOne = "8";
            curr.innerHTML = curr.innerHTML + secondOne;
        }
        else if (secondOne != null && operation != null){
            secondOne += "8";
            curr.innerHTML = firstOne + tmp + secondOne;
        }
    });
    document.getElementById("nine").addEventListener("click", function() {
        console.log("nine");
        if (rootTruth == true) {
            document.getElementById("currentOperation").innerHTML = rootAns;
            rootTruth = false;
        }
        if (operation == null && firstOne == null){
            firstOne = "9";
            curr.innerHTML = firstOne;
        }
        else if (operation == null) {
            firstOne += "9";
            curr.innerHTML = firstOne;
        }
        else if (secondOne == null){
            secondOne = "9";
            curr.innerHTML = curr.innerHTML + secondOne;
        }
        else if (secondOne != null && operation != null){
            secondOne += "9";
            curr.innerHTML = firstOne + tmp + secondOne;
        }
    });
    document.getElementById("zero").addEventListener("click", function() {
        console.log("zero");
        if (rootTruth == true) {
            document.getElementById("currentOperation").innerHTML = rootAns;
            rootTruth = false;
        }
        if (operation == null && firstOne == null){
            firstOne = "0";
            curr.innerHTML = firstOne;
        }
        else if (operation == null) {
            firstOne *= 10;
            curr.innerHTML = firstOne;
        }
        else if (secondOne == null){
            secondOne = "0";
            curr.innerHTML = curr.innerHTML + secondOne;
        }
        else if (secondOne != null && operation != null){
            secondOne *= 10;
            curr.innerHTML = firstOne + tmp + secondOne;
        }
    });

    // Calculate
    document.getElementById("percent").addEventListener("click", function() {
        console.log("percent");
        if (firstOne != null && secondOne == null){
            operation = "percent";
            tmp = '%'
            curr.innerHTML = firstOne + tmp;
        }
    });
    document.getElementById("divide").addEventListener("click", function() {
        console.log("divide");
        if (firstOne != null && secondOne == null){
            operation = "divide";
            tmp = '/'
            curr.innerHTML = firstOne + tmp;
        }
    });
    document.getElementById("multiply").addEventListener("click", function() {
        console.log("multiply");
        if (firstOne != null && secondOne == null){
            operation = "multiply";
            tmp = '*'
            curr.innerHTML = firstOne + tmp;
        }
    });
    document.getElementById("add").addEventListener("click", function() {
        console.log("add");
        if (firstOne != null && secondOne == null){
            operation = "add";
            tmp = '+'
            curr.innerHTML = firstOne + tmp;
        }
    });
    document.getElementById("subtract").addEventListener("click", function() {
        console.log("subtract");
        if (firstOne != null && secondOne == null){
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
                    ans = first % second;
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
    document.getElementById("root").addEventListener("click", function() {
        console.log("root");
        if (firstOne != null){
            operation = "root";
            tmp = '√'
            curr.innerHTML = tmp + firstOne + ' = ' + Math.sqrt(firstOne);
            rootTruth = true;
            rootAns = tmp + firstOne + ' = ' + Math.sqrt(firstOne);
            firstOne = null;
            secondOne = null;
            operation = null;
        }
    });

    // Remove these two later
    document.getElementById("plus-minus").addEventListener("click", function() {
        console.log("plus-minus");
    });
    document.getElementById("backspace").addEventListener("click", function() {
        console.log("backspace");
        if (operation == null && secondOne == null){
            firstOne = null;
            curr.innerHTML = "NaN";
        }
        else if (firstOne != null  && operation != null && secondOne == null){
            operation = null;
            curr.innerHTML = firstOne;
        }
        else{
            secondOne = null;
            curr.innerHTML = firstOne + operation;
        }
    });
    // Maybe make function to clear all variables to null
    document.getElementById("clear").addEventListener("click", function() {
        console.log("AC");
        curr.innerHTML = "NaN";
        firstOne = null;
        secondOne = null;
        operation = null;
    });
}