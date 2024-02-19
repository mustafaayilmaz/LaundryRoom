import { IonButton, IonCardContent, IonCol, IonInput, IonLabel, IonRow, useIonAlert } from '@ionic/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router'
import { hataMesajları } from '../config/error'
import NotAuthorized from '../layouts/Not-Authorized'
import firebaseClient from '../lib/firebase/firebase'

import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'

export const Login = () => {
	const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(firebaseClient.auth)
	const [presentAlert] = useIonAlert()

	const history = useHistory()
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm()

	const onSubmit = async data => {
		data.kullanıcıAdı += '@gmail.com'

		try {
			const x = await signInWithEmailAndPassword(data.kullanıcıAdı, data.şifre)

			if (x === undefined) {
				presentAlert({
					message: hataMesajları.yanlışKullanıcıAdıveyaŞifre,
					buttons: [
						{
							text: 'Tekrar Dene',
							handler: () => {
								reset()
							}
						}
					]
				})
			} else {
				history.push('/home')
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<NotAuthorized onSubmit={handleSubmit(onSubmit)}>
			<IonCardContent>
				<IonRow className="ion-align-items-center">
					<IonCol className="ion-no-padding">
						<IonInput label="Kullanıcı Adı" type="text" labelPlacement="floating" className="ion-padding-start ion-padding-end   ion-input" {...register('kullanıcıAdı', { required: true })}></IonInput>
						{errors.kullanıcıAdı && <IonLabel color={'warning'}>{hataMesajları.eksikKullanıcıAdı}</IonLabel>}
					</IonCol>
				</IonRow>
				<IonRow className="ion-align-items-center">
					<IonCol className="ion-no-padding">
						<IonInput label={'Şifre'} type="password" labelPlacement="floating" className="ion-padding-start ion-padding-end  ion-input" {...register('şifre', { required: true })} />
						{errors.şifre && <IonLabel color={'warning'}>{hataMesajları.eksikŞifre}</IonLabel>}
					</IonCol>
				</IonRow>

				<IonButton className="ion-margin-top ion-margin-bottom" type="submit" expand="block" color="secondary">
					Giriş Yap
				</IonButton>
			</IonCardContent>
		</NotAuthorized>
	)
}

export default Login
