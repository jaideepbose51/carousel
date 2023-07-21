let i=0;

// console.log(document.getElementsByClassName("content"));
setInterval(()=>{
    let a=document.getElementsByClassName("content")[i];
    a.style.left = '-100%';
    a.classList.add("hide");
    if(i==4)
    {
        i=0;
        a=document.getElementsByClassName("content")[i];
        a.classList.remove("hide");
    }
    else
    {
        i++;
        a=document.getElementsByClassName("content")[i];
        a.classList.remove("hide");
    }
},3*1000)