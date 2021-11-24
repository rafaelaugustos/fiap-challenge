import axios from 'axios'

export default async (req: any, res: any) => {
	try {
		const { address } = req.query
		const { data }: any = await axios.get(
			'https://maps.google.com/maps/api/geocode/json',
			{
				params: {
					sensor: false,
					key: 'AIzaSyCzRgYdGSIEeLO4EGkwnEzeMUnqsyBcsHg',
					address,
				},
			}
		)

		console.log(data)
		res.status(200).json(data)
	} catch (err: any) {
		res.status(500).json({
			error: err.message,
		})
	}
}
