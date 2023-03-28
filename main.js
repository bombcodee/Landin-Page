let target = document.querySelector("#dynamic");
let stringArr = [
  "Learn to HTML",
  "Learn to CSS",
  "Learn to Javascript",
  "Learn to Python",
  "Learn to Ruby",
];

// 커서 깜빡임 효과
function blink() {
  target.classList.toggle("active");
}
setInterval(blink, 500);

// 랜덤으로 문자열 산출
function randomString() {
  let randomIndex = Math.floor(Math.random() * stringArr.length);
  let selectString = stringArr[randomIndex];
  let selectStringArr = selectString.split("");

  return selectStringArr;
}

function resetTyping() {
  target.textContent = "";
  dynamic(randomString());
}

// 한글자씪 텍스트 출력
function dynamic(randomArr) {
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(() => {
      dynamic(randomArr);
    }, 80);
  } else {
    setTimeout(resetTyping, 3000);
  }
}

dynamic(randomString());

//Test
// function dynamic(randomArr){
//   for(var i =0; i< randomArr.length; i++)
//   {
//     (function(x){
//       setTimeout(()=>{target.textContent += randomArr.shift()},500*x);
//     })(i);
//   }
// }
// dynamic(selectStringArr);
