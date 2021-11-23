import useController from '@/app/api/controllers/auth'

const auth = (app: any) => {
	const controller = useController()

	app.route('/auth/signin').post(controller.signin)
}

export default auth
