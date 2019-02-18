import { Segment, Grid, Input, Menu, Dropdown, Button, Icon, Divider} from 'semantic-ui-react'
import React from 'react'
import './App.css'

import Project from './Project'
import TextEditor from './editor/TextEditor'
import EditorMenu from './editor/EditorMenu'

export default class App extends React.Component {
  constructor() {
    super()

    this.state = { activeItem: 'account' }
    this.setActiveItem = (_, { name }) => this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

    return (
      <div className='App'>
        <Grid columns='equal' divided secondary fluid>
          <Grid.Column width={3} fluid>
            {/* <Segment fluid> */}

            <Menu vertical secondary fluid>
                <Menu.Item>
                  <Input placeholder='Search...' />
                </Menu.Item>

                <Project name='Psychology' activeItem={activeItem} setActiveItem={this.setActiveItem} />
                <Project name='English Language' activeItem={activeItem} setActiveItem={this.setActiveItem} />
                <Project name='Chemistry' activeItem={activeItem} setActiveItem={this.setActiveItem} />
            </Menu>

            <div className='button-wrapper'>
              <Button icon labelPosition='left'>
                <Icon name='plus circle' />
                New Project
              </Button>
            </div>

            {/* </Segment> */}
          </Grid.Column>

          <Grid.Column width={12}>
            {/* <Button.Group> */}
            <EditorMenu />
            <Divider />
            <br/>
            <TextEditor />
          </Grid.Column>
        </Grid>

      </div>
    )
  }
}