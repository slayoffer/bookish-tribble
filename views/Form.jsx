const React = require('react');

const Layout = require('./Layout');

module.exports = function Form({tasks}) {
  return (
    <Layout>
        <script defer src="js/tasks.js"></script>
        <form action="/form" method="POST" className='mainForm'>
            <label htmlFor="exampleInput1" className="form-label">Title</label>
            <input name="title" type="text" className="form-control" id="exampleInput1"></input>
            <label htmlFor="exampleInput2" className="form-label">Body</label>
            <input name="body" type="text" className="form-control" id="exampleInput2"></input>
            <button type="submit" className="btn btn-primary">Отправить</button>
        </form>
        <div className='mainDiv'>
        {tasks?.map((task) => (
            <div key={task.id} className="card" style={{width: '11rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{task.title}</h5>
                    <p className="card-text">{task.body}</p>
                    <button type="button" id={task.id} className="btn btn-danger">Удалить!</button>
                </div>
            </div>
            )
        )}
        </div>
    </Layout>
  );
};
