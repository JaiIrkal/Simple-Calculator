function clear_screen(){
    document.getElementById("screen-value").value = "";
}

function display(value){
    document.getElementById("screen-value").value += value;
}

function calculate(){
    var p = document.getElementById("screen-value").value;
    var q = eval(p);
    document.getElementById("screen-value").value = q;
}