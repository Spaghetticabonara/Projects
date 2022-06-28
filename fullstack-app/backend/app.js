import express from 'express'
import cors from 'cors'

class Server {
    constructor() {
        this.app = express()
        this.server()
        this.middleware()
        this.routes()
    }

    middleware() {
        this.app.use(express.json())
        // CORS added
        this.app.use(cors())
        this.app.use((req, res, next) => {
            console.log('Hello middleware')
            return next()
        })
    }

    routes() {
        this.app.get('/', (req, res) => {
            res.json({
                users: [
                    { name: "John", lastname: "Doe" },
                    { name: "Jane", lastname: "Doe" },
                ]
            })
        })
    }

    server() {
        this.app.listen(3001, () => {
            console.log('Server starting on port 3001');
        })
    }
}

export default new Server()