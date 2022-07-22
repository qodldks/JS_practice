var name = prompt("이름을 입력해주세요");
var birthDate = prompt("생년월일을 입력해주세요", "YYYYMMDD");

const currentYear = 2022;
const ddiList = ["원숭이", "닭", "개", "돼지", "쥐", "소", "호랑이", "토끼", "용", "뱀", "말", "양"];

var birthDay = birthDate % 100;
var birthMonth = (birthDate % 10000 - birthDay) / 100;
var birthYear = (birthDate - birthMonth * 100 - birthDay) / 10000;
var age = currentYear - birthYear + 1;
var ddi = ddiList[birthYear % 12];

let h1bitrhDate = document.querySelector(".birthDate");
let h1name = document.querySelector(".name");
let h1age = document.querySelector(".age");
let h1ddi = document.querySelector(".ddi");

h1name.innerHTML = "이름 : " + name;
h1bitrhDate.innerHTML = "생년월일 : " + birthYear + "년 " + birthMonth + "월 " + birthDay + "일";
h1age.innerHTML = "나이 : " + age + "세";
h1ddi.innerHTML = "띠 : " + ddi + "띠";