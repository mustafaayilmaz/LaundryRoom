import { IonInput } from '@ionic/react'
import React from 'react'
import NotAuthorized from '../layouts/Not-Authorized'
export const Login = () => {
	return (
		<NotAuthorized>
			<IonInput label="Solid input" labelPlacement="floating" fill="solid" placeholder="Enter text"></IonInput>
		</NotAuthorized>
	)
}

export default Login
