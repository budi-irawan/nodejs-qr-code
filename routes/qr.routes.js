const express = require('express')
const router = express.Router()
const qrController = require('../controllers/qr.controller')

router.post('/generate', qrController.generateQR)

module.exports = router
