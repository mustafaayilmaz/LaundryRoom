import { IonAccordion, IonAccordionGroup, IonAlert, IonButton, IonButtons, IonContent, IonHeader, IonItem, IonLabel, IonList, IonModal, IonTitle, IonToolbar } from '@ionic/react'
import { Sepet } from '../../types/sepet'

import React from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
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
	const [çamaşırMakineleri, çamaşırloading, çamaşırError] = useCollectionData(firebaseClient.firestore.collection('çamaşırMakineleri'))
	const [kurutmaMakineleri, kurutmaloading, kurutmaError] = useCollectionData(firebaseClient.firestore.collection('kurutmaMakineleri'))
	return (
		<IonModal isOpen={isSepetOpen}>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Sepet {sepet.no} kullanıcının sepeti</IonTitle>
					<IonButtons slot="start">
						<IonButton onClick={() => setIsSepetOpen(false)}>Close</IonButton>
					</IonButtons>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonList lines="none">
					<IonItem style={{ marginTop: '6px' }}>
						<IonLabel>Sepet Sahibi</IonLabel>
						<TalebeChip uid={sepet.no} />
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
						<IonButton id="çamaşır-makinesine-ata">Çamaşır Makinesine Ata</IonButton>
						<IonButton disabled="none" id="kurutmaya-ata">
							Kurutma Makinesine Ata
						</IonButton>
						<IonButton
							disabled="none"
							expand="block"
							onClick={async () => {
								await firebaseClient.çamaşırıBitir(sepet.id), setIsSepetOpen(false)
							}}
						>
							Çamaşırı Bitir
						</IonButton>
					</>
				)}
				{sepet.durum === 'Çamaşır Makinesinde' && sepet.kurutmaProgramı !== null && (
					<>
						<IonButton disabled="none" id="çamaşır-makinesine-ata">
							Çamaşır Makinesine Ata
						</IonButton>
						<IonButton id="kurutmaya-ata">Kurutma Makinesine Ata</IonButton>
						<IonButton
							disabled="none"
							expand="block"
							onClick={async () => {
								await firebaseClient.çamaşırıBitir(sepet.id), setIsSepetOpen(false)
							}}
						>
							Çamaşırı Bitir
						</IonButton>
					</>
				)}
				{sepet.durum === 'Kurutma Makinesinde' && (
					<>
						<IonButton disabled="none" id="çamaşır-makinesine-ata">
							Çamaşır Makinesine Ata
						</IonButton>
						<IonButton disabled="none" id="kurutmaya-ata">
							Kurutma Makinesine Ata
						</IonButton>
						<IonButton
							expand="block"
							onClick={async () => {
								await firebaseClient.çamaşırıBitir(sepet.id), setIsSepetOpen(false)
							}}
						>
							Çamaşırı Bitir
						</IonButton>
					</>
				)}
				{sepet.durum === 'Çamaşır Makinesinde' && sepet.kurutmaProgramı === null && (
					<>
						<IonButton disabled="none" id="çamaşır-makinesine-ata">
							Çamaşır Makinesine Ata
						</IonButton>
						<IonButton disabled="none" id="kurutmaya-ata">
							Kurutma Makinesine Ata
						</IonButton>
						<IonButton
							expand="block"
							onClick={async () => {
								await firebaseClient.çamaşırıBitir(sepet.id), setIsSepetOpen(false)
							}}
						>
							Çamaşırı Bitir
						</IonButton>
					</>
				)}
				{sepet.durum === 'Bitti' && (
					<>
						<IonButton disabled="none" id="çamaşır-makinesine-ata">
							Çamaşır Makinesine Ata
						</IonButton>
						<IonButton disabled="none" id="kurutmaya-ata">
							Kurutma Makinesine Ata
						</IonButton>
						<IonButton
							disabled="none"
							expand="block"
							onClick={async () => {
								await firebaseClient.çamaşırıBitir(sepet.id), setIsSepetOpen(false)
							}}
						>
							Çamaşırı Bitir
						</IonButton>
					</>
				)}
				{çamaşırMakineleri && çamaşırMakineleri.length > 0 && (
					<IonAlert
						trigger="çamaşır-makinesine-ata"
						header="Çamaşır makinesini seçiniz"
						buttons={[
							{
								text: 'Tamam',
								handler: async makineId => {
									try {
										console.log(makineId)
										await firebaseClient.çamaşırMakinesineAta(sepet.id, makineId), setIsSepetOpen(false)
									} catch (error) {
										console.log(error)
									}
								}
							}
						]}
						inputs={çamaşırMakineleri.map(makine => ({
							label: `Çamaşır makinesi ${makine.no}`,
							type: 'radio',
							value: `Çamaşır makinesi ${makine.no}`,
							disabled: makine.durum === 'Çalışıyor' || makine.durum === 'Arızalı'
						}))}
					></IonAlert>
				)}

				{kurutmaMakineleri && kurutmaMakineleri.length > 0 && (
					<IonAlert
						trigger="kurutmaya-ata"
						header="Kurutma makinesini seçiniz"
						buttons={[
							{
								text: 'Tamam',
								handler: async makineId => {
									try {
										console.log(makineId)
										await firebaseClient.kurutmaMakinesineAta(sepet.id, makineId)
										setIsSepetOpen(false)
									} catch (error) {
										console.log(error)
									}
								}
							}
						]}
						inputs={kurutmaMakineleri.map(makine => ({
							label: `Çamaşır makinesi ${makine.no}`,
							type: 'radio',
							value: `Çamaşır makinesi ${makine.no}`,
							disabled: makine.durum === 'Çalışıyor' || makine.durum === 'Arızalı'
						}))}
					></IonAlert>
				)}
			</IonContent>
		</IonModal>
	)
}
