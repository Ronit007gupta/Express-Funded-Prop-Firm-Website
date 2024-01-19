// Setting Up Image 
var browserMail = sessionStorage.getItem("user");
var browserImg = localStorage.getItem(browserMail+"image");

var contactImg = document.getElementById("contact_img");
contactImg.style.backgroundImage = "url("+browserImg+")";
contactImg.style.backgroundSize = "cover";
contactImg.style.backgroundPosition = "center";


// Storing The value of the Form In Local Storage and Number in Boxcontact
var formSubmit = document.getElementById("submission");

formSubmit.onsubmit = function(){

    
var formName = document.getElementById("query_name").value;
var formEmail = document.getElementById("query_email").value;
var formMessage = document.getElementById("query_message").value;

var obj_formData = {client:formName,clientEmail:formEmail,clientMessage:formMessage};

var text_formData = JSON.stringify(obj_formData);

var storingClientInformation = localStorage.setItem(formEmail+" "+"Client Response",text_formData);

alert("Thank You Contacting Us");

}


//Storing contact Number

window.onload = function(){
    var boxnumber = document.getElementById("local_no");
    var boxemail = document.getElementById("local_mail");
    
    var browsergmailid = sessionStorage.getItem("user");
    var Data = localStorage.getItem(browsergmailid);
    var objectData = JSON.parse(Data);

    boxnumber.innerHTML = objectData.Ph_Number;
    boxnumber.style.color = "blue";

    boxemail.innerHTML = objectData.Email;
    boxemail.style.color = "blue";
}