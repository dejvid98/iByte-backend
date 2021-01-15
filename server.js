const app = require('./app')
const mongoose = require('mongoose')

require('dotenv').config()

// Paste DB link here to connect
const DB_CONNECTION = process.env.DB_CONNECTION

try {
    mongoose
        .connect(DB_CONNECTION, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        })
        .then(() => console.log('DB connection successful!'))
} catch (e) {
    console.log(e)
}

const port = process.env.port || 3005

app.listen(port, () => {
    console.log(`Server is running on port ${port}...`)
})
