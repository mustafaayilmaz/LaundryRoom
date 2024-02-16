import { IonAccordion, IonAccordionGroup, IonButton, IonButtons, IonChip, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonModal, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react'
import { addOutline, apertureOutline, checkmarkOutline, closeOutline, personOutline, thermometerOutline, waterOutline } from 'ionicons/icons'

import React, { useState } from 'react'
import TalebeSepet from '../components/Sepet/TalebeSepet'
import ÇamaşırcıSepet from '../components/Sepet/ÇamaşırcıSepet'
import ÇamaşırTalepFormu from '../components/TalepFormu/ÇamaşırTalepFormu'
import Authorized from '../layouts/Authorized'
import { örnekSepetler } from '../types/sepet'

export const Queue = () => {
	const [isOpen, setIsOpen] = useState(false)

	// TODO: const [selectedSepet, setSelectedSepet]

	const [isSepetOpen, setIsSepetOpen] = useState(false)

	return (
		<Authorized>
			{örnekSepetler.map((sepet, i) => (
				<TalebeSepet key={i} sepet={sepet} />
			))}

			<p>Çamaşırcı</p>

			{örnekSepetler.map((sepet, i) => (
				<ÇamaşırcıSepet key={i} sepet={sepet} />
			))}

			<IonModal isOpen={isSepetOpen}>
				<IonHeader>
					<IonToolbar>
						<IonTitle>Sepet</IonTitle>
						<IonButtons slot="start">
							<IonButton onClick={() => setIsSepetOpen(false)}>Close</IonButton>
						</IonButtons>
					</IonToolbar>
				</IonHeader>
				<IonContent>
					<IonList lines="none">
						<IonItem style={{ marginTop: '6px' }}>
							<IonLabel>Sepet Sahibi</IonLabel>
							<IonChip>
								<IonIcon icon={personOutline}></IonIcon>
								<IonLabel>Talebe No: 1</IonLabel>
							</IonChip>
						</IonItem>
						<IonItem style={{ marginTop: '6px' }}>
							<IonLabel>Yıkama Programı</IonLabel>
							<IonChip>
								<IonIcon icon={waterOutline}></IonIcon>
								<IonLabel>Pamuklu</IonLabel>
								<IonIcon icon={thermometerOutline} className="ion-padding-start"></IonIcon>
								<IonLabel>40°</IonLabel>
							</IonChip>
						</IonItem>

						<IonItem style={{ marginTop: '6px' }}>
							<IonLabel>Kurutma Programı</IonLabel>
							<IonChip>
								<IonIcon icon={apertureOutline}></IonIcon>
								<IonLabel>Sentetik Dolap Kuruluğu</IonLabel>
							</IonChip>
						</IonItem>

						<IonItem style={{ marginTop: '6px' }}>
							<IonLabel>Şahsi Deterjanım Var</IonLabel>
							<IonChip color="success" style={{ paddingLeft: 0 }}>
								<IonIcon icon={checkmarkOutline}></IonIcon>
							</IonChip>
						</IonItem>
						<IonItem style={{ marginTop: '6px' }}>
							<IonLabel>Şahsi Yumuşatıcım Var</IonLabel>
							<IonChip color="danger" style={{ paddingLeft: 0 }}>
								<IonIcon icon={closeOutline}></IonIcon>
							</IonChip>
						</IonItem>
					</IonList>
					<IonAccordionGroup expand="inset">
						<IonAccordion value="first">
							<IonItem slot="header" color="light">
								<IonLabel>Ek Bilgiler</IonLabel>
							</IonItem>
							<div className="ion-padding" slot="content">
								şsdkşsdfjdsflkdsflkjdsfjlkdsfjkldsfjkldsfjlksdfjlksdfljklkjfdsdsffsdfasfıojpsfdogspdofıvmsdopfgusdopfgusdpofgudsopıfu
							</div>
						</IonAccordion>
					</IonAccordionGroup>
					<IonButton>
						<IonSelect aria-label="atama" label="Makineye Ata" onIonChange={() => setIsSepetOpen(false)}>
							<IonSelectOption value="apple">Apple</IonSelectOption>
							<IonSelectOption value="banana">Banana</IonSelectOption>
							<IonSelectOption value="orange">Orange</IonSelectOption>
						</IonSelect>
					</IonButton>
					<IonButton>
						<IonSelect aria-label="atama" label="Kurutmaya Ata" onIonChange={() => setIsSepetOpen(false)}>
							<IonSelectOption value="apple">Apple</IonSelectOption>
							<IonSelectOption value="banana">Banana</IonSelectOption>
							<IonSelectOption value="orange">Orange</IonSelectOption>
						</IonSelect>
					</IonButton>
				</IonContent>
			</IonModal>

			<IonFab vertical="bottom" horizontal="end">
				<IonFabButton onClick={() => setIsOpen(true)}>
					<IonIcon icon={addOutline}></IonIcon>
				</IonFabButton>
			</IonFab>
			<ÇamaşırTalepFormu isOpen={isOpen} setIsOpen={setIsOpen} />
		</Authorized>
	)
}

export default Queue
