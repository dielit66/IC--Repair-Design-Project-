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
const pathSelector = document.querySelectorAll('.path')

let currentIndex = 0


prev.addEventListener('click', () => {
  if(currentIndex <= 0){
  currentIndex = entities.length - 1;
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

pointSelector.forEach((item, index) => {
  item.addEventListener("click", function() {
      currentIndex = index ;
      setEntity(currentIndex)
      setFillOpacity(currentIndex);
  setChosenCity(currentIndex);
  })
})

citySelector.forEach((item, index) => {
  item.addEventListener("click", function() {
      currentIndex = index ;
      setEntity(currentIndex)
      setFillOpacity(currentIndex);
  setChosenCity(currentIndex);
  })
})



function setFillOpacity(currentIndex) {
  pathSelector.forEach(function(item, index, array) {
    if (currentIndex !== index ) {
      item.style.fillOpacity = "0.3";
    } else {
      item.style.fillOpacity = "1";
    }
  });
}

function setChosenCity(currentIndex) {
  citySelector.forEach(function(item, index, array) {
    if (currentIndex !== index ) {
      item.classList.remove('city-selector__active')
    } else {
      item.classList.add('city-selector__active')
    }
  });
}