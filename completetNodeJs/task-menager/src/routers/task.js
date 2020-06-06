const express = require('express')
const Task = require('../models/task')
const router = new express.Router()

router.post('/tasks', async (req, res) => {
    const task = new Task(req.body)
    try {
        await task.save()
        res.status(201).send(task)
    } catch (error) {
        res.status(400).send()
    }
})

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({})
        
        res.send(tasks)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id

    try {
        task = await Task.findById(_id)
        if (!task) {
            res.status(404).send(task)
        }
        
        res.send(task)
    } catch (error) {
        res.status(500).send()
    }
})



router.patch('/tasks/:id', async (req, res) => {
    
    const updates = Object.keys(req.body)
    const updatables = ['description', 'completed']
    const isValideOperation = updates.every(update => updatables.includes(update))

    if (!isValideOperation) {
        return res.status(400).send('error: Invalide updates!')
    }

    try {
        const _id = req.params.id
        const task = await Task.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true})

        if (!task) {
            res.status(400).send()
        }

        res.send(task)
    } catch (error) {
        res.status(400).send(error)
    }
})


router.delete('/tasks/:id', async (req, res) => {
    try {
        const _id = req.params.id
        const task = await Task.findByIdAndDelete(_id)

        if(!task){
            return res.status(404).send()    
        }
        res.send(task)
    } catch (error) {
        res.status(500).send()
    }

})

module.exports = router