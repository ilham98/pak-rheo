import Tree from './Tree'
import express from 'express'

const app = express()

app.listen('4000', () => {
    console.log('listening in port 4000')
})

app.get('/', (req, res) => {
    let tree = new Tree
    res.send(tree)
})

