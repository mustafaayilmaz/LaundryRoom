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
		// TODO: Ücreti ekle

		const doc = await firebaseClient.addDocument('sepetler', { ...data, uid: user.uid, tarih: Date.now(), durum: 'Sırada' })
		console.log((await doc.ref.get()).data())
	}

	const canvas = document.createElement('canvas')
	const ctx = canvas.getContext('2d')
	const cameraImage = new Image()

	const takePicture = async () => {
		const image = await Camera.getPhoto({
			quality: 90,
			allowEditing: true,
			resultType: CameraResultType.Base64,
			source: CameraSource.Prompt
		})

		cameraImage.src = `data:image/jpeg;base64,${image.base64String}`
		canvas.width = cameraImage.width
		canvas.height = cameraImage.height

		ctx.drawImage(cameraImage, 0, 0)
	}

	const rect = { x: 100, y: 100, width: 200, height: 200 }

	function drawRectangle() {
		ctx.strokeStyle = 'red'
		ctx.lineWidth = 2
		ctx.strokeRect(rect.x, rect.y, rect.width, rect.height)
	}

	function drawImageWithRectangle() {
		ctx.drawImage(cameraImage, 0, 0)
		drawRectangle()
	}

	return (
		<IonModal isOpen={isOpen} onIonModalDidDismiss={reset}>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Çamaşır Talebi Oluştur</IonTitle>
					<IonButtons slot="start">
						<IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">
				<form onSubmit={handleSubmit(onSubmit)}>
					<IonRow>
						<IonCol style={{ display: 'flex', justifyContent: 'center' }}>
							<img
								style={{ width: '125px', height: 'auto' }}
								onClick={() => {
									takePicture().then(drawImageWithRectangle)
								}}
								src={camasir_sepeti}
							/>
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
