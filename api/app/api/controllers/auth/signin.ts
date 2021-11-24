import { MongoClient } from 'mongodb'

export default (req: any, res: any) => {
	try {
		const { email, password } = req.body

		const client = new MongoClient(
			'mongodb+srv://fiap:vixkUuyCmHMgXt7@fiap.muycy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
		)

		client.connect(async (err) => {
			const collection = await client
				.db('fiap')
				.collection('users')
				.findOne({ email, password })
			console.log(collection)
			if (collection) {
				delete collection.password
				res
					.status(200)
					.json({ status: true, message: 'User found', user: collection })
			} else {
				res.status(404).json({ status: false, message: 'User not found' })
			}
			client.close()
		})
	} catch (e) {
		console.log(e)
	}
}
