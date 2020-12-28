function overview(){  //to make overview active
    document.getElementsByClassName("overview")[0].id="active";
    document.getElementsByClassName("access")[0].id="inactive";
    document.getElementsByClassName("cost")[0].id="inactive";
}

function access(){   //to make access active
    document.getElementsByClassName("overview")[0].id="inactive";
    document.getElementsByClassName("access")[0].id="active";
    document.getElementsByClassName("cost")[0].id="inactive";
}

function cost(){    //to make cost active
    document.getElementsByClassName("overview")[0].id="inactive";
    document.getElementsByClassName("access")[0].id="inactive";
    document.getElementsByClassName("cost")[0].id="active";
}

function dropdown(){ //to activate the drop down
    document.getElementById("drop").style.display="block";
}

function modal(){  //to activate the modal1
    document.getElementById("modal").style.display="block";
}

document.getElementById("not1").addEventListener("click",(e)=>{ //to activate audio1 on click
    var audio= document.getElementsByTagName("audio")[0];
    audio.play();
})

function rect(clicked){    // to fill in green color on the 4 rectangles
    let n =parseInt(clicked[9]);
    for(var i=1;i<=n;i++){
        let identity="rectangle"+ i;
        document.getElementById(identity).style.backgroundColor ="#5cae01"     
    }
    for(i=n+1;i<5;i++){
        let identity="rectangle"+ i;
        document.getElementById(identity).style.backgroundColor ="#d8d8d8";
    }
    
}

function sidebar(){ // to activate sidebar
     document.getElementById("sidebar").style.transform="translateX(0)";
    //  document.getElementById("sidebar").style.display="block";
}

function change(clicked){ //to make logos active
     for(let i=0;i<6;i++){ document.getElementsByClassName("logopart")[i].style.color="#e20074";}
     document.getElementsByClassName("logopart")[clicked].style.color="#fc6e28";
 }

function colorchange1(clicked){ //to activate color in mouse over
    document.getElementsByClassName(clicked)[0].style.backgroundColor="#f5f5f5";
    document.getElementsByClassName(clicked)[0].style.borderColor="#dddddd";
    
 }

function colorchange2(clicked){  //to inactivate color in mouse over by mouse out
    document.getElementsByClassName(clicked)[0].style.backgroundColor="#ffffff";
    document.getElementsByClassName(clicked)[0].style.borderColor="#cccccc";
    
 }
function mod(clicked){  //to activate modal2
    let n =parseInt(clicked[3]);
    let m=n+1;
    let identity = 'row' + m;
   let t= document.getElementsByClassName(identity)[0].getElementsByClassName('column2')[0].innerHTML;
   document.getElementById("tex").innerHTML=t;
   document.getElementById("modl").style.display="block";
   
}

window.onload = function(){   // to close all popups on clicking the window
    document.onclick = function(e){
       if((e.target.id !== 'modal1')&&(e.target.id !== 'image3')){
           document.getElementById('modal').style.display = 'none';
       }
       if((e.target.id !== 'drop')&&(e.target.id !== 'not1')&&(e.target.id !== 'down')){
           document.getElementById('drop').style.display = 'none';
        }
       if((e.target.id !== 'sidebar')&&(e.target.id !== 'manface')&&(e.target.id !== 'side')){
           document.getElementById("sidebar").style.transform="translateX(100%)";
        }
       if((e.target.id !== 'modl1')&&(e.target.id !== 'set1')&&(e.target.id !== 'set2')&&(e.target.id !== 'set3')&&(e.target.id !== 'set4')&&(e.target.id !== 'set5')&&(e.target.id !== 'set6')&&(e.target.id !== 'set7')&&(e.target.id !== 'set8')&&(e.target.id !== 'set9')){
            document.getElementById('modl').style.display = 'none';
        }

    };
 };