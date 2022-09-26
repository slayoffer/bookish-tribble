const React = require('react');

const Layout = require('./Layout');

module.exports = function Dog() {
  return (
    <Layout>
        <script defer src="js/dog.js"></script>
        <h1>Hello dog!</h1>
        <button type="button" className="btn btn-success dogBtn">Получить собакена!</button>
        <div className='divDog'></div>
    </Layout>
  );
};
