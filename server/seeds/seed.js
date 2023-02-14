const connection = require('../config/connection')
const { User } = require('../models')

connection.once('open', async () => {
    await User.deleteMany()

    await User.create({
        username: 'Rafael',
        email: 'rafael@gmail.com',
        password: 'redninja'
    })

    console.log('seed done!')
    process.exit(0)
})
