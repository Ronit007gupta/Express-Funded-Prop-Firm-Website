var x = document.getElementById("f_name");
x.onblur = function f_event(){

    var y = document.getElementById("f_name").value;
    var z = document.getElementById("f_name");
    var k = document.getElementById("f_icon");
    var a = y.length;
  
    if(y != ""){
        z.style.borderColor = "gray";
        k.style.opacity = "0";
    }

    else{
        z.style.borderColor = "red";
        k.style.opacity = "1";
    }

    z.oninput = function(){
        z.style.borderColor = "gray";
        k.style.opacity = "0";
    }

    a>=1 ? z.style.borderColor = "green" : z.style.borderColor = "red";
}

var x = document.getElementById("l_name");
x.onblur = function f_event(){

    var y = document.getElementById("l_name").value;
    var z = document.getElementById("l_name");
    var k = document.getElementById("f_icon2");
    var a = y.length;
  
    if(y != ""){
        z.style.borderColor = "gray";
        k.style.opacity = "0";
    }

    else{
        z.style.borderColor = "red";
        k.style.opacity = "1";
    }
    
    z.oninput = function(){
        z.style.borderColor = "gray";
        k.style.opacity = "0";
    }

    a>=1 ? z.style.borderColor = "green" : z.style.borderColor = "red";
}

var x = document.getElementById("mob_num");
x.onblur = function f_event(){

    var y = document.getElementById("mob_num").value;
    var z = document.getElementById("mob_num");
    var k = document.getElementById("f_icon3");
    var a = y.length;
  
    if(y != ""){
        z.style.borderColor = "gray";
        k.style.opacity = "0";
    }

    else{
        z.style.borderColor = "red";
        k.style.opacity = "1";
    }
    
    z.oninput = function(){
        z.style.borderColor = "gray";
        k.style.opacity = "0";
    }

    a>=10 ? z.style.borderColor = "green" : z.style.borderColor = "red";
    a>=10 ? z.style.borderColor = "green" : k.style.opacity = "1";
}

var x = document.getElementById("email_num");
x.onblur = function f_event(){

    var y = document.getElementById("email_num").value;
    var z = document.getElementById("email_num");
    var k = document.getElementById("f_icon4");
    var a = y.length;
  
    if(y != ""){
        z.style.borderColor = "gray";
        k.style.opacity = "0";
    }

    else{
        z.style.borderColor = "red";
        k.style.opacity = "1";
    }
    
    z.oninput = function(){
        z.style.borderColor = "gray";
        k.style.opacity = "0";
    }

    a>=1 ? z.style.borderColor = "green" : z.style.borderColor = "red";
}

var x = document.getElementById("pass_num");
x.onblur = function f_event(){

    var y = document.getElementById("pass_num").value;
    var z = document.getElementById("pass_num");
    var k = document.getElementById("f_icon5");
    var a = y.length;
  
    if(y != ""){
        z.style.borderColor = "gray";
        k.style.opacity = "0";
    }

    else{
        z.style.borderColor = "red";
        k.style.opacity = "1";
    }
    
    z.oninput = function(){
        z.style.borderColor = "gray";
        k.style.opacity = "0";
    }

    a>=1 ? z.style.borderColor = "green" : z.style.borderColor = "red";
}






















































































