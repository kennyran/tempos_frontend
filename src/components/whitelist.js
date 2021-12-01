import React from 'react'
import '../App.css'
import web3 from './web3'

// =====// React Bootstrap Imports //======
import Button from 'react-bootstrap/Button'

export default class Whitelist extends React.Component {
    state = {
        name: '',
        email: '',
        walletAddress: ''
    }

    changeHandler = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state)
    }

    async componentDidMount() {
        // =====// Fetch walletAddress of current user //======
        let account = await web3.eth.getAccounts();
        this.setState({ walletAddress: account})
        console.log(account)
    }

    render() {

        return (
            <div className="whitelist-root">
                <div id="whitelist">
                    <div id="whitelist-title">
                        <h3>Whitelist form</h3>
                    </div>
                    <form className="whitelist-form" method="POST" action="https://script.google.com/macros/s/AKfycbx7RIFe4ztEhKMQpdB_tovo_eKdWEfxgj_iQbwNVUTqJU1MvlMIUCROIyBcNxe5WkrJ/exec" onSubmit={this.submitHandler}>
                        <label>
                            Name:
                            <input placeholder="Name" type="text" name="name" value={this.state.name} onChange={this.changeHandler} /> 
                        </label>
                        <label>
                            E-mail address:
                            <input placeholder="Email" type="text" name="email" value={this.state.email} onChange={this.changeHandler} />
                        </label>
                        <label>
                            Wallet Address:
                            <input placeholder="Wallet Address" type="text" name="wallet-address" value={this.state.walletAddress} onChange={this.changeHandler} />
                        </label>
                        <label>
                            <Button type="submit">Submit</Button>
                        </label>
                    </form>
                </div>
            </div>
        )
    }
}