//헤더 타이핑 효과
const content = "기록 저장소에 오신 걸\n 진심으로 환영합니다.    ";
const text = document.querySelector(".text");
let i = 0;

function typing(){
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i > content.length) {
        text.textContent = "";
        i = 0;
    }
}
setInterval(typing, 200)


//빈 프로젝트 알림창
const project2 = document.getElementById("project2");
const project3 = document.getElementById("project3");
const project4 = document.getElementById("project4");
const project5 = document.getElementById("project5");


project2.addEventListener("click", function () {
    alert("아직 프로젝트가 없습니다.");
  });

project3.addEventListener("click", function () {
    alert("아직 프로젝트가 없습니다.");
  });

project4.addEventListener("click", function () {
    alert("아직 프로젝트가 없습니다.");
  });

project5.addEventListener("click", function () {
    alert("아직 프로젝트가 없습니다.");
  });


//
var heart = document.getElementsByClassName("far fa-heart");
heart.onclick = function() {
  alert("왜 눌러.");
}

// Get the modal
var modal = document.getElementsByClassName("modal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  alert("왜 눌러.");
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
