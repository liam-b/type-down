import { Menu } from 'semantic-ui-react'
import React from 'react'
import './Project.css'

export default class Project extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Menu.Item
        fitted
        className='project'
        name={this.props.name}
        active={this.props.activeItem === this.props.name}
        onClick={this.props.setActiveItem}
        // style={{ backgroundColor: "#2185d0" }}
      />
    )
  }
}