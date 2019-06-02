import React from "react"
import Grid from "@material-ui/core/Grid"
import mapIcon from '../images/map.svg'
import Avatar from "@material-ui/core/Avatar"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"

const GoogleMap = () => {
    const iframe = `<iframe height="100%" width="100%" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=${process.env.GATSBY_GOOGLE_MAP_API_KEY}&q=Image+Day+Spa,Santa+Maria+CA" allowfullscreen></iframe>`
    return (
            <Grid style={{maxWidth: '1024px', margin: '0 auto', padding: '20px 0'}} alignItems="center" container>
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
                <Grid style={{padding: '10px'}} item xs={12} sm={9}>
                    <Paper>
                        <div style={{height: '400px', width: '100%'}} dangerouslySetInnerHTML={{__html: iframe}} />
                    </Paper>
                </Grid>
            </Grid>
    )
}

export default GoogleMap
