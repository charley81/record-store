const React = require('react')
const Layout = require('../layout/layout')

class Show extends React.Component {
  render() {
    const { _id, artist, title, genre, image, description, quantity } =
      this.props.product
    return (
      <Layout>
        <div className="wrapper">
          <div className="info">
            <h3>{title}</h3>
            <p>{artist}</p>
            <p>{genre}</p>
            <p>{quantity} left</p>
          </div>
          <img src={image} alt="" />
          <form action={`/products/${_id}?_method=DELETE`} method="POST">
            <a href={`/products/${_id}/edit`}>edit</a>
            <button type="submit" className="delete">
              delete
            </button>
          </form>
          <button className="btn">Add to Bag</button>
          <p className="description">{description}</p>
        </div>
      </Layout>
    )
  }
}

module.exports = Show
