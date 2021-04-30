import axios from 'axios';
import React, { Component } from 'react';

class AddRestaurant extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            totalOrders: 0,
            orders: []
        }
    }


    async submit(evt) {
        try {
            evt.preventDefault()
            const data = this.state
            const url = 'http://localhost:8080'
            const response = await axios.post('/add-restaurant', data)
            if (response.data) {
                console.log('Restaurant Successfully Added')
                this.resetState();
                return(
                    <div>Restaurant Successfully Added !!</div>
                )
            }
            else{
                console.log('Error Found: ')
            }
        }catch(err){
            console.log('Error Found: ' + err)
        }
        
    }

    resetState = () => {
        this.setState({
            name: '',
            totalOrders: 0,
            orders: []
        })
    }

    render() {
        return (
            <form className='form'>
                <div className='form-label'>Add Restaurants</div>
                <br />
                <input
                    className='form-input'
                    type="text"
                    placeholder="RESTAURANT NAME"
                    value={this.state.name}
                    onChange={(evt) => { this.setState({ name: evt.target.value }) }} /> <br /> <br />
                
                <div className='button_center'>
                    <button className='button' onClick={(evt) => this.submit(evt)} > Submit </button>
                </div>
            </form>
        );
    }
}

export default AddRestaurant;