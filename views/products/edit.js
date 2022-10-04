const React = require('react')
const Layout = require('../layout/layout')

class Edit extends React.Component {
  render() {
    const { _id, artist, title, quantity, description, image, genre } =
      this.props.product
    return (
      <Layout view="new">
        <div className="wrapper new">
          <h1>Edit Product</h1>
          <form
            action={`/products/${_id}?_method=PUT`}
            method="POST"
            encType="multipart/form-data"
          >
            <div className="form-control">
              <label htmlFor="title" className="block">
                Artist:
              </label>
              <input
                type="text"
                id="artist"
                name="artist"
                className="block"
                defaultValue={artist}
                placeholder="enter artist..."
              />
            </div>
            <div className="form-control">
              <label htmlFor="title" className="block">
                Title:{' '}
              </label>
              <input
                type="text"
                id="title"
                name="title"
                maxlength="30"
                className="block"
                defaultValue={title}
                placeholder="enter title..."
                required
              />
            </div>
            <div className="form-control flex">
              <label htmlFor="genre">Genre: </label>
              <select name="genre" id="genre" defaultValue={genre}>
                <option value="hip-hop">Hip-Hip</option>
                <option value="rock">Rock</option>
                <option value="country">Country</option>
                <option value="electronic">Electronic</option>
                <option value="metal">Metal</option>
                <option value="blues">Blues</option>
              </select>
            </div>
            <div className="form-control">
              <label htmlFor="quantity" className="block">
                Quantity:{' '}
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="0"
                max="500"
                className="block"
                defaultValue={quantity}
                placeholder="enter qty..."
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="description" className="block">
                Description:{' '}
              </label>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="10"
                className="block"
                defaultValue={description}
                placeholder="enter description..."
                required
              ></textarea>
            </div>
            <div className="form-control upload">
              <label htmlFor="image" className="block">
                Upload:{' '}
              </label>
              <input type="file" id="image" name="image" value={image} />
            </div>
            <button className="btn" type="submit">
              submit
            </button>
          </form>
        </div>
      </Layout>
    )
  }
}

module.exports = Edit
