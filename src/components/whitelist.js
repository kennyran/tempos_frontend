import React from 'react'
import '../App.css'
//import web3 from './web3'

// =====// React Bootstrap Imports //======
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel'

export default class Whitelist extends React.Component {
    state = {
        name: '',
        email: '',
        walletAddress: '',
        phoneNumber: '',
        discordName: '',
        show: false,
        fields: {},
        errors: {}
    }

    handleShow = () => {
        this.setState({
          show: true
        })
      }
    
      handleClose = () => {
        this.setState({
          show: false
        })
    }

    changeHandler = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {

        return (
            <div className="whitelist-root">

                <Button variant="light" onClick={this.handleShow}className="whitelist-btn">Whitelist Form</Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <ModalHeader closeButton>
                        <ModalTitle>Whitelist Form</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <Form 
                        method="POST" 
                        action="https://docs.google.com/forms/d/e/1FAIpQLSefl7TMiQjpxWS1Vwl54OQLlvLx4G-3LWH3En0uIln2jK2-YA/formResponse" target="_blank">
                            <Form.Group>
                                <FloatingLabel controlId="floatinginput" label="Name"
                                className="mb-3">
                                    <Form.Control type="text" onChange={this.changeHandler} placeholder="Enter Name" name="entry.1456901542"
                                    required/>
                                    <Form.Text className="text-muted">
                                    We'll never share your personal data with anyone else.
                                    </Form.Text>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group>
                                <FloatingLabel controlId="floatinginput" label="E-mail Address (name@example.com)"
                                className="mb-3">
                                <Form.Control 
                                type="text" 
                                onChange={this.changeHandler} placeholder="name@example.com" name="entry.457389616"
                                required/>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group>
                                <FloatingLabel controlId="floatinginput" label="Ethereum Wallet Address (i.e. 0x0000)"
                                className="mb-3">
                                    <Form.Control 
                                    type="text" 
                                    onChange={this.changeHandler} placeholder="Wallet Address (i.e. 0x0000)" 
                                    name="entry.227509160"
                                    required/>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group>
                                <FloatingLabel controlId="floatinginput" label="Phone Number"
                                className="mb-3">
                                    <Form.Control 
                                    type="text" 
                                    onChange={this.changeHandler} placeholder="Phone Number"
                                    name="entry.1679963375"
                                    required/>
                                    <Form.Text className="text-muted">
                                    Backup way of contacting giveaway recipient
                                    </Form.Text>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group>
                                <FloatingLabel controlId="floatinginput" label="Discord Username (ex. DiscordUser#0001)"
                                className="mb-3">
                                    <Form.Control 
                                    type="text" 
                                    onChange={this.changeHandler} placeholder="User Name (i.e. User#0001)"
                                    name="entry.1131314337" required/>
                                </FloatingLabel>
                            </Form.Group>
                            
                            <ModalFooter>
                                <Button className="form-submit"
                                variant="outline-dark" 
                                type="submit">
                                    Submit
                                </Button>
                            </ModalFooter>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}