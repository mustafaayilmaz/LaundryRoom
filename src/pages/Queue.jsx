import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonList, IonModal, IonSelect, IonSelectOption, IonTitle, IonToggle, IonToolbar } from '@ionic/react'
import React, { useState } from 'react'
import Authorized from '../layouts/Authorized'

export const Queue = () => {
	const [isOpen, setIsOpen] = useState(false)
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
							<IonButtons slot="end">
								<IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
							</IonButtons>
						</IonToolbar>
					</IonHeader>
					<IonContent className="ion-padding">
						<IonList>
							<IonItem>
								<IonSelect label="Yıkama Programı" labelPlacement="floating">
									<IonSelectOption value="Pamuklu">Pamuklu</IonSelectOption>
									<IonSelectOption value="Sentetik">Sentetik</IonSelectOption>
									<IonSelectOption value="Mix">Mix</IonSelectOption>
								</IonSelect>
							</IonItem>
							<IonItem>
								<IonSelect label="Yıkama Sıcaklığı" labelPlacement="floating">
									<IonSelectOption value="1">30°</IonSelectOption>
									<IonSelectOption value="2">40°</IonSelectOption>
									<IonSelectOption value="3">60°</IonSelectOption>
								</IonSelect>
							</IonItem>
							<IonItem>
								<IonToggle>Kurutma</IonToggle>
							</IonItem>
							<IonItem>
								<IonSelect label="Kurutma Programı" labelPlacement="floating">
									<IonSelectOption value="pDolap">Pamuklu Dolap Kuruluğu</IonSelectOption>
									<IonSelectOption value="sDolap">Sentetik Dolap Kuruluğu</IonSelectOption>
									<IonSelectOption value="spor">Spor</IonSelectOption>
									<IonSelectOption value="mix">Karışık</IonSelectOption>
								</IonSelect>
							</IonItem>
							<IonItem>
								<IonToggle>Şahsi Deterjan</IonToggle>
							</IonItem>
							<IonItem>
								<IonInput label="Ek Talep" labelPlacement="floating" placeholder="Ek Taleplerinizi Yazabilirsiniz"></IonInput>
							</IonItem>
							<IonItem>
								<h1>Toplam Fiyat 5₺</h1>
							</IonItem>
						</IonList>
						<IonButton>Çamaşır Talebini Yolla</IonButton>
					</IonContent>
				</IonModal>
			</IonContent>
		</Authorized>
	)
}

export default Queue
