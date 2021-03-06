import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// add {createPotluck} action here
import { createPotluck } from '../actions/potluckActions'

class PotluckForm extends Component {
  constructor(){
    super()

      this.state = {
        name: "",
        date: "",
        time: "",
        location: "",
        description: "",
      }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
      // actions to set state go here (onChange & onSubmit)
    onChange(e) {
      const field = e.target.name
      let state = this.state

      state[field] = e.target.value
      this.setState(state)
    }

    onSubmit(e) {
      e.preventDefault()
      console.log('A')
      this.props.createPotluck(this.state)
      console.log('B')
      this.setState({
        name: "",
        date: "",
        time: "",
        location: "",
        description: ""
      })
    }



  render() {
    const { name, date, time, location, description } = this.state

    return (
      <div>

        <form onSubmit={ this.onSubmit }>
          <input name="name" placeholder="Name" value={ name } onChange={ this.onChange }/><br></br>
          <input name="date" placeholder="Date" value={ date } onChange={ this.onChange }/><br></br>
          <input name="time" placeholder="Time" value={ time } onChange={ this.onChange }/><br></br>
          <input name="location" placeholder="Location" value={ location } onChange={ this.onChange }/><br></br>
          <input name="description" placeholder="Description" value={ description } onChange={ this.onChange }/><br></br>
          <button type="submit"> Create New Potluck </button>
        </form>
      </div>
    )
  }
}

  // dispatch to props and connect goes down here!

const mapDispatchToProps = dispatch => bindActionCreators({
    createPotluck
  }, dispatch)

export default connect(null, mapDispatchToProps)(PotluckForm)
