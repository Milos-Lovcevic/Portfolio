
window.onload=function(elem){
    setTimeout(()=>{
        document.body.style.overflowY="scroll"
        document.getElementById("page-overlay").remove()
    },5000)


    if(window.innerWidth<=600){
        document.getElementById("menu-for-small-device").addEventListener('click',function(){
            let second=document.getElementById("second-nav-menu");
            second.style.opacity=1;
            second.style.zIndex=10;
            this.style.opacity=0;
            this.style.zIndex=-1;
        })
        document.getElementById("second-nav-menu").addEventListener("mouseleave",function(){
            let menu=document.getElementById("menu-for-small-device");
            menu.style.opacity=1;
            menu.style.zIndex=10;
            this.style.opacity=0;
            this.style.zIndex=-1;
        })
    }
}

function validateForm(e){
    let myForm=document.forms["contact-form"];
    let data=new FormData(myForm)
    let xmlHttp=new XMLHttpRequest()
    xmlHttp.open("POST", "https://formspree.io/f/meqplakj");
    xmlHttp.setRequestHeader("Accept", "application/json");
    xmlHttp.onreadystatechange=function() {
        if (xmlHttp.readyState !== XMLHttpRequest.DONE) return;
        if(xmlHttp.status===200) {
            document.getElementById("alert-container").style.top="20px";
            setTimeout(()=>{
                document.getElementById("alert-container").style.top="-200px";
            },3000)
        }else{
            alert("Oops! There was a problem.");
        }
    }
    xmlHttp.send(data)
    myForm.reset()
    return false
}

    

    
