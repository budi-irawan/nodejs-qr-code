const QRCode = require('qrcode')
const { Person } = require('../models')

exports.generateQR = async (req, res) => {
    try {
        const { full_name, email, phone } = req.body

        if (!full_name) {
            return res.status(400).json({ message: 'Full name is required' })
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
