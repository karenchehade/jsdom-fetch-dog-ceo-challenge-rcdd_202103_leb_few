console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function () {
  fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(response => response.json())
  .then(json =>
   {//console.log(json);
     const imgs = document.getElementById('dog-image-container');
    for(let i in json.message){
      //console.log(json.message[i]);
      imgs.innerHTML += `<img src="${json.message[i]}"/>`;
    }
});

fetch('https://dog.ceo/api/breeds/list/all')
.then(response => response.json())
.then(json =>{
  const ul = document.getElementById('dog-breeds');
 for(const i in json.message){
   //console.log(i);
   let dogLi = document.createElement("li");
        dogLi.innerHTML = i;
        dogLi.addEventListener("click", ()=> {
          // console.log("hi");
           dogLi.style.color= "#adcae6";
        });
          ul.appendChild(dogLi);

  }
});
});
  let chooseChar = document.getElementById("breed-dropdown");
chooseChar.addEventListener("change",() => {
  const chara = document.getElementById("breed-dropdown").options[index].innerHTML;
 const list = document.querySelectorAll("li");
 for(let i=0;i<list.length;i++) {
   if(list[i].innerHTML[0] !== letter) {
     li[i].style.display = "none";
   }
 });
