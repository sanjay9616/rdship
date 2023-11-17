const express = require('express')
const app = express()
const router = express.Router();

app.post('/account/login', (req, res) => {
    console.log('-------------');
    db.collection('account')
        .findOne({ email: req.body.email, password: req.body.password })
        .then((result) => {
            if (result) {
                res.status(200).json({ data: result, status: 200, success: true, message: 'User login successfully!' })
            } else {
                res.status(400).json({ data: null, status: 400, success: false, message: 'Invalid login credential' })
            }
        })
        .catch((err) => {
            res.status(500).json({ data: null, status: 500, success: false, message: 'Something went wrong!' })
        })

})

module.exports = router