import { IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonIcon, IonLabel, IonRow } from '@ionic/react'
import { buildOutline, moonOutline, personCircleOutline, timeOutline } from 'ionicons/icons'
import React, { useEffect, useState } from 'react'
import laundrymachine from '../../../public/laundrymachine.png'
import firebaseClient from '../../lib/firebase/firebase'

export const ÇamaşırcıMakine = ({ makineler }) => {
	const [sepetData, setSepetData] = useState([])
	const [userData, setUserData] = useState([])
	const tarih = new Date(makineler.tahminiBitiş)
	useEffect(() => {
		const fetchSepet = async () => {
			const sepet = (await firebaseClient.firestore.collection('sepetler').doc(makineler.aktifSepetId).get()).data()
			console.log(sepet)
			setSepetData(sepet)
			const user = (await firebaseClient.firestore.collection('kullanıcılar').doc(sepet.uid).get()).data()
			console.log(user)
			setUserData(user)
			// console.log(sepetData)
			// console.log(userData)
		}
		{
			makineler.aktifSepetId !== '' && fetchSepet()
		}
	}, [makineler])

	return (
		<>
			<IonCard className="ion-align-items-center">
				<IonRow className="ion-align-items-center ion-justify-content-center">
					<IonAvatar className="machine-avatar">
						<img src={laundrymachine} />
					</IonAvatar>
					<IonCardHeader>
						<IonCardTitle>{makineler.no} Numara</IonCardTitle>
						{makineler.selected === 'çamaşırMakineleri' ? <IonCardSubtitle>Çamaşır Makinesi</IonCardSubtitle> : <IonCardSubtitle>Kurutma Makinesi</IonCardSubtitle>}
					</IonCardHeader>
				</IonRow>

				<IonCardContent>
					{makineler.durum === 'Arızalı' && (
						<IonRow className="ion-justify-content-center">
							<IonChip>
								<IonIcon style={{ color: 'red' }} icon={buildOutline}></IonIcon>
								<IonLabel>Arızalı</IonLabel>
							</IonChip>
						</IonRow>
					)}
					{makineler.durum === 'Bekliyor' && (
						<IonRow className="ion-justify-content-center">
							<IonChip>
								<IonIcon style={{ color: 'blue' }} icon={moonOutline}></IonIcon>
								<IonLabel>Bekliyor</IonLabel>
							</IonChip>
						</IonRow>
					)}
					{makineler.durum === 'Çalışıyor' && (
						<IonRow className="ion-justify-content-center ion-align-items-center">
							<IonChip>
								<IonIcon icon={personCircleOutline}></IonIcon>
								<IonLabel>{userData.no} Nolu Kullanıcı</IonLabel>
							</IonChip>

							{/* <IonChip>
						<IonIcon icon={personCircleOutline}></IonIcon>
						<IonLabel>{makineler.no}</IonLabel>
					</IonChip> */}

							<IonChip>
								{/* TODO: Tahmini bitiş süresi */}
								<IonIcon icon={timeOutline}></IonIcon>
								<IonLabel>{tarih.toLocaleTimeString()}</IonLabel>
							</IonChip>

							<IonChip>
								<IonIcon icon={personCircleOutline}></IonIcon>
								{sepetData.durum === 'Çamaşır Makinesinde' ? <IonLabel>{sepetData.yıkamaProgramı}</IonLabel> : <IonLabel>{sepetData.kurutmaProgramı}</IonLabel>}
							</IonChip>
							<IonChip>
								<IonIcon icon={personCircleOutline}></IonIcon>
								<IonLabel>{sepetData.yıkamaSıcaklığı}Derece</IonLabel>
							</IonChip>
						</IonRow>
					)}
				</IonCardContent>
			</IonCard>
		</>
	)
}
export default ÇamaşırcıMakine
