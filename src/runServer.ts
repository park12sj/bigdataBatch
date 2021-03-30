import express from 'express'

export const runServer = (mongodb) => {
    const app = express(), port=4000

    app.use(express.urlencoded({extended: true}))

    app.get('/', (req,res) => res.json({message: 'Hello world!'}))
        .get('/users/:skip/:limit', async (req,res) => { 
            const {skip, limit} = req.params 

            const usersCollection = await mongodb.collection('users')
            const cursor = await usersCollection
                .find({})
                .sort({name: 1})
                .skip(parseInt(skip))
                .limit(parseInt(limit))
            const result = await cursor.toArray()
            res.json(result)
    })
    .listen(port, () => {console.log(`http://localhost:${port} started...`)})
}