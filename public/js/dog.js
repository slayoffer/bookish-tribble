console.log('Привет!')

const dogBtn = document.querySelector('.dogBtn')
const divDog = document.querySelector('.divDog')


dogBtn.addEventListener('click', async () => {
  // ! Если click - то event.PreventDefault НЕ НУЖЕН!
  // ! fetch - существует только в браузере
  const response = await fetch('https://dog.ceo/api/breeds/image/random')
  const result = await response.json()
  console.log(result)
  const dogImg = `<img src='${result.message}' alt='dog' />`
  divDog.innerHTML = dogImg
})
