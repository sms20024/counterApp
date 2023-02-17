let count=0;
let counter=document.getElementById("0");
let increment=document.getElementsByClassName("increment")[0];
let decrement=document.getElementsByClassName("decrement")[0];
let reset=document.getElementsByClassName("reset")[0];
increment.addEventListener('click',increase)
reset.addEventListener('click',resets)
decrement.addEventListener('click',decrease)
function increase()
{
    count = count+1;
    counter.innerHTML=`${count}`;
}
function resets()
{
    count=0;
    counter.innerHTML=`${count}`;
}
function decrease()
{
    
    if (count==0)
    {
        count=0;
    }
    else{count = count-1;}
    counter.innerHTML=count;
}

