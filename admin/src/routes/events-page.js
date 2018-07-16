import React, { Component } from 'react'
import EventsTable from '../components/events/virtualized-lazy-table'
import SelectedEvents from '../components/events/selected-events'
import Cart from '../components/cart/cart'

class EventsPage extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <SelectedEvents />
        <EventsTable />
        <Cart />
      </div>
    )
  }
}

export default EventsPage
