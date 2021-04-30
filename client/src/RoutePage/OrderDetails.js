import React, { Component } from 'react';

class OrderDetails extends Component {
    constructor(props){
        super(props)
        this.state = {
            clicked: false
        }
    }

    showDetails() {
        const orders = this.props.restaurant.orders

        return(
            <div>{
                orders.map((order, index) => (
                    <div key={index} className='menu'>
                        <div className='food'>
                            {order}
                        </div>
                    </div>
                ))
            }</div>
        )
    }
    


    render() {
        return (
            <div className='center'>
                <div className='menubar'>
                    {<div className='menu'> 
                        {this.props.restaurant.name} 
                    </div>}
                    {this.showDetails()}
                </div>
            </div>
        );
    }
}

export default OrderDetails;