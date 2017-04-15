var lback = document.getElementById("lback");
    lback.src = "back.svg";

var lok = document.getElementById("lok");
    lok.src = "ok.svg";

var lcancel = document.getElementById("lcancel");
    lcancel.src = "cancel.svg";

var lbody = document.getElementById("lbody");

var lground = document.getElementById("lground");

var luninput = document.getElementById("luninput");
           
var firstNameLocal = localStorage.firstName; 

var ldiv = document.getElementById("ldiv");



var lok = document.getElementById("lok");
        lok.addEventListener("click", function(){
            console.log(localStorage.firstName)
            
            if(localStorage.firstName == undefined){
                localStorage.firstName = luninput.value;
                }
                });   

            if(localStorage.firstName != undefined){ document.getElementById("ldiv");
            
                ldiv.innerHTML= "Hello again " +localStorage.firstName;
                ldiv.style.display = "block";
                luninput.style.display = "none";                                    
                console.log("ok");
            }
                
var lcancel = document.getElementById("lcancel");

var newuser = document.getElementById("newuser");
        newuser.addEventListener("click", function(){
                console.log("cancel");
            document.getElementById("ldiv").innerHTML = " ";
              
            ldiv.style.display = "none";
            luninput.style.display = "block";
            localStorage.removeItem("firstName");
        });

var newuser = document.getElementById("newuser");
    newuser.src = "newuser.svg";



















/*var lanim = document.getElementById("lanim");

var lanimals = document.getElementById("lanimals");
lanimals.addEventListener("click", function(){
    curclick = "tiger"; 
});


if(curclick == ""){
  lanim.style.backgroundColor="pink";
}
if(curclick == tiger){
  lanim.style.backgroundColor="orange";
}
    */


















