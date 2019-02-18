import { Segment, Grid, Input, Menu, Dropdown, Button, Icon} from 'semantic-ui-react'
import React from 'react'

import './EditorMenu.css'

import EditorMenuGroup from './EditorMenuGroup'

export default class EditorMenu extends React.Component {
  constructor() {
    super()

    this.state = {
      boldEnabled: false,
      italicEnabled: false,
      underlineEnabled: false,
      strikethroughEnabled: false
    }

    this.handleButtonClick = (_, button) => {
      this.setState({
        boldEnabled: (button.name == 'bold') ? !this.state.boldEnabled : this.state.boldEnabled,
        italicEnabled: (button.name == 'italic') ? !this.state.italicEnabled : this.state.italicEnabled,
        underlineEnabled: (button.name == 'underline') ? !this.state.underlineEnabled : this.state.underlineEnabled,
        strikethroughEnabled: (button.name == 'strikethrough') ? !this.state.strikethroughEnabled : this.state.strikethroughEnabled 
      })
    }
  }

  render() {
    return (
      <div>

        <Menu className='editor menu' secondary>

          <EditorMenuGroup>
            <Dropdown button trigger={<Icon name='heading' />} simple>
                <Dropdown.Menu>
                  <Dropdown.Item text='Title' icon='angle double right'/>
                  <Dropdown.Item text='Heading' icon='angle right' />
                  <Dropdown.Item text='Subheading' icon='long arrow alternate right' />
                </Dropdown.Menu>
              </Dropdown>
          </EditorMenuGroup>

          <Menu.Item>
            <Button.Group>
              <Button icon='bold' name='bold' onClick={this.handleButtonClick} active={this.state.boldEnabled} />
              <Button icon='italic' name='italic' onClick={this.handleButtonClick} active={this.state.italicEnabled} />
              <Button icon='underline' name='underline' onClick={this.handleButtonClick} active={this.state.underlineEnabled} />
              <Button icon='strikethrough' name='strikethrough' onClick={this.handleButtonClick} active={this.state.strikethroughEnabled} />
            </Button.Group>
          </Menu.Item>

          <Menu.Item>
            <Button.Group>
              <Button icon='unordered list' focusable={false} />
              <Button icon='ordered list' />
              <Button icon='tasks' />
            </Button.Group>
          </Menu.Item>

          <Menu.Item position='right'>
            <Button.Group>
              <Button icon='undo alternate' />
              <Button icon='redo alternate' />
            </Button.Group>
          </Menu.Item>

          <Menu.Item>
            <Button.Group>
              <Button icon='save' />
              <Button icon='trash' />
              <Button icon='paper plane' />
            </Button.Group>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}