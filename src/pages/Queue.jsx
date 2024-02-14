import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonList, IonModal, IonSelect, IonSelectOption, IonTitle, IonToggle, IonToolbar } from '@ionic/react'
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
								<IonItem>
									<IonSelect label="Yıkama Programı" labelPlacement="floating" onIonChange={e => console.log(yıkamaProgramları[e.detail.value])} {...register('yıkamaProgramı')}>
										{Object.values(yıkamaProgramları).map(program => (
											<IonSelectOption value={program.value}>{program.label}</IonSelectOption>
										))}
									</IonSelect>
								</IonItem>
								<IonItem>
									<IonSelect label="Yıkama Sıcaklığı" labelPlacement="floating" onIonChange={e => console.log(e.detail.value)}>
										{sıcaklıklar.map(sıcaklık => (
											<IonSelectOption value={sıcaklık.value}>{sıcaklık.label}</IonSelectOption>
										))}
									</IonSelect>
								</IonItem>
								<IonItem>
									<IonToggle onIonChange={toggleKurutma}>Kurutma</IonToggle>
								</IonItem>
								<IonItem>
									<IonSelect label="Kurutma Programı" labelPlacement="floating" disabled={!isKurutma} onIonChange={e => console.log(kurutmaProgramları[e.detail.value])}>
										{Object.values(kurutmaProgramları).map(program => (
											<IonSelectOption value={program.value}>{program.label}</IonSelectOption>
										))}
									</IonSelect>
								</IonItem>
								<IonItem>
									<IonToggle onIonChange={toggleDeterjan}>Şahsi Deterjan</IonToggle>
								</IonItem>
								<IonItem>
									<IonToggle onIonChange={toggleYumuşatıcı}>Şahsi Yumuşatıcı</IonToggle>
								</IonItem>
								<IonItem>
									<IonInput label="Ek Talep" labelPlacement="floating" placeholder="Ek Taleplerinizi Yazabilirsiniz"></IonInput>
								</IonItem>
								<IonItem>
									<h3>Toplam Fiyat {toplamÜcret}₺</h3>
								</IonItem>
							</IonList>
							<IonButton type="submit">Çamaşır Talebini Yolla</IonButton>
						</form>
					</IonContent>
				</IonModal>
			</IonContent>
		</Authorized>
	)
}

export default Queue
