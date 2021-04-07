const entities = [
  {
    cityText: `Rostov-on-Don \n LCD admiral`,
    img: 'sliderimg1.jpg',
    areaText: '81 m2',
    repairText: '3.5 months'
  },
  {
    cityText: `Sochchi \t     \nThieves nThieves`,
    img: 'sliderimg2.jpg',
    areaText: '105 m2',
    repairText: '4 months'
  },
  {
    cityText: 'Rostov-on-Don \n Patriotic',
    img: 'sliderimg3.jpg',
    areaText: '93 m2',
    repairText: '3 months '
  }
]

const cityText = document.getElementById('city-text')
const img = document.getElementById('slider-photo')
const areaText = document.getElementById('area-text')
const repairText = document.getElementById('repair-text')


const setEntity = (index) => {
  cityText.innerText = entities[index].cityText
  img.src = `img/${entities[index].img}`
  areaText.innerText = entities[index].areaText
  repairText.innerText = entities[index].repairText
  
}


const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

const firstImg = document.querySelector('.first-selector')
const secondImg = document.querySelector('.second-selector')
const thirdImg = document.querySelector('.third-selector')


let currentIndex = 0


prev.addEventListener('click', () => {
  setEntity(currentIndex - 1);
  currentIndex -= 1;
  setFillOpacity(currentIndex);
})
next.addEventListener('click', () => {
  setEntity(currentIndex + 1);
  currentIndex += 1;
  setFillOpacity(currentIndex);
})


 firstImg.addEventListener('click', () => {
  setEntity(0);
  currentIndex = 0;
  setFillOpacity(currentIndex);
})
secondImg.addEventListener('click', () => {
  setEntity(1);
  currentIndex = 1;
  setFillOpacity(currentIndex);
})
thirdImg.addEventListener('click', () => {
  setEntity(2);
  currentIndex = 2;
  setFillOpacity(currentIndex);
  
}) 


function setFillOpacity(currentIndex){
  if(currentIndex === 0){
  path1.style.fillOpacity = "1";
  path2.style.fillOpacity = "0.3";
  path3.style.fillOpacity = "0.3";
  } else if(currentIndex === 1){
  path1.style.fillOpacity = "0.3";
  path2.style.fillOpacity = "1";
  path3.style.fillOpacity = "0.3";
  } else if(currentIndex === 2){
  path1.style.fillOpacity = "0.3";
  path2.style.fillOpacity = "0.3";
  path3.style.fillOpacity = "1";
  }
}

function setChosenCity(currentIndex){
  if(currentIndex === 0){
  path1.style.fillOpacity = "1";
  path2.style.fillOpacity = "0.3";
  path3.style.fillOpacity = "0.3";
  } else if(currentIndex === 1){
  path1.style.fillOpacity = "0.3";
  path2.style.fillOpacity = "1";
  path3.style.fillOpacity = "0.3";
  } else if(currentIndex === 2){
  path1.style.fillOpacity = "0.3";
  path2.style.fillOpacity = "0.3";
  path3.style.fillOpacity = "1";
  }
}

