import React, { useContext } from 'react'
import StoreContext from '../../../../context/storeContext'


const LineItem = props => {
  const context = useContext(StoreContext)
  const { line_item } = props

  const variantImage = line_item.variant.image ? (
    <img
      src={line_item.variant.image.src}
      alt={`${line_item.title} product shot`}
      height="60px"
    />
  ) : null

  const handleRemove = () => {
    context.removeLineItem(context.client, context.checkout.id, line_item.id)
  }

  return (
    <div >
      <div>
        {variantImage}
      </div>
      <div>
        <p>
          {line_item.title} {line_item.variant.title}
        </p>
      </div>
      <div>
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  )
}

export default LineItem