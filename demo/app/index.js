import './styles.scss'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom'

const demos = {
  // main: require('./demo-main').default,
  main: require('./demo-custom-items').default,
  performance: require('./demo-performance').default,
  treeGroups: require('./demo-tree-groups').default,
  linkedTimelines: require('./demo-linked-timelines').default,
  elementResize: require('./demo-element-resize').default,
  renderers: require('./demo-renderers').default,
  verticalClasses: require('./demo-vertical-classes').default,
  customItems: require('./demo-custom-items').default,
  customHeaders: require('./demo-headers').default,
  customInfoLabel: require('./demo-custom-info-label').default,
  controledSelect: require('./demo-controlled-select').default,
  controlledScrolling: require('./demo-controlled-scrolling').default,
}

// A simple component that shows the pathname of the current location
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="demo-demo">
            <Route path="/" exact component={demos[Object.keys(demos)[0]]} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
