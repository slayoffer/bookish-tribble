require('dotenv').config();

const path = require('path');
const express = require('express');
// const morgan = require('morgan');

const { sequelize, Task } = require('../db/models');
// Порядок импортов важен!!!
const renderTemplate = require('../lib/renderTemplate');
const Home = require('../views/Home');
const Form = require('../views/Form');
const Tasks = require('../views/Tasks');
const Dog = require('../views/Dog');

const app = express();

app.use(morgan('dev'));
// Чтобы наши статические файлы были видны браузеру, мы должны их подключить
app.use(express.static(path.join(__dirname, '../public/')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Выносим порт в .env и на всякий случай подставляем дефолтный через ||
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    renderTemplate(Home, null, res);
});

app.get('/form', async (req, res) => {
  try {
    const tasks = await Task.findAll();
    renderTemplate(Form, {tasks}, res);
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
});

app.get('/dog', (req, res) => {
  renderTemplate(Dog, null, res);
});

// Помним про try/catch в async/await функциях
app.post('/form', async (req, res) => {
    const { title, body } = req.body;
    console.log(title, body)
    try {
      const newTask = await Task.create({ title, body });
      // res.redirect('/tasks');
      res.json(newTask)
    } catch (error) {
      res.send(`Error ------> ${error}`);
    }
  });

app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.findAll();
        // Оборачиваем наши tasks в усы, потому что пропсы всегда должны быть объектом!
        renderTemplate(Tasks, {tasks}, res);
      } catch (error) {
        res.send(`Error ------> ${error}`);
      }
});

// * Ручка для удаления
app.delete('/deletePost', async (req, res) => {
  try {
    const { id } = req.body
    await Task.destroy({where: { id }})
    // res.json({deleteMy: 'DONE! Julia Sizova'})
    res.sendStatus(200)
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
})

app.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        console.log('Соединение с базой установлено!');
    } catch (err) {
        console.log(err, 'Error!')
    }
    console.log(`Сервер поднят на ${PORT} порту!`);
});
