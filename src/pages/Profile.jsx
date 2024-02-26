import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonGrid, IonHeader, IonInput, IonItem, IonModal, IonRow, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react'

import React, { useState } from 'react'
import { useSignOut } from 'react-firebase-hooks/auth'
import Authorized from '../layouts/Authorized'
import firebaseClient from '../lib/firebase/firebase'
export const Profile = () => {
	const [signOut, loading, error] = useSignOut(firebaseClient.auth)
	const [isOpen, setIsOpen] = useState(false)
	return (
		<Authorized>
			<IonCard className="ion-card">
				<IonCardHeader className="ion-justify-content-center ion-align-items-center">
					<IonCardContent>## ₺</IonCardContent>
					<IonCardTitle>MUSTAFA YILMAZ</IonCardTitle>
				</IonCardHeader>
			</IonCard>
			<IonButton onClick={() => setIsOpen(true)}>Bakiye Tanımla</IonButton>
			<IonModal isOpen={isOpen}>
				<IonHeader>
					<IonToolbar>
						<IonTitle>Bakiye Tanımlama</IonTitle>
						<IonButtons slot="end">
							<IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
						</IonButtons>
					</IonToolbar>
					<IonItem>
						<IonSelect label="Kullanıcı no seçiniz" placeholder="Kullanıcı No">
							<IonSelectOption value="1">1</IonSelectOption>
							<IonSelectOption value="2">2</IonSelectOption>
							<IonSelectOption value="3">3</IonSelectOption>
						</IonSelect>
					</IonItem>
					<IonItem>
						<IonGrid>
							<IonRow>
								<IonCol>Kullanıcı mevcut bakiye</IonCol>
								<IonCol>user.bakiye</IonCol>
							</IonRow>
						</IonGrid>
					</IonItem>
					<IonItem>
						<IonGrid>
							<IonRow>
								<IonCol class="bakiye-col">
									<IonButton class="bakiye-buton" expand="block">
										10₺
									</IonButton>
								</IonCol>
								<IonCol class="bakiye-col">
									<IonButton class="bakiye-buton" expand="block">
										20₺
									</IonButton>
								</IonCol>
								<IonCol class="bakiye-col">
									<IonButton class="bakiye-buton" expand="block">
										25₺
									</IonButton>
								</IonCol>
							</IonRow>
							<IonRow>
								<IonCol class="bakiye-col">
									<IonButton class="bakiye-buton" expand="block">
										50₺
									</IonButton>
								</IonCol>
								<IonCol class="bakiye-col">
									<IonButton class="bakiye-buton" expand="block">
										100₺
									</IonButton>
								</IonCol>
								<IonCol class="bakiye-col">
									<IonButton class="bakiye-buton" expand="block">
										<IonInput></IonInput>₺
									</IonButton>
								</IonCol>
							</IonRow>
						</IonGrid>
					</IonItem>
				</IonHeader>
				<IonButton expand="block" onClick={() => setIsOpen(false)}>
					Değişiklikleri Onayla
				</IonButton>
			</IonModal>
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
