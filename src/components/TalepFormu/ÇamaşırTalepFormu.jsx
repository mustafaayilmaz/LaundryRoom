import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'
import { IonButton, IonButtons, IonCol, IonContent, IonHeader, IonModal, IonRow, IonTitle, IonToolbar } from '@ionic/react'
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
			kurutmaVar: false,
			yumuşatıcıVar: false,
			deterjanVar: false
		}
	})

	const onSubmit = async data => {
		const doc = await firebaseClient.addDocument('sepetler', { ...data, uid: user.uid, tarih: Date.now(), durum: 'Sırada' })
		console.log((await doc.ref.get()).data())
	}

	const takePicture = async () => {
		const image = await Camera.getPhoto({
			quality: 90,
			allowEditing: true,
			resultType: CameraResultType.Uri,
			source: CameraSource.Prompt
		})

		var imageUrl = image.webPath
		imageElement.src = imageUrl
	}

	return (
		<IonModal isOpen={isOpen} onIonModalDidDismiss={reset}>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Çamaşır Talebi Oluşturma</IonTitle>
					<IonButtons slot="start">
						<IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">
				<form onSubmit={handleSubmit(onSubmit)}>
					<IonRow>
						<IonCol style={{ display: 'flex', justifyContent: 'center' }}>
							<img style={{ width: '125px', height: 'auto' }} onClick={() => takePicture()} src={camasir_sepeti} />
						</IonCol>
					</IonRow>

					<Yıkama errors={errors} clearErrors={clearErrors} register={register} />

					<Kurutma setValue={setValue} errors={errors} clearErrors={clearErrors} register={register} setToplamÜcret={setToplamÜcret} toplamÜcret={toplamÜcret} />

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
