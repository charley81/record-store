const React = require('react')
const Layout = require('../layout/layout')

class Index extends React.Component {
  render() {
    const { products } = this.props

    return (
      <Layout>
        <div className="wrapper index">
          <h1>All Products</h1>
          <section className="products">
            {products.map(product => {
              const { _id, artist, title, image, quantity, genre } = product
              return (
                <a href={`/products/${_id}`} key={_id} className="item">
                  <div className="img-container">
                    <img
                      src={image}
                      alt={`${artist}'s album cover for the ${title} album`}
                    />
                  </div>
                  <div className="info">
                    <h4>{artist}</h4>
                    <p>{title}</p>
                    <p>Genre: {genre}</p>
                  </div>
                  <h4>{quantity} left</h4>
                </a>
              )
            })}
          </section>
        </div>
      </Layout>
    )
  }
}

module.exports = Index
