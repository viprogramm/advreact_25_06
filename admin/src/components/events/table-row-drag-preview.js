import React, { Component } from 'react'
import { connect } from 'react-redux'
import { eventSelector } from '../../ducks/events'

class TableRowDragPreview extends Component {
  render() {
    if (!this.props.event) return null

    return <div>{this.props.event.title}</div>
  }
}

export default connect((state, props) => ({
  event: eventSelector(state, props)
}))(TableRowDragPreview)
