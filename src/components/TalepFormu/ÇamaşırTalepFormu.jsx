import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'
import { IonButton, IonButtons, IonCol, IonContent, IonHeader, IonModal, IonRow, IonTitle, IonToolbar, useIonAlert } from '@ionic/react'
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import camasir_sepeti from '../../../public/camasir_sepeti.png'
import firebaseClient from '../../lib/firebase/firebase'
import { ücret } from '../../types/ücret'
import EkBilgiler from './EkBilgiler'
import Kurutma from './Kurutma'
import Yıkama from './Yıkama'
export default function ÇamaşırTalepFormu({ isOpen, setIsOpen }) {
	const [user, loading, error] = useAuthState(firebaseClient.auth)
	// console.log(user)
	// Firestore'dan kullanıcı belgelerini çekmek için query oluştur
	//Burada user oluşuturulurken user'a uid sini vermeliyiz. Bunun sebebi mevcut sepetleri gösterirken kullanıcı nosu yazacak
	// const [users, usersLoading, usersError] = useCollectionData(firebaseClient.firestore.collection('kullanıcılar'))
	// // const currentUser = users.where('uid', '==', 'user.uid')
	// console.log(user)
	// console.log(users)
	const [presentAlert] = useIonAlert()

	const [toplamÜcret, setToplamÜcret] = useState(ücret.taban)

	const {
		register,
		handleSubmit,
		clearErrors,
		setValue,
		reset,
		formState: { errors }
	} = useForm({
		defaultValues: {
			kurutmaProgramı: null,
			yumuşatıcıVar: false,
			deterjanVar: false
		}
	})

	const onSubmit = async data => {
		try {
			const doc = await firebaseClient.firestore.collection('sepetler').add({
				...data,
				uid: user.uid,
				tarih: Date.now(),
				durum: 'Sırada',
				no: user.no
			})
			console.log((await doc.get()).data())
			setIsOpen(false)
		} catch (error) {
			console.error(error)
		}
	}

	const takePicture = async () => {
		const image = await Camera.getPhoto({
			quality: 90,
			allowEditing: true,
			resultType: CameraResultType.Base64,
			source: CameraSource.Prompt
		})

		// Kameradan alınan resmi görüntüleme
		const cameraImage = document.getElementById('cameraImage')
		if (cameraImage) {
			cameraImage.src = `data:image/jpeg;base64,${image.base64String}`
		}
	}

	return (
		<IonModal isOpen={isOpen} onIonModalDidDismiss={reset}>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Çamaşır Talebi Oluştur</IonTitle>
					<IonButtons slot="start">
						<IonButton onClick={() => setIsOpen(false)}>Kapat</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">
				<form onSubmit={handleSubmit(onSubmit)}>
					<IonRow>
						<IonCol style={{ display: 'flex', justifyContent: 'center' }}>
							<img style={{ width: '125px', height: 'auto' }} onClick={takePicture} src={camasir_sepeti} alt="Çamaşır Sepeti" />
						</IonCol>
					</IonRow>

					<Yıkama errors={errors} clearErrors={clearErrors} register={register} />

					<Kurutma errors={errors} clearErrors={clearErrors} register={register} setToplamÜcret={setToplamÜcret} toplamÜcret={toplamÜcret} />

					<EkBilgiler setValue={setValue} register={register} toplamÜcret={toplamÜcret} setToplamÜcret={setToplamÜcret} />

					<h3>Toplam Fiyat {toplamÜcret}₺</h3>

					<IonButton expand="block" type="submit">
						Çamaşır Talebi Yolla
					</IonButton>
				</form>
			</IonContent>
		</IonModal>
	)
}
