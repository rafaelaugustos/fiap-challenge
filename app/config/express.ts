import express from 'express'
import cors from 'cors'

import auth from '@/app/api/routes/auth'

export default () => {
	const app = express()

	app.set('port', process.env.PORT || 3000)
	app.use(cors())
	app.use(express.urlencoded({ extended: true }))
	app.use(express.json())

	app.use(express.static('public'))

	auth(app)

	return app
}
