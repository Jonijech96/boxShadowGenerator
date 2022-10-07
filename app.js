const shadowColor = document.querySelector(".color");
const boxs =Array.from(document.getElementsByTagName("input"));


// parrafo.innerHTML

let shadow = [0,0,0,0,""];

const element = document.querySelector(".box-item");
const p = document.querySelector("p");
const colorText = document.querySelector(".color-text");
let text = "";

boxs.forEach(input => {
  input.addEventListener("input", (e) =>{
    const inputName = e.target.className;
    switch (inputName) {
      case "size":
        element.style.width = `${e.target.value}px`;
        element.style.height = `${e.target.value}px`;
        boxShadow();
        break;
      case "radius":
        element.style.borderRadius = `${e.target.value}%`;
        boxShadow();
        break;
      case "shadow-h":
        shadow[0] = e.target.value;
        boxShadow();
        break;
      case "shadow-v":
        shadow[1] = e.target.value;
        boxShadow();
        break;
      case "shadow-blur":
        shadow[2] = e.target.value;
        boxShadow();
        break;
      case "shadow-spread":
        shadow[3] = e.target.value;
        boxShadow();
        break;
      case "color":
        shadow[4] = e.target.value;
        boxShadow();
        text = element.style.boxShadow.split(")",1)+")";
        colorText.innerHTML = text;
        break;
      default:
        break;
    }
  })
})

// sizeBox.addEventListener("input", (e) => {
//   p.innerHTML = e.target.value;
//   // podemos manipular el css
  
  
// });
// radiusBox.addEventListener("input", (e) => {
//   p.innerHTML = `${e.target.value}%`;
//   // podemos manipular el css
//   element.style.borderRadius = `${e.target.value}%`;
// });

// shadowH.addEventListener("input", (e) => {
//   p.innerHTML = `${e.target.value}%`;
//   // podemos manipular el css

// });

// shadowV.addEventListener("input", (e) => {
//   p.innerHTML = `${e.target.value}%`;
//   // podemos manipular el css
//   shadow[1] = e.target.value;
//   boxShadow();
// });

// shadowBlur.addEventListener("input", (e) => {
//   p.innerHTML = `${e.target.value}%`;
//   // podemos manipular el css
//   shadow[2] = e.target.value;
//   boxShadow();
// });

// shadowSpread.addEventListener("input", (e) => {
//   p.innerHTML = `${e.target.value}%`;
//   // podemos manipular el css
//   shadow[3] = e.target.value;
//   boxShadow();
// });

// shadowColor.addEventListener("input",(e)=>{
//   console.log(e);
// })


function boxShadow (){
  element.style.boxShadow = `${shadow[0]}px ${shadow[1]}px ${shadow[2]}px ${shadow[3]}px ${shadow[4]}`
  p.innerHTML = `box-shadow: ${element.style.boxShadow}; border-radius: ${element.style.borderRadius}; heigth: ${element.style.height}; width: ${element.style.width};`;
}

function printGenerate (){
  p.innerHTML += `box-shadow: ${element.style.boxShadow};`;
};