express = require('express')

const { signupUser, loginUser } = require ('../controllers/userControllers')

const router = express.Router()

router.post('/login', loginUser)

router.post('/signup', signupUser)


module.exports = router