        let hrs=0;
        let mins=0;
        let secs=0;
        let hr=document.getElementById("hr");
        let min=document.getElementById("min");
        let sec=document.getElementById("sec");
        setInterval(function(){
            secs++;
            if(secs==60){
                secs=0;
                mins++;
            }
            if(mins==60){
                mins=0;
                hrs++;
            }
            hr.innerHTML="Hours"+""+ hrs;
            min.innerHTML="Minutes"+""+ mins;
            sec.innerHTML="Seconds"+""+ secs;
        },1000);
