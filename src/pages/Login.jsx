import { IonButton, IonCardContent, IonCol, IonInput, IonLabel, IonRow } from '@ionic/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router'
import NotAuthorized from '../layouts/Not-Authorized'

export const Login = () => {
	const history = useHistory()
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm()
	return (
		<NotAuthorized>
			<IonCardContent className="card-content">
				<IonRow className="ion-align-items-center">
					<IonCol className="ion-no-padding">
						<IonInput label="Kullanıcı Adı" type="text" labelPlacement="floating" className="ion-padding-start ion-padding-end ion-margin-top ion-input" {...register('kullanıcıAdı', { required: true })}></IonInput>
						{errors.kullanıcıAdı && (
							<IonLabel className="ion-margin-start ion-margin-top" color={'warning'}>
								Lütfen kullanıcı adınızı giriniz !
							</IonLabel>
						)}
					</IonCol>
				</IonRow>
				<IonRow className="ion-align-items-center">
					<IonCol className="ion-no-padding">
						<IonInput label={'Şifre'} type="password" labelPlacement="floating" className="ion-padding-start ion-padding-end ion-margin-top ion-input" {...register('şifre', { required: true })} />
						{errors.şifre && (
							<IonLabel className="ion-margin-start ion-margin-top" color={'warning'}>
								Lütfen şifrenizi giriniz !
							</IonLabel>
						)}
					</IonCol>
				</IonRow>

				<IonButton className="ion-margin-top ion-margin-bottom" type="submit" expand="block" color="secondary">
					<span>Giriş Yap</span>
				</IonButton>
			</IonCardContent>
		</NotAuthorized>
	)
}

export default Login
