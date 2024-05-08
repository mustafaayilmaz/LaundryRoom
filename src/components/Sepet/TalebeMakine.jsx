import { IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonIcon, IonLabel, IonRow } from '@ionic/react'
import { personCircleOutline } from 'ionicons/icons'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import laundrymachine from '../../../public/laundrymachine.png'
import firebaseClient from '../../lib/firebase/firebase'

export const TalebeMakine = ({ makineler }) => {
	const [user, userLoading, userError] = useAuthState(firebaseClient.auth)
	const [sepetData, setSepetData] = useState([])
	const [deneme, setDeneme] = useState('')

	useEffect(() => {
		const fetchSepet = async () => {
			const sepet = (await firebaseClient.firestore.collection('sepetler').doc(makineler.aktifSepetId).get()).data()
			//console.log(sepet)
			setSepetData(sepet)

			console.log(sepetData)
		}
		{
			makineler.aktifSepetId !== '' && fetchSepet()
		}
	}, [makineler])
	if (userLoading) {
		return <Loading />
	}

	//console.log(sepetData)

	return (
		<>
			{user.uid === sepetData.uid && (
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
						<IonRow className="ion-justify-content-center ion-align-items-center">
							<IonChip>
								<IonIcon icon={personCircleOutline}></IonIcon>
								{sepetData.durum === 'Çamaşır Makinesinde' ? <IonLabel>{sepetData.yıkamaProgramı}</IonLabel> : <IonLabel>{sepetData.kurutmaProgramı}</IonLabel>}
							</IonChip>

							<IonChip>
								<IonIcon icon={personCircleOutline}></IonIcon>
								<IonLabel>{sepetData.yıkamaSıcaklığı}Derece</IonLabel>
							</IonChip>
						</IonRow>
					</IonCardContent>
				</IonCard>
			)}
		</>
	)
}
export default TalebeMakine
