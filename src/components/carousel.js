import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import MobileStepper from "@material-ui/core/MobileStepper"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight"
import SwipeableViews from "react-swipeable-views"
import { autoPlay } from "react-swipeable-views-utils"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const styles = theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    display: "block",
    maxWidth: 400,
    overflow: "hidden",
    margin: '0 auto'
  },
})

class SwipeableTextMobileStepper extends React.Component {
  state = {
    activeStep: 0,
    ig : []
  }

  componentDidMount() {
    fetch('https://api.instagram.com/v1/users/self/media/recent/?access_token=26412791.bbafa33.5d964afbcc134587b761f8d47059b5d7&count=10')
        .then(response => {
            if (!response.ok) {
            throw new Error('HTTP error, status = ' + response.status);
            }
            return response.json()
        })
        .then(response => this.setState({ig: response.data}))
  }
  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }))
  }

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }))
  }

  handleStepChange = activeStep => {
    this.setState({ activeStep })
  }

  render() {
    const { classes, theme } = this.props
    const { activeStep } = this.state
    const maxSteps = this.state.ig.length

    return (
      <Paper className={classes.root}>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {this.state.ig.map((item, index) => (
            <div key={item.id}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img
                  className={classes.img}
                  src={item.images.standard_resolution.url}
                  alt={ !item.caption ? 'Instagram Feeds' : item.caption}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button
              size="small"
              onClick={this.handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={this.handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Paper>
    )
  }
}

SwipeableTextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(
  SwipeableTextMobileStepper
)
