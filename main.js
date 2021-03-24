let selection = [0, 0, 0, 0, 0, 0]
let mistake = false
document.getElementById('submit').addEventListener('click', () => {

  for (let i = 0; i < 6; i++) {
    if (document.getElementById(i).value <= 49 && document.getElementById(i).value >= 0) {
      selection[i] = document.getElementById(i).value

    } else {
      mistake = true
    }
    if (mistake === true) {
      document.getElementById('failure').innerHTML = 'Bad input. Try again.'
      selection = [0, 0, 0, 0, 0, 0]
    } else {
      document.getElementById('div').hidden = true
      document.getElementById('div2').hidden = false
      document.getElementById('selection').innerHTML = 'Your number selection is: ' + selection
      const randomNums = getRandomLottoNumbers()
      for (let i = 0; i < randomNums.length; i++) {
        let count = 0
        function animation() {
          document.getElementById('num' + i).innerHTML = getRandomInt(49)
          count++
          if (count >= 25 + i * 4) {
            clearInterval(id)
          }
        }
        const id = setInterval(animation, 200)
        document.getElementById('num' + i).innerHTML = randomNums[i]
      }
      async function pause() {
        await delay(13000)
        console.log(delay)
        document.getElementById('div').hidden = true
        document.getElementById('div2').hidden = true

        document.getElementById('win').hidden = false
        const wins = getWins(randomNums)
        if (wins !== 0) {
          document.getElementById('h1').innerHTML = 'You have picked ' + wins + ' right! Congratulations for winning!'
        } else {
          document.getElementById('h1').innerHTML = 'You have not won anything. Next time you will have better luck!'

        }
      }
      pause()


    }
  }
})

function getRandomLottoNumbers() {
  const nums = []
  for (let i = 0; i < 6; i++) {
    nums.push(getRandomInt(50))
  }
  return nums
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function getWins(nums) {
  let wins = 0
  for (let i = 0; i < selection.length; i++) {
    if (selection[i] === nums[i]) {
      wins++
    }
  }
  return wins
}