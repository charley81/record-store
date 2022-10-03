const React = require('react')

class Layout extends React.Component {
  render() {
    return (
      <>
        <head>
          <link rel="stylesheet" href="/css/styles.css" />
        </head>
        <body>{this.props.children}</body>
      </>
    )
  }
}

module.exports = Layout
