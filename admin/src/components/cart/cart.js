import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DropTarget } from 'react-dnd'
import { removePerson } from '../../ducks/people'
import { fetchRemove as removeEvent } from '../../ducks/events'

const Cart = ({ connectDropTarget, canDrop, hovered }) => {
  const borderColor = canDrop ? (hovered ? 'red' : 'green') : 'black'

  const style = {
    border: `1px solid ${borderColor}`,
    position: 'fixed',
    right: '50%',
    top: 0,
    width: '200px',
    backgroundColor: 'lightsteelblue',
    height: '100px',
    textAlign: 'center',
    verticalAlign: 'middle',
    display: 'inline',
    lineHeight: '100px'
  }

  return connectDropTarget(<div style={style}>CART</div>)
}

// class Cart extends Component {
//   render(){
//     const {connectDropTarget, canDrop, hovered} = this.props
//     const borderColor = canDrop ? (hovered ? 'red' : 'green') : 'black'
//
//     const style = {
//       border: `1 px solid ${borderColor}`,
//       position: 'fixed',
//       right: 0,
//       top: 0,
//       width: '200px',
//       backgroundColor: 'lightsteelblue',
//       height: '100px',
//       textAlign: 'center',
//       verticalAlign: 'middle',
//       display: 'inline',
//       lineHeight: '100px'
//     }
//
//     return connectDropTarget(
//       <div style={style}>
//         CART
//       </div>
//     )
//   }
// }

const spec = {
  drop(props, monitor) {
    const { removePerson, removeEvent } = props
    const { uid } = monitor.getItem()
    const itemType = monitor.getItemType()
    if (itemType === 'event') {
      removeEvent(uid)
    } else if (itemType === 'person') {
      removePerson(uid)
    }
  }
}

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  canDrop: monitor.canDrop(),
  hovered: monitor.isOver()
})

export default connect(
  null,
  {
    removePerson,
    removeEvent
  }
)(DropTarget(['person', 'event'], spec, collect)(Cart))
