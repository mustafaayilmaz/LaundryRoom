import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'
import { IonButton, IonButtons, IonCol, IonContent, IonHeader, IonModal, IonRow, IonTitle, IonToolbar, useIonAlert } from '@ionic/react'
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import camasir_sepeti from '../../../public/camasir_sepeti.png'
import firebaseClient from '../../lib/firebase/firebase'

import Loading from '../../pages/Loading'
import { ücret } from '../../types/ücret'
import EkBilgiler from './EkBilgiler'
import Kurutma from './Kurutma'
import Yıkama from './Yıkama'

export default function ÇamaşırTalepFormu({ isOpen, setIsOpen }) {
	const [user, loading, userError] = useAuthState(firebaseClient.auth)
	const [presentAlert] = useIonAlert()
	const [info, setInfo] = useState([])
	const [toplamÜcret, setToplamÜcret] = useState(ücret.taban)

	const [capturedImage, setCapturedImage] = useState(null)

	if (loading) {
		return <Loading />
	}
	if (!user || userError) {
		return console.log('Error')
	}

	const fetchUserInfo = async () => {
		const info = (await firebaseClient.firestore.collection('kullanıcılar').doc(user.uid).get()).data()
		setInfo(info)
		console.log(info)
	}

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
			const downloadURL = await firebaseClient.uploadFile(user.uid, capturedImage)
			const doc = await firebaseClient.firestore.collection('sepetler').add({
				...data,
				uid: user.uid,
				tarih: Date.now(),
				durum: 'Sırada',
				no: info.no,
				image: downloadURL
			})
			console.log((await doc.get()).data())
			setIsOpen(false)
		} catch (error) {
			console.error(error)
		}
	}

	const takePicture = async () => {
		try {
			const image = await Camera.getPhoto({
				quality: 90,
				allowEditing: true,
				resultType: CameraResultType.Base64,
				source: CameraSource.Prompt
			})

			// Ekran görüntüsü almadan önce
			console.log('Before setCapturedImage:', image)

			if (image && image.base64String) {
				setCapturedImage(`data:image/jpeg;base64,${image.base64String}`)
				console.log(capturedImage)
			} else {
				presentAlert({
					header: 'Hata',
					message: 'Resim alınırken bir hata oluştu. Lütfen tekrar deneyin.',
					buttons: ['Tamam']
				})
			}

			// Ekran görüntüsü almadan sonra
			console.log('After setCapturedImage:', capturedImage)
		} catch (error) {
			console.error(error)
			presentAlert({
				header: 'Hata',
				message: 'Resim alınırken bir hata oluştu. Lütfen tekrar deneyin.',
				buttons: ['Tamam']
			})
		}
	}

	return (
		<IonModal isOpen={isOpen} onIonModalDidDismiss={reset}>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Çamaşır Talebi Oluştur</IonTitle>
					<IonButtons slot="start">
						<IonButton
							onClick={() => {
								setIsOpen(false)
							}}
						>
							Kapat
						</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent className="ion-padding">
				<form onSubmit={handleSubmit(onSubmit)}>
					<IonRow>
						<IonCol style={{ display: 'flex', justifyContent: 'center' }} onClick={() => fetchUserInfo()}>
							{capturedImage === null ? <img style={{ width: '125px', height: 'auto' }} onClick={takePicture} src={camasir_sepeti} alt="Çamaşır Sepeti" /> : <img style={{ width: '125px', height: 'auto' }} src={capturedImage} alt="Çamaşır Sepeti" />}
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
