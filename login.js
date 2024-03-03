var myfm=document.getElementById("myform")
console.log(myfm)
 
//attach the event handler to the form for the "submit" event
myfm.addEventListener("submit",handlesubmit);

function handlesubmit(event){
console.log("hello")
alert("Are you sure Login your Account ?")

event.preventDefault()

var UserName=document.getElementById("UserName").value
var Password=document.getElementById("Password").value

console.log("UserName",UserName)
console.log("Password",Password)

}