// * 1) + Найти форму на клиенте
// * 2) + Поймать событие отправки формы (event)
// * 3) + submit => event.preventDefault()
// * 4) + Вытащить данные из инпутов
// * 5) + Отправляем данные на бэк с помощью феча с клиента
// * 6) + Отослать ответ с бэка после обработки данных обратно на клиент 
// todo   fetch - делает запрос и при этом принимает ответ
// * 7) + Получить этот ответ на клиенте и обработать
// * 7.1) + Распарсить его с помощью json
// * 8) + Как то обновить дом дерево на странице без участия сервера

const form = document.querySelector('.mainForm');
const mainDiv = document.querySelector('.mainDiv')

form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const title = event.target.title.value
  const body = event.target.body.value
  console.log(title, body)
  // * Создаю объект для отправки на сервер
  const obj = { title, body }
  // * fetch с отправкой данных
  const response = await fetch('/form', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(obj)
  });
  const result = await response.json()
  console.log(result);
  const newCard = document.createElement('div')
  newCard.classList.add('card')
  newCard.style.width = '11rem'
  newCard.innerHTML = `<div class="card-body">
  <h5 class="card-title">${result.title}</h5>
  <p class="card-text">${result.body}</p>
  <button type="button" id='${result.id}' class="btn btn-danger">Удалить!</button>
</div>`
  // * Внедряем новосозданную карточку в большой див (родительский)
  mainDiv.appendChild(newCard)
})

mainDiv.addEventListener('click', async (e) => {
  if (e.target.tagName === 'BUTTON') {
    console.log('КНОПКА=>', e.target.id, e.target.tagName)
    const { id } = e.target;
    // * Отправляем id на бек для последующего удаления
    // ! DELETE - тот же самый POST, только с правильным названием
    // ! Мы должны называть вещи своими именами
    // todo После написания феча - пишем ручку под него (можно наоборот)
    const response = await fetch('/deletePost', {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ id })
    })
    // const result = await response.json()
    console.log(response)
    // * Проверка на удаление
    // if (result.deleteMy === 'DONE! Julia Sizova') {
    //   console.log('УДАЛЕНИЕ!', e.target.parentNode.parentNode)
    //   mainDiv.removeChild(e.target.parentNode.parentNode)
    // }
    // * Пример с отправкой статуса
    if(response.status === 200) {
      mainDiv.removeChild(e.target.parentNode.parentNode)
    }
  }
})
