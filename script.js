var submitbtn = document.getElementById("submit");
const spans = document.querySelectorAll(".logospan span");
console.log(spans);
let firstSpan = spans[0];
var text = "SayakRaha.";
var i = 0;
function typename() {
  for (i = 0; i < text.length; i++) {
    delaytype(i);
  }
}
function delaytype(i) {
  setTimeout(() => {
    firstSpan.innerHTML += text[i];
  }, 300 * i);
}
function deletename() {
  for (i = 0; i < text.length; i++) {
    delaydelete(i);
  }
}
function delaydelete(i) {
  setTimeout(() => {
    firstSpan.innerHTML = firstSpan.innerHTML.substring(0, text.length-i-1);
  }, 300 * i);
}

function animName() {
  if (firstSpan.innerHTML === "") {
     setTimeout(typename, 300);
     
    }
  else if(firstSpan.innerHTML ==="SayakRaha."){
      setTimeout(deletename, 300);
    }
  
}
animName();
document.getElementById("click").addEventListener("click", ()=>{
  animName();
})
setInterval(()=>{
  document.getElementById("click").click();
}, 3310)
document.querySelector(".nav").addEventListener("", ()=>{
  
})
// const timer = setInterval(typename, 1000);
document.querySelector('.phnmenu').addEventListener("click", ()=>{
  document.querySelector('.phnmenu').classList.toggle("active");
  document.querySelector('.menuside').classList.toggle("active");
});
submitbtn.onclick = ()=>{
  var fname = document.getElementById("fname").value
  var lname = document.getElementById("lname").value
  var mail = document.getElementById("email").value
  var ph = document.getElementById("ph1").value
  var mesg = document.getElementById("mesg").value
  var subj = `Message from ${fname} ${lname} from website`
  var body = `Message from ${fname} ${lname}, from mail ${mail} and phone ${ph}, says: ${mesg}`
  Email.send({
    SecureToken : "c2328b75-619d-44ea-9be6-9577f4272fda",
    To : 'sayakraha12@gmail.com',
    From : "sayakraha12@gmail.com",
    Subject : subj,
    Body : body
}).then(
  message => alert(message)
);
console.log(done);
}