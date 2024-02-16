import { IonAccordion, IonAccordionGroup, IonButton, IonButtons, IonChip, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonModal, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/react'
import { checkmarkOutline, closeOutline } from 'ionicons/icons'
import { Sepet } from '../../types/sepet'

import React from 'react'
import KurutmaChip from './helper/KurutmaChip'
import TalebeChip from './helper/TalebeChip'
import YıkamaChip from './helper/YıkamaChip'
/**
 *
 * @param {{sepet: Sepet}} param0
 */
export default function ÇamaşırcıSepetModal({ sepet, isSepetOpen, setIsSepetOpen }) {
	return (
		<IonModal isOpen={isSepetOpen}>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Sepet {sepet.id}</IonTitle>
					<IonButtons slot="start">
						<IonButton onClick={() => setIsSepetOpen(false)}>Close</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonList lines="none">
					<IonItem style={{ marginTop: '6px' }}>
						<IonLabel>Sepet Sahibi</IonLabel>
						<TalebeChip uid={sepet.uid} />
					</IonItem>
					<IonItem style={{ marginTop: '6px' }}>
						<IonLabel>Yıkama Programı</IonLabel>
						<YıkamaChip derece={sepet.derece} yıkamaProgramı={sepet.yıkamaProgramı} />
					</IonItem>

					<IonItem style={{ marginTop: '6px' }}>
						<IonLabel>Kurutma Programı</IonLabel>
						<KurutmaChip kurutmaVar={sepet.kurutmaVar} kurutmaProgramı={sepet.kurutmaProgramı} />
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
							{sepet.ekBilgi}
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
	)
}
