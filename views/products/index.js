const React = require('react')
const Layout = require('../layout/layout')

class Index extends React.Component {
  render() {
    const { products } = this.props

    return (
      <Layout>
        <div className="wrapper">
          <h1>Create a new product</h1>
          <section className="product">
            {products.map(product => {
              const { _id, artist, title, image, description, quantity } =
                product
              return (
                <div key={_id}>
                  <img src={image} alt="" />
                  <h3>{title}</h3>
                  <h4>{artist}</h4>
                </div>
              )
            })}
          </section>
        </div>
      </Layout>
    )
  }
}

module.exports = Index
