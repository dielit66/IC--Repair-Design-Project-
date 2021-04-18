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

const pointSelector = document.querySelectorAll('.point-selector')
const citySelector = document.querySelectorAll('.city-selector')

let currentIndex = 0


prev.addEventListener('click', () => {
  if(currentIndex <= 0){
  currentIndex = 2;
  } else {
  currentIndex -= 1; 
  }
  setEntity(currentIndex);
  setFillOpacity(currentIndex);
  setChosenCity(currentIndex);
})
next.addEventListener('click', () => {
  
  if(currentIndex > entities.length-2){
  currentIndex = 0;
  } else {
  currentIndex += 1; 
  }
  setEntity(currentIndex);
  setFillOpacity(currentIndex);
  setChosenCity(currentIndex);
})


pointSelector[0].addEventListener('click', () => {
  setEntity(0);
  currentIndex = 0;
  setFillOpacity(currentIndex);
  setChosenCity(currentIndex);
})
pointSelector[1].addEventListener('click', () => {
  setEntity(1);
  currentIndex = 1;
  setFillOpacity(currentIndex);
  setChosenCity(currentIndex);
})
pointSelector[2].addEventListener('click', () => {
  setEntity(2);
  currentIndex = 2;
  setFillOpacity(currentIndex);
  setChosenCity(currentIndex);
  
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



citySelector[0].addEventListener('click', () => {
  setEntity(0);
  currentIndex = 0;
  setFillOpacity(currentIndex);
  setChosenCity(currentIndex);
})
citySelector[1].addEventListener('click', () => {
  setEntity(1);
  currentIndex = 1;
  setFillOpacity(currentIndex);
  setChosenCity(currentIndex);
})
citySelector[2].addEventListener('click', () => {
  setEntity(2);
  currentIndex = 2;
  setFillOpacity(currentIndex);
  setChosenCity(currentIndex);
  
}) 


function setChosenCity(currentIndex) {
  citySelector.forEach(function(item, index, array) {
    if (currentIndex !== index ) {
      item.classList.remove('city-selector__active')
    } else {
      item.classList.add('city-selector__active')
    }
  });
}


