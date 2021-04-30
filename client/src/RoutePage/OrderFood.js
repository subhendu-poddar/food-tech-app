import React, { Component } from 'react';
import axios from 'axios'

class OrderFood extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            selected_restaurant: '',
            restaurant_chosen: false,
            name_taken: false,
            restaurants: [{}]
        }
    }
    componentDidMount() {
        this.getRestaurants()
        this.checkStatus()
    }
    checkStatus() {
        return(
            this.state.ordered ? <div>Order Placed !!</div> : null
        )
    }
    async getRestaurants() {
        try {
            const url = 'http://localhost:8080'
            const response = await axios.get(url + '/restaurants')
            if (response.data) {
                this.setState({ restaurants: response.data })
                console.log('data Received')
            }
        } catch (err) {
            console.log('Error Found : ' + err)
        }
    }



    async submit() {
        try {
            const selected_restaurant = this.state.selected_restaurant
            selected_restaurant.totalOrders += 1
            selected_restaurant.orders.push(this.state.name)

            console.log(selected_restaurant.name)

            const url = 'http://localhost:8080'
            const response = await axios.put(url+'/order-food/'+selected_restaurant.name, selected_restaurant)
            if (!response.data) {
                console.log('Error Found: ')
            }
            this.resetState()
        } catch (err) {
            console.log('Error Found: ' + err)
        }
    }

    getName = () => {
        return (
            <form className='form'>
                <div className='form-label'>Order Food</div>
                <br />
                <input
                    className='form-input'
                    type="text"
                    placeholder="NAME"
                    value={this.state.name}
                    onChange={(evt) => { this.setState({ name: evt.target.value }) }} /> <br /> <br />

                <div className='button_center'>
                    <button className='button' 
                            onClick={(evt) => {
                                this.setState({ name_taken: true })
                                this.submit()
                            }} >
                     Submit </button>
                </div>
            </form>
            
        )
    }

    restaurantList = () => {
        const restaurants = this.state.restaurants
        if (!restaurants.length) return null;

        return (
            <div>
                {restaurants.map((restaurant, index) => (
                    <div key={index}>
                        <button className="team_btn"
                            onClick={() => {
                                this.setState({
                                    selected_restaurant: restaurant,
                                    restaurant_chosen: true
                                })
                            }}
                        >
                            {restaurant.name}
                        </button>
                    </div>
                ))}
            </div>
        )
    }

    resetState = () => {
        this.setState({
            name: '',
            selected_restaurant: '',
            restaurant_chosen: false,
            name_taken: false,
            restaurants: [{}]
        })
    }


    render() {
        return (
            <div>{
                // this.restaurantList()
                this.state.restaurant_chosen ?
                    (   
                        this.getName()
                    )
                :   this.restaurantList()

            }</div>
        );
    }
}

export default OrderFood;