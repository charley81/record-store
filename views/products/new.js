const React = require('react')
const Layout = require('../layout/layout')

class New extends React.Component {
  render() {
    return (
      <Layout view="new">
        <div className="wrapper new">
          <h1>Create a new product</h1>
          <form action="/products" method="POST" encType="multipart/form-data">
            <div className="form-control">
              <label htmlFor="title" className="block">
                Artist:
              </label>
              <input
                type="text"
                id="artist"
                name="artist"
                className="block"
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
                className="block"
                placeholder="enter title..."
                required
              />
            </div>
            <div className="form-control flex">
              <label htmlFor="genre">Genre: </label>
              <select name="genre" id="genre">
                <option value="hip-hop">Hip-Hip</option>
                <option value="rock">Rock</option>
                <option value="country">Country</option>
                <option value="electronic">Electronic</option>
                <option value="metal">Metal</option>
                <option value="blues">Blues</option>
                <option value="r&b">R&B</option>
                <option value="soul">Soul</option>
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
                placeholder="enter description..."
                required
              ></textarea>
            </div>
            <div className="form-control upload">
              <label htmlFor="image" className="block">
                Upload:{' '}
              </label>
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
