import { Camera, CameraResultType } from '@capacitor/camera'
import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList, IonModal, IonSelect, IonSelectOption, IonTitle, IonToggle, IonToolbar } from '@ionic/react'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Authorized from '../layouts/Authorized'
import { kurutmaProgramları, sıcaklıklar, yıkamaProgramları } from '../types/programlar'
import { ücret } from '../types/ücret'

export const Queue = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [isKurutma, setIsKurutma] = useState(false)
	const [isYumuşatıcı, setIsYumuşatıcı] = useState(false)
	const [isDeterjan, setIsDeterjan] = useState(false)
	const [toplamÜcret, setToplamÜcret] = useState(ücret.taban)

	const takePicture = async () => {
		const image = await Camera.getPhoto({
			quality: 90,
			allowEditing: true,
			resultType: CameraResultType.Uri
		})
		var imageUrl = image.webPath
		imageElement.src = imageUrl
	}

	const toggleKurutma = () => {
		setIsKurutma(!isKurutma)
		if (!isKurutma) {
			setToplamÜcret(toplamÜcret + ücret.kurutma)
		} else {
			setToplamÜcret(toplamÜcret - ücret.kurutma)
		}
	}
	const toggleYumuşatıcı = () => {
		setIsYumuşatıcı(!isYumuşatıcı)
		if (!isYumuşatıcı) {
			setToplamÜcret(toplamÜcret + ücret.yumuşatıcı)
		} else {
			setToplamÜcret(toplamÜcret - ücret.yumuşatıcı)
		}
	}
	const toggleDeterjan = () => {
		setIsDeterjan(!isDeterjan)
		if (!isDeterjan) {
			setToplamÜcret(toplamÜcret + ücret.deterjan)
		} else {
			setToplamÜcret(toplamÜcret - ücret.deterjan)
		}
	}

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm()

	const onSubmit = data => console.log(data)
	return (
		<Authorized>
			<IonContent className="ion-padding">
				<IonButton expand="block" onClick={() => setIsOpen(true)}>
					Çamaşır Talebi Oluştur
				</IonButton>
				<IonModal isOpen={isOpen}>
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
							<IonList>
								<IonItemGroup>
									<IonItemDivider>
										<IonLabel>Yıkama</IonLabel>
									</IonItemDivider>

									<IonItem>
										<IonSelect label="Yıkama Programı" labelPlacement="floating" onIonChange={e => console.log(yıkamaProgramları[e.detail.value])} {...register('yıkamaProgramı')}>
											{Object.values(yıkamaProgramları).map(program => (
												<IonSelectOption value={program.value}>{program.label}</IonSelectOption>
											))}
										</IonSelect>
									</IonItem>
									<IonItem lines="none">
										<IonSelect label="Yıkama Sıcaklığı" labelPlacement="floating" onIonChange={e => console.log(e.detail.value)}>
											{sıcaklıklar.map(sıcaklık => (
												<IonSelectOption value={sıcaklık.value}>{sıcaklık.label}</IonSelectOption>
											))}
										</IonSelect>
									</IonItem>
								</IonItemGroup>
								<IonItemGroup>
									<IonItemDivider>
										<IonLabel>Kurutma</IonLabel>
									</IonItemDivider>
									<IonItem>
										<IonToggle style={{ height: '56px' }} onIonChange={toggleKurutma}>
											Kurutma
										</IonToggle>
									</IonItem>
									<IonItem>
										<IonSelect label="Kurutma Programı" labelPlacement="floating" disabled={!isKurutma} onIonChange={e => console.log(kurutmaProgramları[e.detail.value])}>
											{Object.values(kurutmaProgramları).map(program => (
												<IonSelectOption value={program.value}>{program.label}</IonSelectOption>
											))}
										</IonSelect>
									</IonItem>
								</IonItemGroup>
								<IonItemGroup>
									<IonItemDivider>
										<IonLabel>Ek Bilgiler</IonLabel>
									</IonItemDivider>
									<IonItem>
										<IonToggle style={{ height: '56px' }} onIonChange={toggleDeterjan}>
											Şahsi Deterjan
										</IonToggle>
									</IonItem>
									<IonItem>
										<IonToggle style={{ height: '56px' }} onIonChange={toggleYumuşatıcı}>
											Şahsi Yumuşatıcı
										</IonToggle>
									</IonItem>
									<IonItem>
										<IonInput label="Ek Talep" labelPlacement="floating" placeholder="Ek Taleplerinizi Yazabilirsiniz"></IonInput>
									</IonItem>
								</IonItemGroup>
								<IonItem lines="none">
									<h3>Toplam Fiyat {toplamÜcret}₺</h3>
								</IonItem>
							</IonList>
							<IonButton expand="block" onClick={() => takePicture()}>
								Fotoğraf
							</IonButton>

							<IonButton expand="block" type="submit">
								Çamaşır Talebi Yolla
							</IonButton>
						</form>
					</IonContent>
				</IonModal>
			</IonContent>
		</Authorized>
	)
}

export default Queue
