import { MongoClient } from 'mongodb'

export default (req: any, res: any) => {
	try {
		const { name, age, password, email } = req.body
		const client = new MongoClient(
			'mongodb+srv://fiap:vixkUuyCmHMgXt7@fiap.muycy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
		)

		client.connect(async (err) => {
			const collection = await client.db('fiap').collection('users').insertOne({
				name,
				age,
				password,
				email,
			})

			res.status(200).json({ status: true, message: 'User created' })
			client.close()
		})
	} catch (e) {
		console.log(e)
	}
}
