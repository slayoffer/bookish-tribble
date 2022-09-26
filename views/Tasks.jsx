const React = require('react');

const Layout = require('./Layout');

module.exports = function Task({tasks}) {
  return (
    <Layout>        
        {tasks?.map((task) => (
            <div key={task.id} className="card" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{task.title}</h5>
                    <p className="card-text">{task.body}</p>
                </div>
            </div>
            )
        )}
    </Layout>
  );
};