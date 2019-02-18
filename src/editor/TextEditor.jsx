import { Segment, Grid, Input, Menu, Dropdown, Button, Icon} from 'semantic-ui-react'
import React from 'react'

export default class TextEditor extends React.Component {
  constructor() {
    super()

  }

  render() {
    return (
      <div contentEditable='true' className='TextEditor' />
    )
  }
}