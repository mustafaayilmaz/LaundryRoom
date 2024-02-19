import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react'
import React from 'react'
import { useSignOut } from 'react-firebase-hooks/auth'
import Authorized from '../layouts/Authorized'
import firebaseClient from '../lib/firebase/firebase'
export const Profile = () => {
	const [signOut, loading, error] = useSignOut(firebaseClient.auth)

	return (
		<Authorized>
			<IonCard className="ion-card">
				<IonCardHeader className="ion-justify-content-center ion-align-items-center">
					<IonCardContent>## ₺</IonCardContent>
					<IonCardTitle>MUSTAFA YILMAZ</IonCardTitle>
				</IonCardHeader>
			</IonCard>
			<IonButton
				onClick={async () => {
					const success = await signOut()
					if (success) {
						console.log('Successfully signed out ')
					}
				}}
			>
				Çıkış Yap
			</IonButton>
		</Authorized>
	)
}

export default Profile
