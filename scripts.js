const numberEl = document.getElementById('number')
const buttonEl = document.getElementById('button')
const audioEl = new Audio('fart-fixed.mp3')

function delay(time) {
  return new Promise (resolve => setTimeout(resolve, time))
}

async function fart(numberOfFarts) {

  for (let i = 0; i < numberOfFarts; i++) {
    await delay(100)
    audioEl.currentTime = 0;
    audioEl.play()

    console.log(`number of farts ${numberOfFarts}`)
  }

}


buttonEl.addEventListener('click', () => {
  let number = Number(numberEl.value)
  fart(number)
})


