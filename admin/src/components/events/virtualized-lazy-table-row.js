import React, { Component } from 'react'
import { DragSource } from 'react-dnd'
import { getEmptyImage } from 'react-dnd-html5-backend'
import { defaultTableRowRenderer } from 'react-virtualized'
import DragPreview from './table-row-drag-preview'

class VirtualizedLazyTableRow extends Component {
  componentDidMount() {
    this.props.connectPreview(getEmptyImage())
  }

  render() {
    const { connectDragSource, isDragging, ...rest } = this.props
    const dndStyle = {
      opacity: isDragging ? 0.3 : 1
    }
    return connectDragSource(
      <div style={dndStyle}>{defaultTableRowRenderer(rest)}</div>
    )
  }
}

const spec = {
  beginDrag(props) {
    return {
      uid: props.rowData.uid,
      DragPreview
    }
  }
}

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectPreview: connect.dragPreview(),
  isDragging: monitor.isDragging()
})

export default DragSource('event', spec, collect)(VirtualizedLazyTableRow)
