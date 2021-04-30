const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const routes = require('./routes')
// const http = require('http')
// const socket = require('socket.io')

const app = express()
const PORT = process.env.PORT || 8080

// const server = http.Server(app)
// const io = socket(server)

// io.on('connection', (socket) => {
//     console.log('connected to socket !!')
//     socket.on('disconnect', (data) =>{
//         // io.emit('abcd', data)
//         console.log('User disconnected !!')
//     })
// })

const mongoUri = "mongodb+srv://sp:sp1999@cluster0.r77ai.mongodb.net/AUCTION?retryWrites=true&w=majority"

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/food_tech_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected !!');
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use('/', routes)

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

app.listen(PORT, () => {
    console.log(`Server is Up and running at ${PORT}`);
})
