const SoccerPlayer = require(".././models/soccerPlayer.models")


exports.createSoccerPlayer = async(req, res) => {
    const { name, category, email, password, phone} = req.body

    const soccerPlayer = await SoccerPlayer.create({
        name: name.toLowerCase().trim(),
        password: password,
        email: email.toLowerCase().trim(),
        category: category.toLowerCase().trim(),
        phone: phone.toLowerCase().trim(),
    })

    res.status(201).json({
        sattus: 'success',
        message: 'jugador creado 😍',
        soccerPlayer
    })
}