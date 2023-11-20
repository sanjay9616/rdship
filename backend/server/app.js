const express = require('express')
const { ObjectId } = require('mongodb')
const { connectToDb, getDb } = require('./db')
const app = express()
const cors = require('cors');
const URL = require('./config/urlList');
// const authRouter = require('./routes/auth')


// init app & middleware
app.use(express.json())
app.use(cors());
// app.use("/account/login", authRouter);

// db connetion
let db

connectToDb((err) => {
    if (!err) {
        app.listen(3000, () => {
            console.log('app listining on port 3000')
        })
        db = getDb()
    }
    else {
        console.log('Something wen wrong', process);
    }
})

// routes
app.get('/books', (req, res) => {
    // current page
    const page = req.query.p || 1
    const booksPerPage = 3

    let books = []

    db.collection('books')
        .find()
        .sort({ author: 1 })
        .skip((page - 1) * booksPerPage)
        .limit(booksPerPage)
        .forEach(book => books.push(book))
        .then(() => {
            res.status(200).json(books)
        })
        .catch(() => {
            res.status(500).json({ error: 'Could not fetch the documents' })
        })
})

app.get('/books/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        db.collection('books')
            .findOne({ _id: new ObjectId(req.params.id) })
            .then((doc) => {
                res.status(200).json(doc)
            })
            .catch((err) => {
                res.status(500).json({ error: "Could not fetch the document" })
            })
    } else {
        res.status(500).json({ error: "Not a valid document id" })
    }
})

app.post('/books', (req, res) => {
    const book = req.body

    db.collection('books')
        .insertOne(book)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({ err: 'Could not create new document' })
        })
})

app.delete('/books/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        db.collection('books')
            .deleteOne({ _id: new ObjectId(req.params.id) })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(500).json({ error: 'Could not delete document' })
            })
    } else {
        res.status(500).json({ error: 'Could not delete document' })
    }
})

app.patch('/books/:id', (req, res) => {
    const updates = req.body

    if (ObjectId.isValid(req.params.id)) {
        db.collection('books')
            .updateOne({ _id: new ObjectId(req.params.id) }, { $set: updates })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(err => {
                res.status(500).json({ error: 'Could not update document' })
            })
    } else {
        res.status(500).json({ error: 'Could not update document' })
    }
})

app.post(URL.API.ACCOUNT.SIGNUP.URL, (req, res) => {
    db.collection('account').findOne({ email: req.body.email })
        .then((result) => {
            if (result == null) {
                const user = req.body
                user.name = null
                user.gender = null
                user.isVerified = false
                user.address = []
                user.recentlyViewItems = []
                user.cartItems = []
                user.orderList = []
                user.wishList = []
                user.couponList = []
                user.notificationList = []
                db.collection('account').insertOne(user)
                    .then((result) => {
                        if (result.acknowledged) {
                            res.status(200).json({ data: result, status: 200, message: 'Account created successfully', success: true })
                        } else {
                            res.status(500).json({ data: null, status: 500, success: false, message: 'Something went wrong!' })
                        }
                    })
                    .catch((err) => {
                        res.status(500).json({ data: null, status: 500, success: false, message: 'Something went wrong!' })
                    })
            } else {
                res.status(409).json({ data: null, status: 409, message: 'User Already Exits', success: false })
            }
        })
        .catch((err) => {
            res.status(500).json({ data: null, status: 500, success: false, message: 'Something went wrong!' })
        })
})

app.post(URL.API.ACCOUNT.LOGIN.URL, (req, res) => {
    db.collection('account') // add check if email does not exits
        .findOne({ email: req.body.email, password: req.body.password })
        .then((result) => {
            if (result) {
                res.status(200).json({ data: result, status: 200, success: true, message: 'User login successfully!' })
            } else {
                res.status(400).json({ data: null, status: 400, success: false, message: 'Invalid Credential' })
            }
        })
        .catch((err) => {
            res.status(500).json({ data: null, status: 500, success: false, message: 'Something went wrong!' })
        })

})

app.patch(URL.API.ACCOUNT.VERIFY_USER.URL, (req, res) => {
    db.collection('account').findOne({ email: req.body.email, mobileNo: req.body.mobileNo })
        .then((result) => {
            if (result == null) {
                res.status(401).json({ data: null, status: 401, success: false, message: 'Invalid Credential' })
            } else if (result.isVerified) {
                res.status(409).json({ data: null, status: 409, success: false, message: 'User already verified' })
            } else if (result.isVerified == false) {
                db.collection('account').updateOne({ email: req.body.email, mobileNo: req.body.mobileNo }, { $set: { isVerified: true } })
                    .then((result) => {
                        if (result.acknowledged && result.matchedCount == 1 && result.modifiedCount == 1) {
                            res.status(200).json({ data: result, status: 200, success: true, message: 'User login successfully!' })
                        }
                    })
                    .catch((err) => {
                        res.status(500).json({ data: null, status: 500, success: false, message: 'Something went wrong!' })
                    })
            } else {
                res.status(500).json({ data: null, status: 500, success: false, message: 'Something went wrong!' })
            }
        })
        .catch((err) => {
            res.status(500).json({ data: null, status: 500, success: false, message: 'Something went wrong!' })
        })

})

app.patch(URL.API.ACCOUNT.FORGET_PASSWORD.URL, (req, res) => {
    db.collection('account').findOne({ email: req.body.email })
        .then((result) => {
            if (result) {
                db.collection('account').updateOne({ email: req.body.email }, { $set: { password: req.body.password } })
                    .then((result) => {
                        if (result.acknowledged && result.modifiedCount == 1 && result.matchedCount == 1) {
                            res.status(200).json({ data: null, status: 200, success: true, message: "Password updated successfully" })
                        } else if (result.acknowledged && result.modifiedCount == 0 && result.matchedCount == 1) {
                            res.status(409).json({ data: null, status: 409, success: false, message: 'Please enter new password' })
                        } else {
                            res.status(500).json({ data: null, status: 500, success: false, message: 'Something went wrong!' })
                        }
                    })
                    .catch((err) => {
                        res.status(500).json({ data: null, status: 500, success: false, message: 'Something went wrong!' })
                    })

            } else {
                res.status(401).json({ data: null, status: 401, success: false, message: "User doesn't exists" })
            }
        })
        .catch((err) => {
            res.status(500).json({ data: null, status: 500, success: false, message: 'Something went wrong!' })
        })
})

app.get(URL.API.ACCOUNT.AUTH_DATA.URL, (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        db.collection('account').findOne({ _id: new ObjectId(req.params.id)})
            .then((result) => {
                res.status(200).json({ data: result, status: 200, success: true, message: "User data fetched successfully" })
            })
            .catch((err) => {
                res.status(500).json({ data: null, status: 500, success: false, message: 'Something went wrong!' })
            })
    } else {
        res.status(500).json({ data: null, status: 500, success: false, message: 'Not a valid document id' })
    }
})

