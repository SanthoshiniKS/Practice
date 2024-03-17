let prev=document.getElementById("previous");
let next=document.getElementById("next");
let my=document.getElementById("monthYear");
let grid=document.getElementById("grid");
let currDate=new Date();
let week=["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"];
let currMonth=currDate.toLocaleString('en-us',{month:'long'});
prev.addEventListener("click",()=>{
    currDate.setMonth(currDate.getMonth()-1);
    if(currDate.toLocaleString('en-us',{month:'long'})==currMonth){
        flag=1;
    }
    else{
        flag=0;
    }
    displayCalendar();
});
next.addEventListener("click",()=>{
    if(currDate.getMonth()==11){
        currDate.setFullYear(currDate.getFullYear()+1);
    }
    currDate.setMonth((currDate.getMonth()+1)%12);
    if(currDate.toLocaleString('en-us',{month:'long'})==currMonth){
        flag=1;
    }
    else{
        flag=0;
    }
    displayCalendar();
});
grid.style.display='flex';
grid.style.flexWrap='wrap'; 
let flag=1;
function displayCalendar(){
    grid.innerHTML="";
    let Month=currDate.toLocaleString('en-us',{month:'long'});
    let year=currDate.getFullYear();
    my.textContent=Month+" "+year;
    let fd=new Date(year,currDate.getMonth(),1);
    let s=fd.getDay();
    let days=new Date(year,currDate.getMonth()+1,0).getDate();
    for(let i=0;i<week.length;i++){
        let w=document.createElement("div");
        w.textContent=week[i];
        w.style.width = 'calc(92.5% / 7)';
        w.style.border='0.5px solid grey';
        w.style.color='rgb(139, 2, 143)';
        w.style.border='0.5px solid #ddd';
        w.style.textAlign = 'center';
        grid.appendChild(w);
    }
    for(let i=0;i<s;i++){
        let empty=document.createElement("div");
        empty.textContent=" ";
        empty.style.width = 'calc(92.5% / 7)';
        empty.style.textAlign = 'center';
        empty.style.border='0.5px solid #ddd';
        grid.appendChild(empty);
    }
    let today = currDate.getDate(); 
    for(let i=1;i<=days;i++){
        let day=document.createElement("div");
        day.style.width = 'calc(92.5% / 7)';
        day.style.border='0.5px solid #ddd';
        day.style.textAlign = 'center';
        if(flag==1 && i==today){
            day.style.backgroundColor="rgb(139, 2, 143)";
            day.style.color="whitesmoke";
        }
        day.textContent=i;
        grid.appendChild(day);
    }
}
displayCalendar();