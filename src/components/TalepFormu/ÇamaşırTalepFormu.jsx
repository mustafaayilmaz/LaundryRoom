import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'
import { IonButton, IonButtons, IonContent, IonHeader, IonModal, IonTitle, IonToolbar } from '@ionic/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ücret } from '../../types/ücret'
import EkBilgiler from './EkBilgiler'
import Kurutma from './Kurutma'
import Yıkama from './Yıkama'

export default function ÇamaşırTalepFormu({ isOpen, setIsOpen }) {
	const [toplamÜcret, setToplamÜcret] = useState(ücret.taban)

	const {
		register,
		handleSubmit,
		clearErrors,
		reset,
		formState: { errors }
	} = useForm()

	const onSubmit = data => console.log(data)

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
					<IonButton expand="block" onClick={() => takePicture()}>
						Fotoğraf
					</IonButton>

					<Yıkama errors={errors} clearErrors={clearErrors} register={register} />

					<Kurutma errors={errors} clearErrors={clearErrors} register={register} setToplamÜcret={setToplamÜcret} toplamÜcret={toplamÜcret} />

					<EkBilgiler register={register} toplamÜcret={toplamÜcret} setToplamÜcret={setToplamÜcret} />

					<h3>Toplam Fiyat {toplamÜcret}₺</h3>

					<IonButton expand="block" type="submit">
						Çamaşır Talebi Yolla
					</IonButton>
				</form>
			</IonContent>
		</IonModal>
	)
}
