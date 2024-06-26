import { IonAccordion, IonAccordionGroup, IonAlert, IonButton, IonButtons, IonCol, IonContent, IonHeader, IonItem, IonLabel, IonList, IonModal, IonRow, IonTitle, IonToolbar, useIonAlert } from '@ionic/react'
import { useState } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import firebaseClient from '../../lib/firebase/firebase'
import { Sepet } from '../../types/sepet'
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
	const [isImageOpen, setIsImageOpen] = useState(false)
	const [presentAlert] = useIonAlert()
	const alert = (title, message) => {
		presentAlert({
			header: title,
			message: message,
			buttons: ['Tamam']
		})
	}

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
				<IonRow>
					<IonCol style={{ display: 'flex', justifyContent: 'center' }}>
						<img style={{ width: '125px', height: 'auto', cursor: 'pointer' }} src={sepet.image} alt="Çamaşır Sepeti" onClick={() => setIsImageOpen(true)} />
					</IonCol>
				</IonRow>
				{/* Existing content */}
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
								try {
									await firebaseClient.çamaşırıBitir(sepet.id), setIsSepetOpen(false)
									alert('Uyarı', `${sepet.no} nolu kullanıcının çamaşırı bitti.`)
								} catch (error) {
									alert('Hata', error)
								}
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
								try {
									await firebaseClient.çamaşırıBitir(sepet.id), setIsSepetOpen(false)
									alert('Uyarı', `${sepet.no} nolu kullanıcının çamaşırı bitti.`)
								} catch (error) {
									alert('Hata', error)
								}
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
								try {
									await firebaseClient.çamaşırıBitir(sepet.id), setIsSepetOpen(false)
									alert('Uyarı', `${sepet.no} nolu kullanıcının çamaşırı bitti.`)
								} catch (error) {
									alert('Hata', error)
								}
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
										await firebaseClient.çamaşırMakinesineAta(sepet.id, makineId), setIsSepetOpen(false)
										alert('Uyarı', `${sepet.no} nolu kullanıcının sepeti ${makineId}'e atıldı.`)
									} catch (error) {
										alert('Hata', error)
									}
								}
							}
						]}
						inputs={çamaşırMakineleri.map(makine => ({
							label: `Çamaşır Makinesi ${makine.no}`,
							type: 'radio',
							value: `Çamaşır Makinesi ${makine.no}`,
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
										await firebaseClient.kurutmaMakinesineAta(sepet.id, makineId)
										setIsSepetOpen(false)
										alert('Uyarı', `${sepet.no} nolu kullanıcının sepeti ${makineId}'e atıldı.`)
									} catch (error) {
										console.log(error)
									}
								}
							}
						]}
						inputs={kurutmaMakineleri.map(makine => ({
							label: `Kurutma Makinesi ${makine.no}`,
							type: 'radio',
							value: `Kurutma Makinesi ${makine.no}`,
							disabled: makine.durum === 'Çalışıyor' || makine.durum === 'Arızalı'
						}))}
					></IonAlert>
				)}
			</IonContent>
			<IonModal isOpen={isImageOpen}>
				<div className="full-screen-image-container">
					<img src={sepet.image} alt="Çamaşır Sepeti" className="full-screen-image" />
					<IonButton color={'tertiary'} style={{ color: 'black' }} className="close-button" onClick={() => setIsImageOpen(false)}>
						X
					</IonButton>
				</div>
			</IonModal>
		</IonModal>
	)
}
