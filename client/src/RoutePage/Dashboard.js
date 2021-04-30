import React, { Component } from 'react';
import axios from 'axios'
import OrderDetails from './OrderDetails'

class Dashboard extends Component {

    constructor() {
        super()
        this.state = {
            restaurants: [{}],
            selected: '',
            clicked: false
        }
    }

    componentDidMount() {
        this.interval = setInterval(()=> this.getRestaurants(), 2000)
        // this.getRestaurants()
    }
    async getRestaurants() {
        try {
            const url = 'http://localhost:8080'
            const response = await axios.get(/* url+ */'/restaurants')
            if (response.data) {
                this.setState({ restaurants: response.data })
                console.log('data Received')
            }
        } catch (err) {
            console.log('Error Found : ' + err)
        }
    }
    displayRestaurants = () => {
        if (!this.state.restaurants.length) { return null; }


        return this.state.restaurants.map((restaurant, index) => (
            <div className='restaurant' 
                key={index}
                onClick = {()=>{
                    this.setState({
                        clicked: true,
                        selected: restaurant
                    })
                }}
            >
                <div className='name'> {restaurant.name} </div>
                <div className='orders'>
                    <h2>{restaurant.totalOrders}</h2>
                </div>
            </div>
        ))
    }

    render() {
        return (
            <div>
                <div className='head'>Total Orders</div>
                {this.displayRestaurants()}
                
                {   this.state.clicked && 
                    <OrderDetails restaurant={this.state.selected}/>
                }
            </div>
        )
    }
}

export default Dashboard;