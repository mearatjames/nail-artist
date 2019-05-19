import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry }) => {
  // const data = entry.getIn(['data']).toJS()

  // if (data) {
  //   return (
  //     <IndexPageTemplate title={data.title} />
  //   )
  // } else {
  //   return <div>Loading...</div>
  // }
  return (
    <div>
      <h1>Test</h1>
    </div>
  )
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default IndexPagePreview
