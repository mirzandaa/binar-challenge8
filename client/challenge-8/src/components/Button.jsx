import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Button} from "react-bootstrap"

export class ButtonNav extends Component {
  render() {
    return (
        <Button onClick={this.props.action} variant="outline-light"style={{
            marginLeft: 20,
            marginRight:20
        }}>{this.props.buttonTitle}</Button>
    )
  }
}

export default ButtonNav