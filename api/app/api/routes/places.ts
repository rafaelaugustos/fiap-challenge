import useController from '@/app/api/controllers/places'

const places = (app: any) => {
	const controller = useController()

	app.route('/places').get(controller.places)
}

export default places
