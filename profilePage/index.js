
    if(sessionStorage.getItem("user") == null){
        window.location = "../signupPage/index.html";
    }

    else{

          // Next button ko hide kar diya h, kyuki jab profile picture upload hogi tub next button show hoga
          var nextButton = document.getElementById("next");
          nextButton.style.display = "none";

        // Profile Picture Upload Coding
        // How to Upload Any ("File or Images or videos") from Any location of the Computer,, Using File Reader API .

        var profilePicUpload = document.getElementById("pic");
        profilePicUpload.onchange = function()
        // onchange event ka matlab hota h ki jaise hi aap input mein value daaloge, tub function kaam karna chalu karega uss phle kaam nhi karega

        {
            var Reader = new FileReader();
            Reader.readAsDataURL(profilePicUpload.files[0]);

            Reader.onload = function()
            {
                var file_Name = Reader.result; // file ka url or pura path is variable mein h

                var src = document.getElementById("round_circle"); //circle jisme mein dikhegi
                var hide = document.getElementById("iconcc");

                src.style.backgroundImage = "url("+file_Name+")";
                src.style.backgroundSize = "cover";
                src.style.backgroundPosition = "center";
                hide.style.display = "none";

                nextButton.style.display = "block"; // next button show hoga abb.

        // Jaise hi next button par click ho , Jo profile "picture" h woh local storage mein uski gmail ke saath save ho jaye
        // value mein uska path save ho jaye

                nextButton.onclick = function(){
                    var savedImagetoLocalStorage = localStorage.setItem(a+"image",file_Name);
                   
                    // agar user ne ek baar pic laga kar next kar diya toh yeh page dubara nhi aana chahiye
                    var profilePage = document.getElementById("container").style.display = "none";
                }

            }
        }

        // Profile Page ki name ki coding kar rhe h
        //jab page load ho toh saath mein username print ho jaye , upload ke nichhe

        var a = sessionStorage.getItem("user"); // Isme user ki gmail id store ho gyi Jo text format mein h.

        var text_data = localStorage.getItem(a);
    
        // Convert text to object using JSON parse

        var object_data = JSON.parse(text_data);
        var profileName = document.getElementById("name");
        profileName.innerHTML = object_data.Name + " "+ object_data.Sirname;  // Name mein first aur sirname print ho

     // agar user ne ek baar pic laga kar next kar diya toh yeh page dubara nhi aana chahiye , aur agar first time h toh aana chahiye 

           if(localStorage.getItem(a+"image") != null){
            var profilePage = document.getElementById("container").style.display = "none";
            var mains = document.getElementById("Main_page");
            mains.style.display = "block";
       }
           

       //Main profile page mein Name ko retrieve Karna h
       var mainProfileName = document.getElementById("profile_name");
       mainProfileName.innerHTML = object_data.Name + " "+ object_data.Sirname;


      //Main profile page mein Profile Picture  ko retrieve Karna h
      var path = localStorage.getItem(a+"image")
      var mainProfilePicture = document.getElementById("profile_pics");
      mainProfilePicture.style.backgroundImage = "url("+path+")";
      mainProfilePicture.style.backgroundSize = "cover";
      mainProfilePicture.style.backgroundPosition = "center";


      //Logout button click karte hi session storage clear  ho jaye aur rediret karde signup.html
      var logoutButton = document.getElementById("logout");
      logoutButton.onclick = function(){
        sessionStorage.clear();
        
        var waitText = document.getElementById("logout_text").innerHTML = "Please Wait";
        setTimeout(function(){
            window.location = "../signupPage/index.html";
        },2000)
      }


      // Click on Contact Now
      var contactPage = document.getElementById("contact");
      contactPage.onclick = function(){
        window.location = "../contactUs/index.html";
      }

      // Click on Video Player Now

      var V_player = document.getElementById("player");
      V_player.onclick = function(){
        window.location = "../VideoPlayerHTML5/index.html";
      }

    }
