var mq =window.matchMedia("(min-width: 500px)");

            var tutnext1 = document.getElementById("tutnext1");
            var tutnext2 = document.getElementById("tutnext2");
            var tutnext3 = document.getElementById("tutnext3");
            var tutnext4 = document.getElementById("tutnext4");
            var tutnext5 = document.getElementById("tutnext5");
            var tutnext6 = document.getElementById("tutnext6");


            var ttut1 = document.getElementById("ttut1");
            var ttut2 = document.getElementById("ttut2");
            var ttut3 = document.getElementById("ttut3");
            var ttut4 = document.getElementById("ttut4");
            var ttut5 = document.getElementById("ttut5");
            var ttut6 = document.getElementById("ttut6");


            var ttut11 = document.getElementById("ttut11");
            var ttut21 = document.getElementById("ttut21");
            var ttut31 = document.getElementById("ttut31");
            var ttut41 = document.getElementById("ttut41");
            var ttut51 = document.getElementById("ttut51");
            var ttut61 = document.getElementById("ttut61");


if(mq.matches){
            tutnext1.addEventListener("click", function(){
                ttut2.style.display= "inline-block";
                ttut1.style.display= "none";
                tutnext1.style.display = "none";
                tutnext2.style.display = "inline-block";
            });

            tutnext2.addEventListener("click", function(){
                ttut3.style.display= "inline-block";
                ttut2.style.display= "none";
                tutnext2.style.display = "none";
                tutnext3.style.display = "inline-block";
            });

            tutnext3.addEventListener("click", function(){
                ttut4.style.display= "inline-block";
                ttut3.style.display= "none";
                tutnext3.style.display = "none";
                tutnext4.style.display = "inline-block";
            });
    
            tutnext4.addEventListener("click", function(){
                ttut5.style.display= "inline-block";
                ttut4.style.display= "none";
                tutnext4.style.display = "none";
                tutnext5.style.display = "inline-block";
            });
    
            tutnext5.addEventListener("click", function(){
                ttut6.style.display= "inline-block";
                ttut5.style.display= "none";
                tutnext5.style.display = "none";
                tutnext6.style.display = "inline-block";
            }); 
    
}

