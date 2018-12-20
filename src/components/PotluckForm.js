import React, { component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// add {createPotluck} action here

class PotluckForm extends Component {
  constructor(){
    super()

      this.state = {
        name: "",
        date: "",
        time: "",
        location: "",
        description: ""
      }
  }

  // actions to set state go here (onChange & onSubmit)

  render() {
    const { name, date, time, location, description } = this.state

    return (
      <form>
        <input name="name" placeholder="Name" value={ name }/>
        <input name="date" placeholder="Date" value={ date }/>
        <input name="time" placeholder="Time" value={ time }/>
        <input name="location" placeholder="Location" value={ location }/>
        <input name="description" placeholder="Description" value={ description }/>
        <button type="submit"> Create New Potluck </button>
      </form>
    )
  }

  // dispatch to props and connect goes down here!
}
