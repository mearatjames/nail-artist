import React from "react"
import Grid from "@material-ui/core/Grid"
import mapIcon from '../images/map.svg'
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"

const GoogleMap = () => {
    const iframe = `<iframe height="100%" width="100%" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=${process.env.GATSBY_GOOGLE_MAP_API_KEY}&q=Image+Day+Spa,Santa+Maria+CA" allowfullscreen></iframe>`
    return (
            <Grid style={{maxWidth: '980px', margin: '0 auto'}} alignItems="center" container>
                <Grid style={{margin: '10 auto'}} item xs={12} sm={3}>
                <Avatar
                    alt='MapIcon'
                    src={mapIcon}
                    style={{margin: '0 auto'}}
                />
                <Typography align="center" color="primary" variant="h5" gutterBottom>
                    Find Me Here
                </Typography>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <div style={{height: '500px', width: '100%'}} dangerouslySetInnerHTML={{__html: iframe}} />
                </Grid>
            </Grid>
    )
}

export default GoogleMap
