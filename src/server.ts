
import express from 'express'
import '@controllers/UsersControllers'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  return res.json({ message: 'hello world' })
})

app.listen(3333)
