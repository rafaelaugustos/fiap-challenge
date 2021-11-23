import server from './config/express'

const app = server()
const port = 3000

app.listen(port, () => console.log(`Server is running in ${port}`))
