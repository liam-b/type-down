import { Menu, Button } from 'semantic-ui-react'
import React from 'react'

export default class EditorMenu extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <Menu.Item>
        {this.props.children}
      </Menu.Item>
    )
  }
}