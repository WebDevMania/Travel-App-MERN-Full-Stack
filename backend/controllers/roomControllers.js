const { verifyTokenAdmin, verifyToken } = require("../middlewares/verifyToken")
const Room = require("../models/Room")

const roomController = require("express").Router()


// get all
roomController.get('/', verifyToken, async (req, res) => {
    const type = req.query.type

    let rooms
    try {
        if (type) {
            rooms = await Room.find({ type: type }).limit(15)
            console.log(rooms)
        } else {
            rooms = await Room.find({}).limit(15)
        }
        return res.status(200).json(rooms)
    } catch (error) {
        console.error(error.message)
    }
})

// get types and their corresponding numbers
roomController.get('/find/types', async (req, res) => {
    try {
        const apartment = await Room.find({ type: 'apartment' }).countDocuments()
        const villa = await Room.find({ type: 'villa' }).countDocuments()
        const penthouse = await Room.find({ type: 'penthouse' }).countDocuments()
        const bungalow = await Room.find({ type: 'bungalow' }).countDocuments()

        return res.status(200).json({ apartment, villa, penthouse, bungalow })
    } catch (error) {
        console.error(error.message)
    }
})

// get 
roomController.get('/find/:id', async (req, res) => {
    const id = req.params.id
    try {
        const rooms = await Room.findById(id)
        return res.status(200).json(rooms)
    } catch (error) {
        console.error(error.message)
    }
})

// create
roomController.post('/', verifyTokenAdmin, async (req, res) => {
    try {
        const createdRoom = await Room.create(req.body)
        return res.status(201).json(createdRoom)
    } catch (error) {
        console.error(error.message)
    }
})

// update
roomController.put('/:id', verifyTokenAdmin, async (req, res) => {
    try {
        const room = await Room.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        return res.status(200).json(room)
    } catch (error) {
        console.error(error.message)
    }
})

// delete
roomController.delete('/:id', verifyTokenAdmin, async (req, res) => {
    try {
        await Room.findByIdAndDelete(req.params.id)
        return res.status(200).json({ msg: 'Room has been deleted successfully' })
    } catch (error) {
        console.error(error.message)
    }
})

// book hotel 
roomController.put('/bookRoom/:id', verifyToken, async (req, res) => {
    try {
        const { unavailableDates } = req.body
        const room = await Room.findByIdAndUpdate(req.params.id)

        room.unavailableDates = room.unavailableDates.concat(unavailableDates)
        await room.save()

        return res.status(200).json(room)
    } catch (error) {
        console.error(error.message)
    }
})

module.exports = roomController