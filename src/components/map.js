import React, {useState, useEffect} from "react"
import PropTypes from 'prop-types';

const styles = theme => ({
    gridList: {
      width: 500,
      height: 450,
    },
  });

const GoogleMap = (props) => {
    const iframe = `<iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=${process.env.GATSBY_GOOGLE_MAP_API_KEY}&q=Image+Day+Spa,Santa+Maria+CA" allowfullscreen></iframe>`
    return (
        <div style={{height: '100%'}} dangerouslySetInnerHTML={{__html: iframe}} />
    )
}


export default GoogleMap
