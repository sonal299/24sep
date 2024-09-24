function popUp(){
    alert("you have clicked me!!")
}

var btn=document.getElementById("myBtn")
btn.addEventListener("click",function(){
    btn.textContent="changed"
})

var id1=document.getElementById("id1")
function changecolor(){
    id1.style.background="yellow"

}

function hide(){
    id1.style.background="white"
}