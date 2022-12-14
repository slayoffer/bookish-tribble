const React = require('react');

module.exports = function Layout({ children }) {
  return (
    <html lang="en">
    <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Чтобы переопределять стили бутстрапа, мы должны импортить его ДО нашего main.css файла */}
        <link 
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" 
            rel="stylesheet" 
            integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" 
            crossOrigin="anonymous">
        </link>
        <link rel="stylesheet" href="styles/main.css"></link>
        <script defer src="js/example.js"></script>
        <title>Document</title>
    </head>
    <header>
        <nav className="navbar navbar-expand-lg bg-light">
          <img className='owlImg' src='images/owl.png' />
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Home</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/form">Form</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/tasks">Tasks</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/dog">Dog</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </header>
    <body>
        { children }
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous"></script>
    </body>
    </html>
  );
};
