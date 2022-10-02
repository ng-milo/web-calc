window.onload = function(){
    document.getElementById("calculate").addEventListener("click", function() {
        if (document.getElementById("a2").value && document.getElementById("bx").value && document.getElementById("c").value){
            if (parseFloat(document.getElementById("a2").value) && parseFloat(document.getElementById("bx").value) && parseFloat(document.getElementById("c").value)){
                var a = parseFloat(document.getElementById("a2").value);
                var b = parseFloat(document.getElementById("bx").value);
                var c = parseFloat(document.getElementById("c").value);
                var ans1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
                var ans2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
                var finAns = ans1 + ", " + ans2;
                const boxs = document.getElementById("solution");
                boxs.value = finAns;
            }
        }
    });
}