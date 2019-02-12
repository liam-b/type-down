import { Segment, Grid, Input, Menu } from 'semantic-ui-react'
import React from 'react'
import './App.css'

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
        {/* <Grid columns='equal' divided secondary> */}
          {/* <Grid.Column width={3}> */}
            {/* <Segment> */}

            <Menu vertical secondary fluid>
              {/* <Menu.Item> */}
                {/* <Menu.Header className='ui large'>Products</Menu.Header> */}
                <Menu.Item>
                  <Input placeholder='Search...' />
                </Menu.Item>
                <Menu.Item name='my menu drtbgyhunjmk,' />
                <Menu.Item
                  name='account'
                  active={activeItem === 'account'}
                  onClick={this.setActiveItem}
                />
                <Menu.Item
                  name='other'
                  active={activeItem === 'other'}
                  onClick={this.setActiveItem}
                />
              {/* </Menu.Item> */}
            </Menu>

            {/* </Segment> */}
          {/* </Grid.Column> */}

          {/* <Grid.Column width={3}> */}
            other thing
          {/* </Grid.Column> */}
        {/* </Grid> */}

        

      </div>
    )
  }
}