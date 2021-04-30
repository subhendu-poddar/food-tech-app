const express = require('express')
const router = express.Router()
const Restaurant = require('./models/restaurant')


router.post('/add-restaurant', async (req, res) => {
    try {
        const data = await Restaurant.findOne({name: req.body.name})
        if(data){
            return res.send({
                success: false,
                message: 'restaurant already exists !!'
            })
        }
        else{
            const createUser = new Restaurant(req.body)
            createUser.save((err) =>{
                if(err) { console.log('Oops !! Something Wrong') }
                else { console.log('Data has been saved') }
            })
            return res.send({
                success: true,
                message: 'Restaurant successfully Created !!'
            })
        }
    }
    catch(err){
        res.status(400)
    }
})
router.get('/restaurants', async (req,res)=>{
    try{
        const data = await Restaurant.find()
        if(data) { res.status(200).json(data) }
        else { throw new Error('No Restaurant found !!') }
    }catch(err){
        res.status(400).json(err)
    }
})
router.get('/:name/order-details', async (req, res) => {
    try {
        const data = await Restaurant.find({name: req.params.name})
        if (data) { res.status(200).json(data) }
        else { throw new Error('No Restaurant found !!') }
    } catch (err) {
        res.status(400).json(err)
    }
})
router.put('/order-food/:name', async (req, res) => {
    try {
        const ID = await Restaurant.findOne({ name: req.params.name })
        const user = await Restaurant.findByIdAndUpdate(ID._id, req.body)
        if(user){
            res.send({
                success: true,
                message: 'successfully Updated !!'
            })
        }
        else{
            res.send({
                success: true,
                message: 'Invalid Credentials !!'
            })
        }
    }
    catch(err) {
        res.status(400)
    }
})

module.exports = router