import React from "react"

const GoogleMap = () => {
    const iframe = `<iframe height="100%" width="100%" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=${process.env.GATSBY_GOOGLE_MAP_API_KEY}&q=Image+Day+Spa,Santa+Maria+CA" allowfullscreen></iframe>`
    return (
        <div style={{height: '500px', width: '80vw'}} dangerouslySetInnerHTML={{__html: iframe}} />
    )
}

export default GoogleMap
