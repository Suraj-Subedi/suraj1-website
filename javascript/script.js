
//TOP BUTTON DISPLAY FUNCTION



//Get the button
var mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };


//when the user exceeds the 20 scroll the top button displays otherwise is remains hidden
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}



//MOVE TO TOP FUNCION
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//READ MORE


var readMore = document.getElementById("readMore");
var readMoreBtn = document.getElementById("readMoreBtn");


//when this function is called the hidden text appears
function readMoreBlog(){
readMore.style.display = "block";
readMoreBtn.style.display ="none";
}


//READ 
//when this function is called the text goes hidden

function readLessBlog(){
  readMore.style.display ="none";
  readMoreBtn.style.display ="inline-block";
}

//SIGN UP 
//when this functoin is called it shows relevant message ono the alert box if the input is not empty


function signUpCompleted(){
  var signingEmail = document.getElementById("signUpBtn").value;

  if(signingEmail== ""){
    alert("Give the E-mail address!"); 
    return false;
  }
  else{

  alert("Thanks for signing up!");
}
}


//VALIDATE FORM

/*when this function is called through clicking the send message button  checks where the input is valid or not
and then give the appropriate message on the alertbox*/ 

function validateForm() {
  var formName = document.getElementById("formName").value;
  var email = document.getElementById("formEmail").value;
  var message = document.getElementById("formTextArea").value;

  if(formName=="" ||  email=="" || message =="") {
    alert("Fill all the necessary details and try again!");
    return false;
  }
  else {
    alert("Thank you for contacting us, we will reach out to you as soon as possible!");
   
  }
}

//IMAGE SLIDE SHOW FUNCTOIN

/*This function automatically loads the image when website is opened and dynamically changed the picture every 
3 seconds*/
var i=0;
var images =["image/slideshow/1.png","image/slideshow/2.png","image/slideshow/3.png","image/slideshow/4.png","image/slideshow/5.png","image/slideshow/6.png","image/slideshow/7.png","image/slideshow/8.png" ];

function slideShow(){
 var slideImages= document.getElementById("sliderImages");
 slideImages.src= images[i];
 if(i<7){
   i++;
 }
 else{
   i=0;
 }
 setTimeout("slideShow()", 2000);

}
window.onload = function(){slideShow()};

