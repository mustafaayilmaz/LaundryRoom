import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react'
import React from 'react'
import Authorized from '../layouts/Authorized'
export const Profile = () => {
	return (
		<Authorized>
			<IonCard className="ion-card">
				<IonCardHeader className="ion-justify-content-center ion-align-items-center">
					<IonCardContent>## ₺</IonCardContent>
					<IonCardTitle>MUSTAFA YILMAZ</IonCardTitle>
				</IonCardHeader>
			</IonCard>
		</Authorized>
	)
}

export default Profile
