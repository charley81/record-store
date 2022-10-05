const React = require('react')
const Layout = require('../layout/layout')

class Show extends React.Component {
  render() {
    const { _id, artist, title, genre, image, description, quantity } =
      this.props.product
    return (
      <Layout>
        <div className="wrapper show">
          {/* header */}
          <img src={image} alt={`album cover of ${artist} - ${title}`} />

          {/* info */}
          <div className="info">
            <div className="stats">
              <div className="info-header">
                <h3>{title}</h3>
                <p>{artist}</p>
                <p>{genre}</p>
              </div>
              <h3>{quantity > 0 ? `${quantity} Left` : 'Out of Stock'}</h3>

              {/* edit & delete */}
              <form action={`/products/${_id}?_method=DELETE`} method="POST">
                <a href={`/products/${_id}/edit`} className="edit">
                  edit
                </a>
                <button type="submit" className="delete">
                  delete
                </button>
              </form>
            </div>
            <p className="description">{description}</p>
          </div>

          {/* add to bag */}
          {quantity > 0 ? (
            <form
              action={`/products/${_id}/purchase?_method=PUT`}
              method="POST"
            >
              <button type="submit" className="btn">
                Add to Bag
              </button>
            </form>
          ) : (
            <div>
              <button className="btn" disabled>
                Add to Bag
              </button>
            </div>
          )}
        </div>
      </Layout>
    )
  }
}

module.exports = Show
