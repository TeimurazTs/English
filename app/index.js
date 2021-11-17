import cards from "./cards";
import './style.css'

let label = document.createElement('label');
label.classList.add('switch');
let input = document.createElement('input');
let span = document.createElement('span')
span.classList.add('slider');
input.type = 'checkbox'

label.append(input);
label.append(span);
document.body.append(label);

let newDiv1 = document.createElement("div");
newDiv1.classList.add('visible')
document.body.append(newDiv1);
newDiv1.classList.add('newDiv1')

let newDiv2 = document.createElement("div");
newDiv2.classList.add('visible')
document.body.append(newDiv2);
newDiv2.classList.add('newDiv2')

let newDiv3 = document.createElement("div");
newDiv3.classList.add('visible')
document.body.append(newDiv3);
newDiv3.classList.add('newDiv3')

let newDiv4 = document.createElement("div");
newDiv4.classList.add('visible')
document.body.append(newDiv4);
newDiv4.classList.add('newDiv4')

let newDiv5 = document.createElement("div");
newDiv5.classList.add('visible')
document.body.append(newDiv5);
newDiv5.classList.add('newDiv5')

let newDiv6 = document.createElement("div");
newDiv6.classList.add('visible')
document.body.append(newDiv6);
newDiv6.classList.add('newDiv6')


for (let i = 1; i <= 6; i++) {
  cards[i].map((objs) => {
    let img = document.createElement("img");
    img.src = `../${objs.image}`;
    let audio = document.createElement("AUDIO");
    audio.src = `../${objs.audioSrc}`
    
    if (i == 1) {
      let temporalDiv = document.createElement('div')
      temporalDiv.classList.add('mainCard', `${objs.word}`)
      temporalDiv.append(img)
      temporalDiv.append(audio)
      temporalDiv.append(objs.word)
      newDiv1.append(temporalDiv);
      temporalDiv.addEventListener("click", function () { 
        audio.play() 
      })
    }
    if (i == 2) {
      let temporalDiv = document.createElement('div')
      temporalDiv.classList.add('mainCard', `${objs.word}`)
      temporalDiv.append(audio)
      temporalDiv.append(img)
      temporalDiv.append(objs.word)
      newDiv2.append(temporalDiv);
      temporalDiv.addEventListener("click", function () { 
        audio.play() 
      })
    }
    if (i == 3) {
      let temporalDiv = document.createElement('div')
      temporalDiv.classList.add('mainCard', `${objs.word}`)
      temporalDiv.append(img)
      temporalDiv.append(audio)
      temporalDiv.append(objs.word)
      newDiv3.append(temporalDiv);
      temporalDiv.addEventListener("click", function () { 
        audio.play() 
      })
    }
    if (i == 4) {
      let temporalDiv = document.createElement('div')
      temporalDiv.classList.add('mainCard', `${objs.word}`)
      temporalDiv.append(img)
      temporalDiv.append(audio)
      temporalDiv.append(objs.word)
      newDiv4.append(temporalDiv);
      temporalDiv.addEventListener("click", function () { 
        audio.play() 
      })
    }
    if (i == 5) {
      let temporalDiv = document.createElement('div')
      temporalDiv.classList.add('mainCard', `${objs.word}`)
      temporalDiv.append(img)
      temporalDiv.append(audio)
      temporalDiv.append(objs.word)
      newDiv5.append(temporalDiv);
      temporalDiv.addEventListener("click", function () { 
        audio.play() 
      })
    }
    if (i == 6) {
      let temporalDiv = document.createElement('div')
      temporalDiv.classList.add('mainCard', `${objs.word}`)
      temporalDiv.append(img)
      temporalDiv.append(audio)
      temporalDiv.append(objs.word)
      newDiv6.append(temporalDiv);
      temporalDiv.addEventListener("click", function () { 
        audio.play() 
      })
    }
  });
}

let typo = true;
input.addEventListener('click', function () {
  if(typo) {
    typo = false;
  } else{
    typo = true;
  }
})



let mainDiv = document.createElement('div');
mainDiv.classList.add('mainDiv')

for (let i = 1; i <= 6; i++) {
  let a = cards[i][0].image;
  let img = document.createElement('img');
  let tempDiv = document.createElement('div');
  img.src = `../${a}`
  tempDiv.append(img);
  tempDiv.classList.add(`tempDiv${i}`, 'mainCard')
  mainDiv.append(tempDiv)
  document.body.append(mainDiv);
  tempDiv.append(cards[0][i - 1])
}

let getTempDiv1 = document.querySelector('.tempDiv1');
getTempDiv1.addEventListener('click', function() {
  newDiv1.classList.remove('visible');
  newDiv1.classList.add('cardContainer')
  mainDiv.classList.remove('mainDiv')
  mainDiv.classList.add('visible')
  if(!typo) {
    let testArray = cards[1];
    awesomeFunction(testArray)
  }
})

let getTempDiv2 = document.querySelector('.tempDiv2');
getTempDiv2.addEventListener('click', function() {
  newDiv2.classList.remove('visible');
  newDiv2.classList.add('cardContainer')
  mainDiv.classList.remove('mainDiv')
  mainDiv.classList.add('visible');
  if(!typo) {
    let testArray = cards[2];
    awesomeFunction(testArray)
  }
})

let getTempDiv3 = document.querySelector('.tempDiv3');
getTempDiv3.addEventListener('click', function() {
  newDiv3.classList.remove('visible');
  newDiv3.classList.add('cardContainer')
  mainDiv.classList.remove('mainDiv')
  mainDiv.classList.add('visible');
  if(!typo) {
    let testArray = cards[3];
    awesomeFunction(testArray)
  }
})

let getTempDiv4 = document.querySelector('.tempDiv4');
getTempDiv4.addEventListener('click', function() {
  newDiv4.classList.remove('visible');
  newDiv4.classList.add('cardContainer')
  mainDiv.classList.remove('mainDiv')
  mainDiv.classList.add('visible');
  if(!typo) {
    let testArray = cards[4];
    awesomeFunction(testArray)
  }
})

let getTempDiv5 = document.querySelector('.tempDiv5');
getTempDiv5.addEventListener('click', function() {
  newDiv5.classList.remove('visible');
  newDiv5.classList.add('cardContainer')
  mainDiv.classList.remove('mainDiv')
  mainDiv.classList.add('visible');
  if(!typo) {
    let testArray = cards[5];
    awesomeFunction(testArray)
  }
})

let getTempDiv6 = document.querySelector('.tempDiv6');
getTempDiv6.addEventListener('click', function() {
  newDiv6.classList.remove('visible');
  newDiv6.classList.add('cardContainer')
  mainDiv.classList.remove('mainDiv')
  mainDiv.classList.add('visible');
  if(!typo) {
    let testArray = cards[6];
    awesomeFunction(testArray)
  }
})

let i = 8
let success = document.createElement('AUDIO');
success.src = '../audio/success.mp3'

function awesomeFunction (arr) {
  let randomNum = Math.floor(Math.random()*i) 
  let tempAudio = document.createElement('AUDIO')
  tempAudio.src = `../${arr[randomNum].audioSrc}`
  tempAudio.play()
  let forEventListener = document.querySelector(`.${arr[randomNum].word}`);
  arr.splice(randomNum, 1);
  forEventListener.addEventListener('click', function () {
    if(arr.length) {
      i--;
      setTimeout(function() {
        awesomeFunction(arr);
      }, 2000)
    }
    if(!arr.length) {
      setTimeout(function () {
        success.play()
      },2000)
    }
  })
}