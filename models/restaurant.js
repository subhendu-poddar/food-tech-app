const {Schema, model} = require('mongoose')

const template = new Schema ({
    name: {
        type: String,
        required: true
    },
    totalOrders: {
        type: Number,
        required: true
    },
    orders: [{
        type: String
    }]
})

module.exports = model('restaurant', template)