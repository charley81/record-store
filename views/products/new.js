const React = require('react')
const Layout = require('../layout/layout')

class New extends React.Component {
  render() {
    return (
      <Layout>
        <div className="wrapper">
          <h1>Create a new product</h1>
          <form action="/products" method="POST" encType="multipart/form-data">
            <div className="form-control">
              <label htmlFor="title">Artist: </label>
              <input
                type="text"
                id="artist"
                name="artist"
                placeholder="enter artist..."
              />
            </div>
            <div className="form-control">
              <label htmlFor="title">Title: </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="enter title..."
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="genre">Genre: </label>
              <select name="genre" id="genre">
                <option value="" disabled selected hidden>
                  Choose Genre...
                </option>
                <option value="hip-hop">Hip-Hip</option>
                <option value="rock">Rock</option>
                <option value="country">Country</option>
                <option value="electronic">Electronic</option>
                <option value="metal">Metal</option>
                <option value="blues">Blues</option>
              </select>
            </div>
            <div className="form-control">
              <label htmlFor="quantity">Quantity: </label>
              <input
                type="text"
                id="quantity"
                name="quantity"
                placeholder="enter qty..."
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="description">Description: </label>
              <textarea
                name="description"
                id="description"
                cols="30"
                rows="10"
                placeholder="enter description..."
                required
              ></textarea>
            </div>
            <div className="form-control upload">
              <label htmlFor="image">Upload: </label>
              <input type="file" id="image" name="image" />
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

module.exports = New
