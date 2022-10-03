const React = require('react')

class Layout extends React.Component {
  render() {
    return (
      <>
        <head>
          <link rel="stylesheet" href="/css/styles.css" />
        </head>
        <body>
          <nav className="main-nav">
            <div className="nav-container">
              <a href="/products" className="logo">
                uptown<span>Recs</span>
              </a>
              <a href="/products/new">Add Product</a>
            </div>
          </nav>
          {this.props.children}
        </body>
      </>
    )
  }
}

module.exports = Layout
