import { IonAccordion, IonAccordionGroup, IonAlert, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonModal, IonTitle, IonToolbar } from '@ionic/react'
import { Sepet } from '../../types/sepet'

import React, { useState } from 'react'
import firebaseClient from '../../lib/firebase/firebase'
import KurutmaChip from './helper/KurutmaChip'
import TalebeChip from './helper/TalebeChip'
import VarYokChip from './helper/VarYokChip'
import YıkamaChip from './helper/YıkamaChip'
/**
 *
 * @param {{sepet: Sepet}} param0
 */
export default function ÇamaşırcıSepetModal({ sepet, isSepetOpen, setIsSepetOpen }) {
	const [sepetDurumu, setSepetDurumu] = useState(sepet.durum)

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
						<YıkamaChip derece={sepet.yıkamaSıcaklığı} yıkamaProgramı={sepet.yıkamaProgramı} />
					</IonItem>

					<IonItem style={{ marginTop: '6px' }}>
						<IonLabel>Kurutma Programı</IonLabel>
						<KurutmaChip kurutmaProgramı={sepet.kurutmaProgramı} />
					</IonItem>

					<IonItem style={{ marginTop: '6px' }}>
						<IonLabel>Şahsi Deterjanım Var</IonLabel>
						<VarYokChip varMı={sepet.deterjanVar} />
					</IonItem>
					<IonItem style={{ marginTop: '6px' }}>
						<IonLabel>Şahsi Yumuşatıcım Var</IonLabel>
						<VarYokChip varMı={sepet.yumuşatıcıVar} />
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
				{sepet.durum === 'Sırada' && (
					<>
						<IonButton id="çamaşır-makinesine-ata" onClick={() => isSepetOpen === false}>
							Çamaşır Makinesine Ata
						</IonButton>
						<IonButton onClick={() => isSepetOpen === false} disabled="none" id="kurutmaya-ata">
							Kurutma Makinesine Ata
						</IonButton>
						<IonButton
							disabled="none"
							expand="block"
							onClick={async () => {
								await firebaseClient.çamaşırıBitir(sepet.id), isSepetOpen === false
							}}
						>
							Çamaşırı Bitir
						</IonButton>
					</>
				)}
				{sepet.durum === 'Çamaşır Makinesinde' && sepet.kurutmaProgramı !== null && (
					<>
						<IonButton onClick={() => isSepetOpen === false} disabled="none" id="çamaşır-makinesine-ata">
							Çamaşır Makinesine Ata
						</IonButton>
						<IonButton onClick={() => isSepetOpen === false} id="kurutmaya-ata">
							Kurutma Makinesine Ata
						</IonButton>
						<IonButton
							disabled="none"
							expand="block"
							onClick={async () => {
								await firebaseClient.çamaşırıBitir(sepet.id), isSepetOpen === false
							}}
						>
							Çamaşırı Bitir
						</IonButton>
					</>
				)}
				{sepet.durum === 'Kurutma Makinesinde' && (
					<>
						<IonButton onClick={() => isSepetOpen === false} disabled="none" id="çamaşır-makinesine-ata">
							Çamaşır Makinesine Ata
						</IonButton>
						<IonButton onClick={() => isSepetOpen === false} disabled="none" id="kurutmaya-ata">
							Kurutma Makinesine Ata
						</IonButton>
						<IonButton
							expand="block"
							onClick={async () => {
								await firebaseClient.çamaşırıBitir(sepet.id), isSepetOpen === false
							}}
						>
							Çamaşırı Bitir
						</IonButton>
					</>
				)}
				{sepet.durum === 'Çamaşır Makinesinde' && sepet.kurutmaProgramı === null && (
					<>
						<IonButton onClick={() => isSepetOpen === false} disabled="none" id="çamaşır-makinesine-ata">
							Çamaşır Makinesine Ata
						</IonButton>
						<IonButton onClick={() => isSepetOpen === false} disabled="none" id="kurutmaya-ata">
							Kurutma Makinesine Ata
						</IonButton>
						<IonButton
							expand="block"
							onClick={async () => {
								await firebaseClient.çamaşırıBitir(sepet.id), isSepetOpen === false
							}}
						>
							Çamaşırı Bitir
						</IonButton>
					</>
				)}
				{sepet.durum === 'Bitti' && (
					<>
						<IonButton onClick={() => isSepetOpen === false} disabled="none" id="çamaşır-makinesine-ata">
							Çamaşır Makinesine Ata
						</IonButton>
						<IonButton onClick={() => isSepetOpen === false} disabled="none" id="kurutmaya-ata">
							Kurutma Makinesine Ata
						</IonButton>
						<IonButton
							disabled="none"
							expand="block"
							onClick={async () => {
								await firebaseClient.çamaşırıBitir(sepet.id), isSepetOpen === false
							}}
						>
							Çamaşırı Bitir
						</IonButton>
					</>
				)}
				<IonAlert
					trigger="çamaşır-makinesine-ata"
					header="Çamaşır makinesini seçiniz"
					// TODO: Button'a on click ekle
					// ? Sadece müsait makineleri göster
					buttons={[
						{
							text: 'Tamam',
							handler: async makineId => {
								try {
									console.log(makineId)
									await firebaseClient.çamaşırMakinesineAta(sepet.id, makineId)
								} catch (error) {
									console.log(error)
								}
							}
						}
					]}
					inputs={[
						{
							label: 'Çamaşır Makinesi 1',
							type: 'radio',
							value: 'Çamaşır Makinesi 1'
						},
						{
							label: 'Çamaşır Makinesi 2',
							type: 'radio',
							value: 'Çamaşır Makinesi 2'
						},
						{
							label: 'Çamaşır Makinesi 3',
							type: 'radio',
							value: 'Çamaşır Makinesi 3'
						},
						{
							label: 'Çamaşır Makinesi 4',
							type: 'radio',
							value: 'Çamaşır Makinesi 4'
						}
					]}
				></IonAlert>

				<IonAlert
					trigger="kurutmaya-ata"
					header="Kurutma makinesini seçiniz"
					// TODO: Button'a on click ekle
					// ? Sadece müsait makineleri göster
					buttons={[
						{
							text: 'Tamam',
							handler: async makineId => {
								try {
									console.log(makineId)
									await firebaseClient.kurutmaMakinesineAta(sepet.id, makineId)
								} catch (error) {
									console.log(error)
								}
							}
						}
					]}
					inputs={[
						{
							label: 'Kurutma Makinesi 1',
							type: 'radio',
							value: 'Kurutma Makinesi 1'
						},
						{
							label: 'Kurutma Makinesi 2',
							type: 'radio',
							value: 'Kurutma Makinesi 2'
						},
						{
							label: 'Kurutma Makinesi 3',
							type: 'radio',
							value: 'Kurutma Makinesi 3'
						}
					]}
				></IonAlert>
			</IonContent>
		</IonModal>
	)
}
