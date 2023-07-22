let i=0;

setInterval( scroll,6*1000);

function scroll()
{
    let a=document.getElementsByClassName("content")[i];
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
}
function right(){
    scroll()
}
function left(){
    let a=document.getElementsByClassName("content")[i];
    a.classList.add("hide");
    if(i==0)
    {
        i=4;
        a=document.getElementsByClassName("content")[i];
        a.classList.remove("hide");
    }
    else
    {
        i--;
        a=document.getElementsByClassName("content")[i];
        a.classList.remove("hide");
    }
}