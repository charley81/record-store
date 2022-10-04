const React = require('react')
const Layout = require('../layout/layout')

class Index extends React.Component {
  render() {
    const { products } = this.props

    return (
      <Layout>
        <div className="wrapper">
          <h1>All Products</h1>
          <section className="products">
            {products.map(product => {
              const {
                _id,
                artist,
                title,
                image,
                description,
                quantity,
                genre
              } = product
              return (
                <a href={`/products/${_id}`} key={_id} className="item">
                  <img src={image} alt="" />
                  <div className="info">
                    <h3>{artist}</h3>
                    <p>{title}</p>
                    <p>Genre: {genre}</p>
                  </div>
                  <h3>{quantity} left</h3>
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
