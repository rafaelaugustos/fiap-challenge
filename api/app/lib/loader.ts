/* eslint-disable */
import fs from 'fs'

export default (path: string) => {
	const allFiles = fs.readdirSync(path)

	const controller: any = {}
	allFiles.forEach((file) => {
		const fileName = file.split('.')[0]
		if (fileName !== 'index') {
			controller[fileName] = require(`${path}/${file}`).default
		}
	})

	return controller
}
