import React, { useContext }from 'react';
import SEO from "../../components/seo"
import ProductGrid from "../../components/productGrid"
import Fab from '@material-ui/core/Fab'
import CartIcon from '@material-ui/icons/ShoppingCart'
import StoreContext from '../../context/storeContext'
import Badge from '@material-ui/core/Badge'

const Shop = ({ data }) => {

  const context = useContext(StoreContext)
  const { lineItems } = context.checkout

  return (
    <React.Fragment>
        <SEO />
            <ProductGrid />
            <Badge badgeContent={lineItems.length} color="primary">
            <Fab href="./cart" color="secondary" aria-label="Cart">
              <CartIcon />
            </Fab>
        </Badge>
    </React.Fragment>
    // <Flex flexWrap='wrap'>
    //   <Box pr={[null, 3]} width={[1, 1/2]}>
    //     {product.images.map(x => (
    //       <Img
    //         fluid={x.localFile.childImageSharp.fluid}
    //         key={x.id}
    //         alt={product.title}
    //       />
    //     ))}
    //   </Box>
    //   <Box width={[1, 1/2]}>
    //     <h1>{product.title}</h1>
    //     <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
    //     <ProductForm product={product} />
    //   </Box>
    // </Flex >
  )
}

export default Shop
