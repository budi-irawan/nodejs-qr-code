const QRCode = require('qrcode')
const { Person } = require('../models')
const { where } = require('sequelize')

exports.generateQR = async (req, res) => {
    try {
        const { full_name, email, phone } = req.body

        if (!full_name) {
            return res.status(400).json({ message: 'Full name is required' })
        }
        if (!email) {
            return res.status(400).json({ message: 'Email required' })
        }
        if (!phone) {
            return res.status(400).json({ message: 'Phone required' })
        }

        const dataEmail = await Person.findAll({ where: { email } })
        if (dataEmail.length) {
            return res.status(400).json({ message: 'Email already registered' })
        }
        const dataPhone = await Person.findAll({ where: { phone } })
        if (dataPhone.length) {
            return res.status(400).json({ message: 'Phone number already registered' })
        }

        const payload = JSON.stringify({
            full_name,
            email,
            phone
        })

        const qrBuffer = await QRCode.toBuffer(payload, {
            type: 'png',
            width: 300,
            errorCorrectionLevel: 'H'
        })

        await Person.create({
            full_name,
            email,
            phone
        })

        res.setHeader('Content-Type', 'image/png')
        res.setHeader('Content-Disposition', 'inline; filename="qr-code.png"')

        return res.send(qrBuffer)

    } catch (error) {
        console.error(error)
        return res.status(500).json({ message: 'Internal server error' })
    }
}
