var main_video = document.getElementById("video_player");
var playbtn = document.getElementById("play_bar");
var pausebtn = document.getElementById("pause_bar");
 
//When you click on play button , video should be played
//When you click on pause button , video should be stopped.

playbtn.onclick = function(){
    main_video.play();
    playbtn.style.display = "none";
    pausebtn.style.display = "block";

    pausebtn.onclick = function(){
        main_video.pause();
        playbtn.style.display = "block";
        pausebtn.style.display = "none";
    }
}


//progress bar coding 
main_video.ontimeupdate = function()
{ // ontimeupdate mouse event use kiya h video tag ki id  mein

var video_timing_write = document.getElementById("video_timing");

var total_durationinSec = this.duration;
var current_durationinSec = this.currentTime;

var total_durationinMin = this.duration/60;
var current_durationinMin = this.currentTime/60;

//isko yaad hi karlo correct timing nikalne ke liye 
var sec = current_durationinSec -  parseInt(current_durationinMin)*60;
var t_sec = total_durationinSec - parseInt(total_durationinMin)*60;

var p_bar_ = document.getElementById("progress_bar");
 video_timing_write.innerHTML = parseInt(current_durationinMin)+":"+ parseInt(sec)+" / " +parseInt(total_durationinMin)+":"+ parseInt(t_sec);

// Humne Percentage nikal liya timimg or duration ka (Formula: current duration/total duration * 100) : 
//parseInt ka use humne point ke baad wali value  ko khatam karne ke liye kiya h...
var timingInPercentage = (current_durationinSec*100/total_durationinSec);
p_bar_.style.width = timingInPercentage +"%";  // percentage lagana zaroori h varna kaam nhi karega aur Progress bar ki width mein set kar diya

}

// Add video through add-video-box ,only functioning..
var addbtn = document.getElementById("add_video_btn");

addbtn.onclick = function()
{
    var videoBox = document.getElementById("add_video_box");
    videoBox.style.display = "block";

    addbtn.style.display = "none";

    var cancelBtn = document.getElementById("cancel_video_box_button");
    cancelBtn.style.display = "block"

    cancelBtn.onclick = function()
    {
        videoBox.style.display = "none";
        cancelBtn.style.display = "none";
        addbtn.style.display = "block";
    }

}

//Add videos "data" to the LocalStorage ....
var addButton_Data = document.getElementById("submitBtn");

addButton_Data.onclick = function(){
    
    var videoNameData = document.getElementById("video_name");
    var videoLinkData = document.getElementById("video_link");

    var objectVideoData = {v_name:videoNameData.value,v_link:videoLinkData.value};
    var textVideoData = JSON.stringify(objectVideoData);

    var current_user = sessionStorage.getItem("user");

    localStorage.setItem(current_user+"/video/"+videoNameData.value,textVideoData);
}

// Fetch Video DATA From localStorage and Creating Dynamic Element for  Retrieving Data;

function video_load(){
    var i;
    for(i=0;i<localStorage.length;i++)
    {
        var all_keys = localStorage.key(i);
        var current_user = sessionStorage.getItem("user")
        if(all_keys.match(current_user+"/video/"))
        {
            var textDATA = localStorage.getItem(all_keys);
            //Convert text to object using json parse
            var objectDATA = JSON.parse(textDATA);

            //Creating dynamic element for retrieving Data
            //Bohot hi easy h dynamic element banana

            var div = document.createElement("DIV");
            div.setAttribute("id","video_storage_box");

            var p = document.createElement("P");
            p.setAttribute("id","playlist_video_name");
            p.innerHTML = objectDATA.v_name;
            p.className = "v_nameinHead"; // Saare p element ko select karne ke liye

            var play_button = document.createElement("BUTTON");
            play_button.setAttribute("type","button");
            play_button.setAttribute("id","play_playlist");
            play_button.className = "allplay_btnn";  // Saare play button ko select karne ke liye
            play_button.innerHTML = "Play";
            play_button.setAttribute("url",objectDATA.v_link);

            var delete_button = document.createElement("BUTTON");
            delete_button.setAttribute("type","button");
            delete_button.setAttribute("id","delete_playlist");
            delete_button.innerHTML = "Delete";
            delete_button.className = "alldelete_btnn";// Saare delete button ko select karne ke liye

            // Yehi batana h ki iss div ke andar kya-2 tha appendchild ki madad se...
            div.appendChild(p);
            div.appendChild(play_button);
            div.appendChild(delete_button);

            var right2ndDiv = document.getElementById("bottom");
            right2ndDiv.appendChild(div);
        }
    }
}
video_load();



// Play Button Coding....

function play_video(){
     var all_videos_play_button = document.getElementsByClassName("allplay_btnn");
     var i ;
     for(i=0;i<all_videos_play_button.length;i++)
     {   
        //Jis button par click wohh button nicche select ho jaayega
        all_videos_play_button[i].onclick = function()
        {   
        clear(); //Sabke playbutton ke innerHTML mein play likha aana chahiye, yeh ye functn kaam karta h
            var v_url = this.getAttribute("url");// jo url ki value wohh isme aa jaayegi ,jo humne upar set kiya tha

            var src = document.getElementById("v_src"); // yeh hamare souce tag ki id h
            src.setAttribute("src",v_url);

            var main_video = document.getElementById("video_player");
            main_video.load(); // video load kar dena video player mein 
            
            this.innerHTML = "Playing....";

        }
     }
}
play_video();

// play to playing innerhtml coding 
function clear(){
    var all_videos_play_button = document.getElementsByClassName("allplay_btnn");
    var i;
    for(i=0; i<all_videos_play_button.length;i++)
    {
    all_videos_play_button[i].innerHTML = "Play";
    }
}

//Next Button Coding.....
var next_button = document.getElementById("right_btn");
next_button.onclick = function()
{
    var all_videos_play_button = document.getElementsByClassName("allplay_btnn");
    var i ;
    for(i=0;i<all_videos_play_button.length;i++)
    {
        if(all_videos_play_button[i].innerHTML == "Playing....")
        {
            var next_element = all_videos_play_button[i+1].parentElement;
            var next_play_button = next_element.getElementsByClassName("allplay_btnn")[0];
            //kyuki humme agla ek hi element chahiye isliye 0 indexing pass ki h 
            next_play_button.click();
            return false;
        }
    }
}


//Previous Button Coding.....
var previous_button = document.getElementById("left_btn");
previous_button.onclick = function()
{
    var all_videos_play_button = document.getElementsByClassName("allplay_btnn");
    var i ;
    for(i=0;i<all_videos_play_button.length;i++)
    {
        if(all_videos_play_button[i].innerHTML == "Playing....")
        {
            var previous_element = all_videos_play_button[i-1].parentElement;
            var previous_play_button = previous_element.getElementsByClassName("allplay_btnn")[0];
            //kyuki humme pichhla  ek hi element chahiye isliye 0 indexing pass ki h 
            previous_play_button.click();
            return false;
        }
    }
}


//Delete Button Coding ......

function delete_video(){
    var all_videos_delete_button = document.getElementsByClassName("alldelete_btnn");
    var i ;
    for(i=0;i<all_videos_delete_button.length;i++)
    {   
       //Jis button par click hoga wohh button nicche select ho jaayega..
       all_videos_delete_button[i].onclick = function()
       {   
          var parent = this.parentElement;
          var a = parent.getElementsByClassName("v_nameinHead")[0].innerHTML;// isme p(video name) element ki value store ho jaayegi.. yehh wohh classname h jo hamne upar P element mein set kiya tha....

          var current_user = sessionStorage.getItem("user");
        
          //Now delete from local storage
          localStorage.removeItem(current_user+"/video/"+a);
          parent.className = "animate__animated animate__bounceOut";
          setTimeout(function(){
            parent.remove();
          },800)    

       }
    }
}
delete_video();

//Volume  Button Coding 

var volume_Bar = document.getElementById("volume");
volume_Bar.onclick = function()
{
    var vlm_controller = document.getElementById("volume_controler");
    if(vlm_controller.style.display == "none")
    {
        vlm_controller.style.display = "block";
        vlm_controller.oninput = function()
        //oninput ka matlab ki jaise-3 aap value dalte jaoge vaise-2 functn kaam karta jayeega
        {
            main_video.volume = this.value;
        }

    }
    else{
        vlm_controller.style.display = "none";

        vlm_controller.onblur = function()
        {
            vlm_controller.style.display = "none";

        }
    }

    
}

//video forward and backward coding
 var p_box = document.getElementById("progress_box");
 p_box.onclick = function(event)
 {
    var percentage = event.offsetX/this.offsetWidth;
    //offsetX matlab h ki progress box mein jaha par bhi hamne click kiya h waha tak ki width Nikalna
    //offsetWidth matlab progress box ki puri width nikalna
    main_video.currentTime = percentage*main_video.duration;
 }



 ///Full Screen Coding
 var fullScreen = document.getElementById("full_screen");
 fullScreen.onclick = function()
 {
    fullScreen.requestFullscreen();
 }


 // Fast/Slow Video Speed coding

 var speed_Bar = document.getElementById("speed_icon");
 speed_Bar.onclick = function()
{
    var spd_controller = document.getElementById("speed_controler");
    if(spd_controller.style.display == "none")
    {
        spd_controller.style.display = "block";
        spd_controller.oninput = function()
        {
            main_video.playbackRate = this.value;
        }

    }
    else{
        spd_controller.style.display = "none";
        spd_controller.onblur = function()
        {
            spd_controller.style.display = "none";
        }
    }
}


//Search PlayList Coding

var search_box = document.getElementById("Search");
search_box.oninput = function()
{   var all_video_playlist_name = document.getElementsByClassName("v_nameinHead");
    var i;
    for(i=0;i<all_video_playlist_name.length;i++)
    {   
        if(all_video_playlist_name[i].innerHTML.toUpperCase().match(search_box.value.toUpperCase()))
        {
         all_video_playlist_name[i].parentElement.style.display = "block";        
        }
        else
        {
            all_video_playlist_name[i].parentElement.style.display = "none";
        }
    }
}


