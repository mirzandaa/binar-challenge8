import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Container, Form, Row, Col } from "react-bootstrap"

class createFormPlayer extends Component {
    
    render() {
        const classes = {
        inputColor: "bg-secondary"
    }

    return (
        <Container style={{
            display:"flex",
            justifyContent:"center",
            marginTop: 100
        }}>
        
        <Form onSubmit={this.props.handleSubmit}>
            <Col >
                <Row xs="auto" style={{marginTop:"10px"}}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label><b>Username</b></Form.Label>
                        <Form.Control className={classes.inputColor} type="text" name="username" value={this.props.username} onChange={(event) => {this.props.handleChange(event)}} />
                    </Form.Group>
                </Row>
                <Row xs="auto" style={{marginTop:"15px"}}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><b>Email</b></Form.Label>
                        <Form.Control className={classes.inputColor} type="email" name='email' value={this.props.email} onChange={(event) => {this.props.handleChange(event)}}/>
                    </Form.Group>
                </Row>                                 
                <Row xs="auto" style={{marginTop:"15px"}}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><b>Experience</b></Form.Label>
                        <Form.Control className={classes.inputColor} type="number" name='exp' value={this.props.exp} onChange={(event) => {this.props.handleChange(event)}}/>
                    </Form.Group>
                </Row>                                 
                <Row xs="auto" style={{marginTop:"15px"}}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><b>Level</b></Form.Label>
                        <Form.Control className={classes.inputColor} type="number" name='lvl' value={this.props.lvl} onChange={(event) => {this.props.handleChange(event)}}/>
                    </Form.Group>
                </Row>                                 
            </Col>
            <center><Button variant="primary" type="submit">Submit</Button></center>
            </Form>
            <br />
        </Container>
    )
  }
}

export default createFormPlayer