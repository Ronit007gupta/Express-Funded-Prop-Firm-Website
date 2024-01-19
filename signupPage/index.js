
var fDesk = document.getElementById("signup_formdesk");

fDesk.onsubmit = function(){
var firstname = document.getElementById("f_name").value;
var lastname = document.getElementById("l_name").value;
var mobile = document.getElementById("mob_num").value;
var emailadd = document.getElementById("email_num").value;
var password = document.getElementById("pass_num").value;

//jaise hi submit ho vaise hi insabki value ek object mein store ho jaye

var user_object_data = {Name :firstname, Sirname :lastname,Ph_Number:mobile,Email:emailadd,Pass:password};

// To Convert Object into Text.. using json stringify

var user_text_data = JSON.stringify(user_object_data);

    if(firstname!="" && lastname!="" && mobile!="" && emailadd!="" && password!="")
    {
       localStorage.setItem(emailadd,user_text_data);

       var btnns = document.getElementById("sign_up");
       btnns.value = "Successfull";
       btnns.style.background = "green";

       setTimeout(function(){
        btnns.value = "Signup";
       btnns.style.background = "purple";
       fDesk.reset();

       },2000);

       return false;
    }
}


// Ek hi email ko baar-2 dalne se rokne ke liye
// onchange event ka matlab hota h ki jaise hi aap input mein value daaloge, vaise hi function kaam karna chalu karega uss phle kaam nhi karega
var email__input = document.getElementById("email_num");
email__input.onchange = function(){

    var email__value = document.getElementById("email_num").value;
    var signbtn = document.getElementById("sign_up");

    if(localStorage.getItem(email__value) != null){
        alert("User Exist ! Please try different email");
        signbtn.disabled  = true;
        signbtn.style.background = "gray";

        email__input.onclick = function(){
            email__input.value = "";
            signbtn.disabled = false;
            signbtn.style.background = "purple";
    }

    }
}


//SIGN UP KE ELEMENTS KO WORKING MEIN LANE KE LIYE :  

var x = document.getElementById("f_name");
x.onblur = function f_event1(){

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

    a>=3 ? z.style.borderColor = "green" : z.style.borderColor = "red";
}

var x = document.getElementById("l_name");
x.onblur = function f_event2(){

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
x.onblur = function f_event3(){

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
x.onblur = function f_event4(){

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
x.onblur = function f_event5(){

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




// Log in Form 


var x = document.getElementById("email_ln");
x.onblur = function f_event6(){

    var y = document.getElementById("email_ln").value;
    var z = document.getElementById("email_ln");
    var k = document.getElementById("f_iconln");
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


var x = document.getElementById("pass_ln");
x.onblur = function f_event7(){

    var y = document.getElementById("pass_ln").value;
    var z = document.getElementById("pass_ln");
    var k = document.getElementById("f_iconln1");
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


// Page turnover Javascript


var lnbtn = document.getElementById("loginlink");        // signup button chippa h
var snbtn = document.getElementById("signuplink");       // login button chippa h

var lnbox = document.getElementById("login_form");
var snbox = document.getElementById("signup_form");

//signup se login mein jaane ke liye
snbtn.onclick = function()
{
    lnbox.style.display = "block";
    snbox.style.display = "none";
}

//login se signup mein jaane ke liye
lnbtn.onclick = function()
{
    lnbox.style.display = "none";
    snbox.style.display = "block"; 
}




// Start of login form Validation

var lgform  = document.getElementById("login_form");

lgform.onsubmit = function(){

    var logEmail = document.getElementById("email_ln").value;
    var logPass = document.getElementById("pass_ln").value;

    if(localStorage.getItem(logEmail) == null){
        alert("Your Email ID is not Registered With Us ! "+"\n"+"Please Sign Up");
        return false;
    }

    else{
        var text__data = localStorage.getItem(logEmail);
        var obj__data = JSON.parse(text__data);   // Convert "text" into "object" , using "JSON parse"
        var correct_email = obj__data.Email;
        var correct_password = obj__data.Pass;

        if(logEmail == correct_email){
            if(logPass==correct_password){
                sessionStorage.setItem("user",logEmail);
                window.open("../profilePage/index.html");
            }
        }
    
        if(logPass != correct_password){
            alert("You have Entered Wrong Password");
            return false;
        }
    }
}

/*End of Login Form Validation*/
