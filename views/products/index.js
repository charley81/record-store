const React = require('react')
const Layout = require('../layout/layout')

class Index extends React.Component {
  render() {
    let { products } = this.props

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
                  <div className="content">
                    <div className="info">
                      <h4>{artist}</h4>
                      <p>
                        {title.length >= 15
                          ? `${title.substring(0, 15)}...`
                          : title}
                      </p>
                      <p>Genre: {genre}</p>
                    </div>
                    <h4>
                      {quantity > 0 ? `${quantity} Left` : 'Out of Stock'}
                    </h4>
                  </div>
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
